import {Container, Button, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useReactMediaRecorder } from "react-media-recorder";
import {useEffect, useState} from 'react';

function Quiz(){
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({audio: true, blobPropertyBag: {type: "audio/wav"}});

    const paramsDownload = {
        headers: {
          "authorization": process.env.REACT_APP_ASSEMBLY_API,
          "content-type": "application/json",
        },
        method: 'GET'
      };

    function printDownload(data) {
        switch (data.status) {
            case 'queued':
            case 'processing':
                console.log('AssemblyAI is still transcribing your audio, please try again in a few minutes!');
            break;
            case 'completed':
                console.log(`Text: ${data.text}`);
            break;
            default:
                console.log(`Something went wrong :-( : ${data.status}`);
            break;
        }
    }

    function transcribe(){
        const transcribedID = 'okptpvf1rr-268c-426e-9b58-557aab9ff6e5';
        const url = `https://api.assemblyai.com/v2/transcript/${transcribedID}`;
        fetch(url, paramsDownload)
        .then(response => response.json())
        .then(data => {
          printDownload(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });        
    }

    const paramsUpload = {
        headers: {
          "authorization": process.env.REACT_APP_ASSEMBLY_API,
          "content-type": "application/json",
        },
        body: JSON.stringify({"audio_url": mediaBlobUrl }),
        method: "POST"
      };

      function upload(){
        console.log(mediaBlobUrl);
        //var fd = new FormData();
        //fd.append()
        const url = 'https://api.assemblyai.com/v2/transcript';
        console.log(paramsUpload);
        fetch(url, paramsUpload)
        .then(response => response.json())
        .then(data => {
          console.log('ID:', data['id']);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }

      function blob(){
          console.log(mediaBlobUrl)
          fetch(mediaBlobUrl)
          .then(res => res.blob())
          .then(blob => {
            /*var fileReader = new FileReader();
            fileReader.readAsDataURL(blob);
            console.log(fileReader); */
            var file = new File([blob], "insert");
            console.log(URL.createObjectURL(file));
          })
          
      }

    /* This section will use a hardcoded question bank to make the quiz for now. */

    const questions = [
      {
        question: 'Cat', 
        answers: [
          {answerContent: '.', isCorrect: false},
          {answerContent: '_', isCorrect: false},
          {answerContent: 'haha', isCorrect: false},
          {answerContent: '-.-. .- -', isCorrect: true}
        ]
      }
    ]

    const [question, setQuestion] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [score, setScore] = useState(0);

    const onAnswerClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = question + 1;
      if (nextQuestion < questions.length) {
        setQuestion(nextQuestion);
      }
      else {
        setDisplayScore(true);
      }
    };

    return (
        <nav className="quiz">

            <Container>
                <Button onClick={startRecording}>start</Button>
                <Button onClick={stopRecording}>end</Button>
                {mediaBlobUrl ? blob() : <p>no audio</p>}
                {status}
            </Container>

            {setDisplayScore ? (
              <Container>
                <Row>
                  You scored {score} out of {questions.length}
                </Row>
              </Container>
            ) : ( 
            <>
              <Container>
                <Row>
                  <span>Question {question + 1}</span>/{questions.length}
                </Row>
                <Row>
                  {questions[question].questionText}
                </Row>
              </Container>

              <Container>
                <Row>
                  {questions[question].answerContent.map((answerContent) => (
                      <button onClick={() => onAnswerClick(answerContent.isCorrect)}>{answerContent.answerText}</button>
                  ))}
                </Row>
              </Container>
            </>)}
        </nav>
    )


}

export default Quiz
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
    } = useReactMediaRecorder({audio: true});

    const paramsDownload = {
        headers: {
          "authorization": process.env.REACT_APP_ASSEMBLY_API,
          "content-type": "application/json",
        },
        method: 'GET'
      };

    var URL;

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
        const transcribedID = 'okpfpovf2o-7f85-4d37-9c86-aa5ae6e1638d';
        const url = `https://api.assemblyai.com/v2/transcript/okpfpovf2o-7f85-4d37-9c86-aa5ae6e1638d`;
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
        body: JSON.stringify({"audio_url": "https://cdn.assemblyai.com/upload/433aa2b6-8c7c-4e85-81bf-23ff668f6bce" }),
        method: "POST"
      };

      function upload(){
        console.log(mediaBlobUrl);
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
          fetch(mediaBlobUrl)
          .then(res => res.blob())
          .then(blob => {
            var formData = new FormData();
            formData.append("file", blob);
            fetch("/transcribe", {
              method: "POST",
              body: formData,
            })
            .then((result) => {
              result.text().then(test => {
                 console.log(test);
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
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
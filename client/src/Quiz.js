import {Container, Button, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useReactMediaRecorder } from "react-media-recorder";
import {useEffect, useState} from 'react';
import QuizBox from './QuizBox';
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

    const [file, changeFile] = useState(null);

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

    function transcribe(test){
        let id = test;
        const url = `https://api.assemblyai.com/v2/transcript/${id}`;
        fetch(url, paramsDownload)
        .then(response => response.json())
        .then(data => {
          printDownload(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });        
    }

    function upload(test){
      const paramsUpload = {
        headers: {
          "authorization": process.env.REACT_APP_ASSEMBLY_API,
          "content-type": "application/json",
        },
        body: JSON.stringify({"audio_url": test }),
        method: "POST"
        };
        const url = 'https://api.assemblyai.com/v2/transcript';
        fetch(url, paramsUpload)
        .then(response => response.json())
        .then(data => {
          console.log('ID:', data['id']);
          transcribe(data['id'])
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
          
    };
      
    function transcribeFile(event){
      console.log(event.target.files[0]);
      var formData = new FormData();
      formData.append("file", event.target.files[0]);
      fetch("/transcribe", {
        method: "POST",
        body: formData,
      })
      .then((result => {
        result.text().then(test => {
          upload(test)
        })
      }))
    }

    function printPlease(){
      transcribe("okp5y62jda-9775-463e-912a-54a23f42bbf8");
    }
    /** 
    return (
        <nav className="quiz">

            <Container>
                <Button onClick={startRecording}>start</Button>
                <Button onClick={stopRecording}>end</Button>
                {mediaBlobUrl ? blob() : <p>no audio</p>}
                {status}
            </Container>
            <Container>
              <form>
                <input type = "file" name ="fileName" onChange={transcribeFile}/>
              </form>
            </Container>
        </nav>
    )
    */
    
    return(
      <QuizBox />
    );
}

export default Quiz
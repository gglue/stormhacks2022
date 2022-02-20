import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useReactMediaRecorder } from "react-media-recorder";
import {useEffect, useState} from 'react';
function QuizBox(){

    const [questionNumber, setNumber] = useState(1);
    // true = translate morse to english, false = translate english to morse
    const [questionType, setType] = useState(true);
    const [questions, setQuestion] = useState("Write yes");
    const [correct, setCorrect] = useState(0);
    const [answer, setAnswer] = useState("yes");
    const [finished, setFinished] = useState(false);
    const [judgement, setJudge] = useState("");
    let questionList = [
        {question: "Write 1",
        answer: "1",
        type: false
        },
        {question: "Write 2",
        answer: "2",
        type: true
        },
        {question: "Write 3",
        answer: "3",
        type: false
        },
        {question: "Write 4",
        answer: "4",
        type: true
        },
        {question: "Write 5",
        answer: "5",
        type: false
        },
        {question: "Write 6",
        answer: "6",
        type: true
        },
        {question: "Write 7",
        answer: "7",
        type: false
        },
        {question: "Write 8",
        answer: "8",
        type: true
        },
        {question: "Write 9",
        answer: "9",
        type: false
        },
        {question: "Write 10",
        answer: "10",
        type: true
        },
        {question: "You're at the end of the quiz!",
        answer: "You're at the end of the quiz!'",
        type: true
        }
    ]
    function checkAnswer(event){
        if (answer === questionList[questionNumber - 1].answer) {
            setCorrect(correct+1);
            setJudge("You are correct!");
        }
        else {
            setJudge(`Incorrect, the right answer is ${questionList[questionNumber - 1].answer}`);
        }
        setNumber(questionNumber+1);
        if (questionNumber === 10) {
            setFinished(true);
        }
    }

    function getWordBank(){
        fetch('/api/quiz')
            .then(response => response.json())
            .then(data => generateQuestions());
        let type = (Math.floor(Math.random() * 2));
    }

    useEffect(() => {
        getWordBank();
    }, []);

    return(
        <Container>
            <Row className = "justify-content-center">
                <Col xs={12} md={5} className = "my-5">
                    <Card>
                        <Card.Body>
                            <Card.Title className = "text-center"><h2> {finished ? <div>Congratulations!</div> : <div>Question {questionNumber}</div>}</h2></Card.Title>
                                {questionList[questionNumber - 1].type ? <Card.Text>Translate this morse code to English!</Card.Text> : <Card.Text>Translate this sentence into Morse code!</Card.Text>}
                                <Card.Text className = "text-center">{questionList[questionNumber - 1].question}</Card.Text>
                                <Form>
                                    <Form.Control type="input" disabled={finished} onChange={(event) => setAnswer(event.target.value)} placeholder="Type answer here."/>
                                </Form>
                        </Card.Body>
                        <div className = "text-center">
                            <Button onClick={checkAnswer} disabled={finished}>Submit</Button>
                        </div>
                        <Card.Text className = "text-center"> {judgement}</Card.Text>
                        <Card.Text className = "text-center"> {finished ? <div>You got {correct} out of 10 questions right!</div> : null}</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}


export default QuizBox
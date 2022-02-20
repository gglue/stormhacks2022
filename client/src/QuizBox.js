import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState} from 'react';
function QuizBox(){

    const [questionNumber, setNumber] = useState(1);
    const [correct, setCorrect] = useState(0);
    const [answer, setAnswer] = useState("yes");
    const [finished, setFinished] = useState(false);
    const [judgement, setJudge] = useState("");
    const [loading, setLoading] = useState(false);
    const [questionList, pushList] = useState([
        
        {question: "You shouldn't be able to see this",
        answer: "Inspecting element eh?'",
        type: true
        }
    ]);

    class Question {
        constructor(question, answer, type){
            this.question = question;
            this.answer = answer;
            this.type = type;
        }
    }
    function checkAnswer(event){
        if (answer === questionList[questionNumber].answer) {
            setCorrect(correct+1);
            setJudge("You are correct!");
            increaseWin();
        }
        else {
            setJudge(`Incorrect, the right answer is ${questionList[questionNumber].answer}`);
            increaseLose();
        }
        setNumber(questionNumber+1);
        if (questionNumber === 10) {
            setFinished(true);
            increaseTotal();
        }
        let inputField = document.getElementById("answerHere");
        inputField.value = '';
    }

    function getWordBank(){
        fetch('/api/quiz')
            .then(response => response.json())
            .then(data => {
                generateQuestions(data);
                setLoading(true);
            });
        
    }

    function letterToMorse(letter){
        switch (letter)
        {
            case 'a':
                return ".- ";
            case 'b':
                return "-... ";
            case 'c':
                return "-.-. ";
            case 'd':
                return "-.. ";
            case 'e':
                return ". ";
            case 'f':
                return "..-. ";
            case 'g':
                return "--. ";
            case 'h':
                return ".... ";
            case 'i':
                return ".. ";
            case 'j':
                return ".--- ";
            case 'k':
                return "-.- ";
            case 'l':
                return ".-.. ";
            case 'm':
                return "-- ";
            case 'n':
                return "-. ";
            case 'o':
                return "--- ";
            case 'p':
                return ".--. ";
            case 'q':
                return "--.- ";
            case 'r':
                return ".-. ";
            case 's':
                return "... ";
            case 't':
                return "- ";
            case 'u':
                return "..- ";
            case 'v':
                return "...- ";
            case 'w':
                return ".-- ";
            case 'x':
                return "-..- ";
            case 'y':
                return "-.-- ";
            case 'z':
                return "--.. ";
            case '1':
                return ".---- ";
            case '2':
                return "..--- ";
            case '3':
                return "...-- ";
            case '4':
                return "....- ";
            case '5':
                return "..... ";
            case '6':
                return "-.... ";
            case '7':
                return "--... ";
            case '8':
                return "---.. ";
            case '9':
                return "----. ";
            case '0':
                return "----- ";
        }
        return "";
    }

    function wordToMorse(sentence){
        let morseSentence = "";
        for (var x = 0; x < sentence.length; x++){
            morseSentence += letterToMorse(sentence.charAt(x));
        }
        if(morseSentence.substring(morseSentence.length - 1) === ' '){
            morseSentence = (morseSentence.substring(0, morseSentence.length - 1));
        }
        return morseSentence;
    }

    function generateQuestions(data){
        for (let x = 0; x < 10; x++) {
            let tempSentence = "";
            let tempQuestion = "";
            let tempAnswer = "";
            // Create generic sentence
            tempSentence += data.noun[Math.floor(Math.random() * 20)].word;
            tempSentence += " "
            tempSentence += data.verb[Math.floor(Math.random() * 10)].word;
            tempSentence += " "
            tempSentence += data.propositon[Math.floor(Math.random() * 10)].word;
            tempSentence += " "
            tempSentence += data.noun[Math.floor(Math.random() * 20)].word;

            // Decide if morse -> words or vice versa
            let type = Math.floor(Math.random() * 2)
            if (type){
                tempQuestion = tempSentence;
                tempAnswer = wordToMorse(tempSentence);
            }
            else{
                tempQuestion = wordToMorse(tempSentence);
                tempAnswer = tempSentence;
            }
            let completedQuestion = new Question(tempQuestion, tempAnswer, type);
            questionList.push(completedQuestion);

        }
        questionList.push(
            {question: "You're at the end of the quiz!",
            answer: "You're at the end of the quiz!'",
            type: true
            })
        console.log(questionList);
    }

    function increaseTotal(){
        fetch('/api/quiz/finish', {body: "hi", method: "POST"})
    }
    
    function increaseLose(){
        fetch('/api/quiz/wrong', {body: "hi", method: "POST"})
    }

    function increaseWin(){
        fetch('/api/quiz/correct', {body: "hi", method: "POST"})
    }

    useEffect(() => {
        getWordBank();
        document.title = "Quiz Yourself!";
    }, []);

    function generateCard(){
        return(<Card className ="bg-transparent">
            <Card.Body>
                <Card.Title><h2> {finished ? <div>Congratulations!</div> : <div>Question {questionNumber}</div>}</h2></Card.Title>
                    {questionList[questionNumber].type ? <Card.Text>Translate this sentence into Morse code! (Use . and -)</Card.Text> : <Card.Text>Translate this morse code to English! </Card.Text>}
                    <Card.Text>{questionList[questionNumber].question}</Card.Text>
                    <Form onSubmit={e => {e.preventDefault();}}>
                        <Form.Control id="answerHere" type="input" disabled={finished} onChange={(event) => setAnswer(event.target.value)} placeholder="Type answer here."/>
                    </Form>
            </Card.Body>
            <div>
                <Button onClick={checkAnswer} disabled={finished}>Submit</Button>
            </div>
            <Card.Text> {judgement}</Card.Text>
            <Card.Text> {finished ? <div>You got {correct} out of 10 questions right! <br></br> Your stats have been saved.</div> : null}</Card.Text>
        </Card>)
    }

    return(
        <Container>
            <Row className = "justify-content-center text-center">
                <Col xs={12} md={5} className = "my-5">
                    {loading ?
                        generateCard()
                        : <div>Please login to try the quiz :)</div>}
                </Col>
            </Row>
        </Container>
    )

}


export default QuizBox
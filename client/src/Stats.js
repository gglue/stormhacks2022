import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function Stats(){
    const [state, setState] = useState({
        quizTotal:0,
        totalQuestions:0,

        totalCorrect:0,
        totalIncorrect:0
    })

    useEffect(() => {
        function getData() {
            axios("http://localhost:3001/api/profile", {
                method: "get",
                withCredentials: true
            }).then(result => {
                if (result.status === 200 || result.status === 201) {
                    setState({
                        quizTotal:result.data.quizzes_done,
                        totalCorrect: result.data.correct,
                        totalIncorrect: result.data.incorrect,
                        totalQuestions: result.data.incorrect + result.data.correct})
                }
            }).catch(error => {
                console.log(error)
            })
        }
        getData();
    },[])

    return (
        <nav className="stats">
            <Container>
                <Row className="text-center">
                    <div className="totalStats">
                        <h2 id="quizTotal">Total Quizzes done: {state.quizTotal}:</h2>
                        <h2 id="totalQuestions">Total Questions Answered: {state.totalQuestions}</h2>
                        <h2 id="totalCorrect">Total Correct: {state.totalCorrect}</h2>
                        <h2 id="totalIncorrect">Total Incorrect: {state.totalIncorrect}</h2>
                    </div>
                </Row>
            </Container>

        </nav>
    )
}

export default Stats
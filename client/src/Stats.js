import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import {motion} from 'framer-motion';

function Stats(){
    const [state, setState] = useState({
        quizTotal:0,
        totalQuestions:0,

        totalCorrect:0,
        totalIncorrect:0
    })

    const slideIn = {
        hidden: {
            y: -1250
        },
        visible: {
            y: 0,
            transition : {
                delay : 1.0, type: 'spring', stiffness: 125,
            }
        },
        exit: {
            y: -1250,
            transition: {ease: 'easeInOut'}
        }
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Statistics!";
        function getData() {
            // Get user stats
            axios("http://localhost:5000/api/profile", {
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
                setLoading(true);
            }).catch(error => {
                console.log(error)
            })
        }
        getData();
    },[])

    function makeStats(){
        return(
            <div className="totalStats">
                <h2 id="quizTotal">Total Quizzes completed: {state.quizTotal}</h2>
                <h2 id="totalQuestions">Total Questions Answered: {state.totalQuestions}</h2>
                <h2 id="totalCorrect">Total Correct: {state.totalCorrect}</h2>
                <h2 id="totalIncorrect">Total Incorrect: {state.totalIncorrect}</h2>
            </div>
        )
    }
    return (
        <nav className="stats">
            <Container>
                <motion.div variants={slideIn} initial = "hidden" animate= "visible" exit="exit">
                    <Row className="text-center">
                    {loading ? makeStats() : <div>Please login to see your stats :)</div>}
                    </Row>
                </motion.div>
            </Container>

        </nav>
    )
}

export default Stats
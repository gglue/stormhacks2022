import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Stats(){

    const [quizTotal, totalQuestions, totalCorrect, totalIncorrect] = useState("");

    return (
        <nav className="stats">
            <Container>
                <Row className="text-center">
                    <div className="totalStats">
                        <h2 id="quizTotal" value={quizTotal}>Total Quizzes done:</h2>
                        <h2 id="totalQuestions" value={totalQuestions}>Total Questions Answered:</h2>
                        <h2 id="totalCorrect" value={totalCorrect}>Total Correct:</h2>
                        <h2 id="totalIncorrect" value={totalIncorrect}>Total Incorrect:</h2>
                    </div>
                </Row>
            </Container>

        </nav>
    )
}

export default Stats
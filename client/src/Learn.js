import './App.css';
import chart from './images/morse-chart_grande2.png';
import dot from './images/morse_dot.png';
import dash from './images/morse_dash.png';
import morsebot from './images/morsebot3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from "react";
import catAudio from './sound/cat.wav';
import dashAudio from './sound/dash.wav';
import dotAudio from './sound/dot.wav';
import hiAudio from './sound/hi.wav';
import {motion} from 'framer-motion';
function Learn(){

    useEffect(() => {
        document.title = "Educate Yourself!";
    }, []);

    const start = (src) => {
        const sound = new Audio(src)
        sound.play()
    }

    const firstFade = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition : {
                delay : 1.0,
            }
        },
        exit: {
            opacity: 0
        }
    }

    const secondFade = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition : {
                delay : 2.0,
            }
        },
        exit: {
            opacity: 0
        }
    }

    return (
        <div className="Learn">
            <Container>
                <Row className="text-center">
                    <motion.div className="topHeader" variants={secondFade} initial = "hidden" animate= "visible" exit="exit">
                        <h1 id="title">How do I use Morse Code?<br></br><small>.... --- .-- / -.. --- / .. / ..- ... . / -- --- .-. ... . / -.-. --- -.. . ..--..</small></h1>
                    </motion.div>
                    <Col sm={6}>
                        <motion.div variants={firstFade} initial = "hidden" animate= "visible" exit="exit">
                            <img src={morsebot} id="morsebot" alt="morsebot"></img>
                        </motion.div>
                    </Col>
                    <Col sm={6}>
                        <motion.div variants={secondFade} initial = "hidden" animate= "visible" exit="exit">
                            <img src={chart} id="chart-img" alt="chart"></img>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            
            <motion.div variants={secondFade} initial = "hidden" animate= "visible" exit="exit">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <img src={dot} id="dot-img" alt="dot"></img>
                            <h2 id="dot-content">This symbol represents a dot (.). A length of a dot consists of one unit.</h2>
                            <Button onClick = { () => start(dotAudio)}>Play</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className='text-center'>
                            <img src={dash} id="dash-img" alt="dash"></img>
                            <h2 id="dash-content">This symbol represents a dash (-). A length of a dash consists of 3 units. This makes it 3 times longer than a dot.</h2>
                            <Button onClick = { () => start(dashAudio)}>Play</Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <h2 id="space">.... ..</h2>
                            <h2 id="space-content">A Letter in Morse Code is separated by a space. A space between unique letters consists of three units. One unit for spaces between 
                            the same letter. The above says "Hi".</h2>
                            <Button onClick = { () => start(hiAudio)}>Play</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className='text-center'>
                            <h2 id="example">-.-. .- -</h2>
                            <h2 id="example-content">Can you guess what this morse code means? Answer: It's <span className="spoiler">Cat</span></h2>
                            <Button onClick = { () => start(catAudio)}>Play</Button>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    )
}  

export default Learn
import './App.css';
import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import sosAudio from './sound/sos.wav';
import morsebot from './images/morsebot2.png'
import {motion} from 'framer-motion';
function Home(){

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
    useEffect(() => {
        document.title = "Learn Morse Code!";
    }, []);

    const start = (src) => {
        const sound = new Audio(src)
        sound.play()
    }

    return (
        <nav className="home">
            <Container className='text-center'>
                    <Row>
                        <Col>
                        <motion.div variants={secondFade} initial = "hidden" animate= "visible" exit="exit"><h2 id="title">If someone sent you this signal, would you understand what they meant?<br></br><small>... --- ...</small></h2>
                            <Button onClick = { () => start(sosAudio)}>Play</Button>
                        </motion.div>
                        </Col>
                    </Row>
                    <Row>
                        <motion.div variants={secondFade} initial = "hidden" animate= "visible" exit="exit">
                        <h3>That was the signal for "SOS", a common distress signal for ships stranded in the ocean. If you knew Morse Code then you could
                            save those sailors. Otherwise their fate would be left unknown...</h3>
                        </motion.div>
                    </Row>
            </Container>

            <Container className='text-center'>
                    <Row>
                        <Col>
                            <motion.div variants={secondFade} initial = "hidden" animate= "visible" exit="exit">
                                <h3 id="description">Nowadays Morse Code isn't used much due to the better forms of communication that exist today. However it is still well very known for 
                                    being used secret signals and ciphers. Our goal is to teach people how to understand and use Morse Code to spread a form of communication that requires
                                    no words. </h3>
                            </motion.div>
                            <motion.div variants={firstFade} initial = "hidden" animate= "visible" exit="exit"><img src={morsebot} id="morsebot" alt="morsebot"></img></motion.div>
                        </Col>
                    </Row>
            </Container>
        </nav>
    )
}

export default Home
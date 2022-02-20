import './App.css';
import chart from './images/morse-chart_grande2.png';
import dot from './images/morse_dot.png';
import dash from './images/morse_dash.png';
import morsebot from './images/morsebot3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import catAudio from './sound/cat.wav';
import dashAudio from './sound/dash.wav';
import dotAudio from './sound/dot.wav';
import hiAudio from './sound/hi.wav';
import hithereAudio from './sound/hithere.wav';

function Learn(){

    const start = (src) => {
        const sound = new Audio(src)
        sound.play()
    }

    //                        <img src={morsebot} id="morsebot" alt="morsebot"></img>
    return (
        <div className="Learn">
            <Container>
                <Row className="text-center">
                    <div className="topHeader">
                        <h1 id="title">How do I use Morse Code?<br></br><small>.... --- .-- / -.. --- / .. / ..- ... . / -- --- .-. ... . / -.-. --- -.. . ..--..</small></h1>
                    </div>
                    <Col sm={6}>
                        <img src={morsebot} id="morsebot" alt="morsebot"></img>
                    </Col>
                    <Col sm={6}>
                        <img src={chart} id="chart-img" alt="chart"></img>
                    </Col>
                </Row>
            </Container>
            
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
                        <h2 id="space">.... .. / - .... . .-. .</h2>
                        <h2 id="space-content">Words in Morse Code are separated by a slash in translation. A space between words consists of 7 units. The
                        above says "Hi there".</h2>
                        <Button onClick = { () => start(hithereAudio)}>Play</Button>
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
        </div>
    )
}  

export default Learn
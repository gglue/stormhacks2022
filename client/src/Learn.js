import './App.css';
import chart from './images/morse-chart_grande2.png';
import dot from './images/morse_dot.png';

function Learn(){

    return (
        <div className="Learn">
            <div className="topHeader">
                <h1 id="title">How do I use Morse Code?<br></br><small>.... --- .-- / -.. --- / .. / ..- ... . / -- --- .-. ... . / -.-. --- -.. . ..--..</small></h1>
                <img src={chart} id="chart-img" alt="chart"></img>
            </div>

            <div className="description">
                <img src={dot} id="dot-img" alt="dot"></img>
                <h2 id="dot-content">This symbol represents a dot. A length of a dot consist of one unit.</h2>
            </div>
        </div>
    )
}

export default Learn
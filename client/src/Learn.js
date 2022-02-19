import './App.css';
import chart from './images/morse-chart_grande.png';

function Learn(){

    return (
        <div className="Learn">
            <div className="topHeader">
                <h1>How do I use Morse Code?</h1>
                <img src={chart} className="learn-chart" alt="chart"></img>
            </div>
        </div>
    )
}

export default Learn
import React, { useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Learn from './Learn';
import Quiz from './Quiz';
import Stats from './Stats';
import Login from './Login';

function App(){

  /*const [backend, setBackEnd] = useState([{}]); */
  const location = useLocation();

  return (
    <div className="App">
      <div className="content">
        <NavigationBar />
        <Routes location = {location} key = {location.key}>
          <Route exact path="/" element ={<Home />} />
          <Route path ="/learn" element ={<Learn />} />
          <Route path ="/quiz" element ={<Quiz />} />
          <Route path = "/stats" element ={<Stats />} />
          <Route path = "/login" element ={<Login />} />
            
        </Routes>
      </div>
    </div>
  )
}

  /*useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEnd(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backend.message === 'undefined') ? (
        <p>Loading</p>
      ): (backend.message.map((message, i) => (<p key={i}>{message}</p>))
      )}
    </div>
  )
}
*/
export default App
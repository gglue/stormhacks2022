import React, { useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
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
        <Routes location = {location} key = {location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/learn">
            <Learn />
          </Route>
          <Route path ="/quiz">
            <Quiz />
          </Route>
          <Route path = "/stats">
            <Stats />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
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
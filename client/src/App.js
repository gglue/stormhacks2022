import React, { useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
function App(){

  /*const [backend, setBackEnd] = useState([{}]); */
  const location = useLocation();

  return (
    <div className="App">
      <div className="content">
        <Switch location = {location} key = {location.key}>
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
        </Switch>
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
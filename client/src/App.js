import React, { useEffect, useState} from 'react'

function App(){

  const [backend, setBackEnd] = useState([{}])

  useEffect(() => {
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

export default App
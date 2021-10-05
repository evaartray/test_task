import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

ReactDOM.render(<App />, document.getElementById("root"))

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/models").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact />
      </Switch>
    </Router>
        <div>
          {(typeof data.models === 'undefined') ? (
            <p>Loading data...</p>
          ) : (
            data.models.map((model, i) => (
              <p key={i}>{model}</p>
            ))
          )}
        </div>
    </>
  );
}

export default App;

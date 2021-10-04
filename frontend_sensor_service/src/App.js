import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brand-svg-icons'
import './App.css'

library.add(fas, faFontAwesome)
ReactDOM.render(document.body)


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
          ):(
            data.models.map((model, i) => (
              <p key={i}>{model}</p>
            ))
          )}
        </div>
    </>
  );
}

export default App;

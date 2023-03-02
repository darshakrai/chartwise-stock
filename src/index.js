import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Home from './views/home'
import Home1 from './views/home1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={Home1} exact path="/home1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

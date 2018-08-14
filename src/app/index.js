import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
//use react-router-dom for web app
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { Root } from './components/Root'
import { Home } from './components/Home'
import { User } from './components/User'


class App extends Component {
  render () {
    return (
      <Router>
        <Root histo={history}>
          <Route path={"/"} component={Home} exact />
          <Route path={"/user/:id"} component={User}/>
          <Route path={"/home"} component={Home}/>
        </Root>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'))

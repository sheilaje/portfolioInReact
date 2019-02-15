import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import LandingPage from './landingPage/LandingPage'

function App() {
  return (
    <div >
      <HomePage/>
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
      </Switch>
    </div>
  )
}

export default App
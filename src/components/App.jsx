import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import LandingPage from './landingPage/LandingPage'
import AboutMe from './aboutme/AboutMe'
import Resume from './resume/Resume'
import Projects from './projects/Projects'
import contactme from './contactme/ContactMe'
import ContactMe from './contactme/ContactMe';

function App() {
  return (
    <div >
      <HomePage/>
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route exact path= '/aboutme' component={AboutMe}/>
        <Route exact path= '/resume' component={Resume}/>
        <Route exact path= '/projects' component={Projects}/>
        <Route exact path= '/contactme' component={ContactMe}/>
      </Switch>
    </div>
  )
}

export default App
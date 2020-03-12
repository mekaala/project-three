import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Environments from './components/Environments'
import Focuses from './components/Focuses'
import Relaxes from './components/Relaxes'
import SingleEnvironment from './components/SingleEnvironment'
import SingleFocus from './components/SingleFocus'
import SingleRelax from './components/SingleRelax'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <NavBar/>
        <Switch>
          <Route exact path="/environments" component={ Environments }/>
          <Route path="/environments/:environmentId" component={ SingleEnvironment }/>
          <Route exact path="/focuses" component={ Focuses }/>
          <Route path="/focuses/:focusId" component={ SingleFocus }/>
          <Route exact path="/relaxes" component={ Relaxes }/>
          <Route path="/relaxes/:relaxId" component={ SingleRelax }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

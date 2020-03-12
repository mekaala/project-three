import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Environments from './components/Environments'
import Relaxes from './components/Relaxes'
import Focuses from './components/Focuses'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
        <Home/>
        <NavBar/>
        <Switch>
          <Route exact path="/environments" component={ Environments }/>
          <Route exact path="/relaxes" component={ Relaxes }/>
          <Route exact path="/focuses" component={ Focuses }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

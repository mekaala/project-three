import React, { Component } from 'react'
import Concentration from '../images/RUINED.jpg'
import Collapse from '../images/Collapse.jpg'
import Relaxation from '../images/japanrelax.jpg'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Heal and Empower</h2>
                <div className="home-container">
                    <div>
                        <Link to="/relaxes"><img src={ Relaxation } alt="Relaxation in Japan"/></Link>
                        <Link to="/relaxes">Relaxation Exercises</Link>
                    </div>
                    <div>
                        <Link to="/environments"><img src={ Collapse } alt="Stressful Environments"/></Link>
                        <Link to="/environments">Environments</Link>
                    </div>
                    <div>
                        <Link to="/focuses"><img src={ Concentration } alt="Concentration"/></Link>
                        <Link to="/focuses">Focus Exercises</Link>
                    </div>
                </div>
            </div>
        )
    }
}

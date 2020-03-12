import React, { Component } from 'react'
import Concentration from '../images/RUINED.jpg'
import Collapse from '../images/Collapse.jpg'
import Relaxation from '../images/japanrelax.jpg'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div>
                <img src={ Concentration } alt="Concentration"/>
                <Link to="/focuses">Focus Exercises</Link>
                </div>
                <div>
                <img src={ Collapse } alt="Stressful Environments"/>
                <Link to="/environments">Environments</Link>
                </div>
                <div>
                <img src={ Relaxation } alt="Relaxation in Japan"/>
                <Link to="/relaxes">Relaxation Exercises</Link>
                </div>
            </div>
        )
    }
}

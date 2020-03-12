import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <Link to="/environments">Environments</Link>
                    <Link to="/focuses">Focus Exercises</Link>
                    <Link to="/relaxes">Relaxation Exercises</Link>
                </nav>
            </div>
        )
    }
}

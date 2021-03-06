import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <Link to="/relaxes">Relaxation Exercises</Link>
                    <Link to="/environments">Environments</Link>
                    <Link to="/focuses">Focus Exercises</Link>
                </nav>
            </div>
        )
    }
}

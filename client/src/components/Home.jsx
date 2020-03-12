import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/"><h1>Mindify</h1></Link>
                <h3>Energize. Resonate.</h3>
            </div>
        )
    }
}

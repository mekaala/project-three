import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RelaxEnvironment extends Component {
    render() {
        return (
            <div>
                <h3>RELAX EXERCISES</h3>
                <div className="env-index-list">
                {
                    this.props.relaxes.map((relax, i) => {
                        const url = "/relaxes/" + relax._id;
                        return (
                            <div  key={ i }>
                                <Link to={ url }>{ relax.name }</Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FocusEnvironment extends Component {
    render() {
        return (
            <div>
                <h3>FOCUS EXERCISES</h3>
                <div className="env-index-list">
                {
                    this.props.focuses.map((focus, i) => {
                        const url = "/focuses/" + focus._id;
                        return (
                            <div  key={ i }>
                                <Link to={ url }>{ focus.name }</Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
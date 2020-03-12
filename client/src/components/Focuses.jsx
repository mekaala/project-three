/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class Focuses extends Component {
    state = {
        showCreateForm: false,
        focuses: [],
        newFocus: {
            name: '',
            description: '',
        }
    }

    getFocuses = () => {
        Axios.get('/api/focuses').then((response) => {
            this.setState({
                focuses: response.data,
            })
        })
      }
    componentDidMount() {
        this.getFocuses();
    }

    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };

        changeInput = (event) => {
        const updatedNewFocus = { ...this.state.newFocus };
        updatedNewFocus[event.target.name] = event.target.value;
        this.setState({
            newFocus: updatedNewFocus,
        });
    }
    submitCreateForm = (event) => {
        event.preventDefault();
        Axios.post('/api/focuses', this.state.newFocus).then(() => {
            this.getFocuses();
        })
        this.setState({
            showCreateForm: false,
        });
    }

    render() {
        return (
            <div className="focuses">
                <h1>FOCUS EXERCISES</h1>
                {
                    this.state.focuses.map((focus, i) => {
                        const url = "/focuses/" + focus._id;

                        return (
                            <div key={ i }>
                                <Link to={ url }>{ focus.name }</Link>
                            </div>
                        )
                    })
                }
                <div><button onClick={ this.toggleCreateForm }>
                    { this.state.showCreateForm
                        ? 'Cancel'
                        : 'Create New Focus Exercise'
                    }
                </button></div>
                { this.state.showCreateForm
                    ? <form onSubmit={ this.submitCreateForm }>
                        <input type="text" name="name" onChange={ this.changeInput } placeholder="Focus Exercise Name"/><br/>
                        <input type="text" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                        <input type="submit" value="Create New Focus Exercise"/>
                    </form>
                    : null
                }
                <a href="http://localhost:3001/api/focuses" target="_blank">FOCUS EXERCISE API</a>
            </div>
        )
    }
}

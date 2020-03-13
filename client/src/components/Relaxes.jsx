/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default class Relaxes extends Component {
    state = {
        showCreateForm: false,
        relaxes: [],
        newRelax: {
            name: '',
            description: '',
        }
    }

    getRelaxes = () => {
        Axios.get('/api/relaxes').then((response) => {
            this.setState({
                relaxes: response.data,
            })
        })
      }
    componentDidMount() {
        this.getRelaxes();
    }

    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };

        changeInput = (event) => {
        const updatedNewRelax = { ...this.state.newRelax };
        updatedNewRelax[event.target.name] = event.target.value;
        this.setState({
            newRelax: updatedNewRelax,
        });
    }
    submitCreateForm = (event) => {
        event.preventDefault();
        Axios.post('/api/relaxes', this.state.newRelax).then(() => {
            this.getRelaxes();
        })
        this.setState({
            showCreateForm: false,
        });
    }
    render() {
        return (
            <div className="relaxes">
                <h2>RELAXATION EXERCISES</h2>
                <div className="index-container">
                    <div className="index-list">
                    {
                        this.state.relaxes.map((relax, i) => {
                            const url = "/relaxes/" + relax._id;
                            return (
                                <div  key={ i }>
                                    <Link to={ url }>{ relax.name }</Link>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Create New Exercise'
                                }
                            </button></div>
                            { this.state.showCreateForm
                                ? <form onSubmit={ this.submitCreateForm }>
                                    <label>Environment: </label><input type="text" name="environment" onChange={ this.changeInput } placeholder="Environment"/><br/>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } placeholder="Exercise Name"/><br/>
                                    <label>Description: </label><textarea type="text" className="description" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                                    <input className="submit" type="submit" value="Create New Exercise"/>
                                </form>
                                : null
                            }
                    </div>
                </div>
                <a href="http://localhost:3001/api/relaxes" target="_blank">RELAXATION EXERCISE API</a>
            </div>
        )
    }
}

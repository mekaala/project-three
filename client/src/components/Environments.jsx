/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class Environments extends Component {
    state = {
        showCreateForm: false,
        environments: [],
        newEnvironment: {
            name: '',
            description: '',
        }
    }

    getEnvironments = () => {
        Axios.get('/api/environments').then((response) => {
            this.setState({
                environments: response.data,
            })
        })
      }
    componentDidMount() {
        this.getEnvironments();
    }

    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    };

        changeInput = (event) => {
        const updatedNewEnvironment = { ...this.state.newEnvironment };
        updatedNewEnvironment[event.target.name] = event.target.value;
        this.setState({
            newEnvironment: updatedNewEnvironment,
        });
    }
    submitCreateForm = (event) => {
        event.preventDefault();
        Axios.post('/api/environments', this.state.newEnvironment).then(() => {
            this.getEnvironments();
        })
        this.setState({
            showCreateForm: false,
        });
    }

    render() {
        return (
            <div className="environments">
                <h2>ENVIRONMENTS</h2>
                <div className="index-container">
                    <div className="index-list">
                    {
                        this.state.environments.map((environment, i) => {
                            const url = "/environments/" + environment._id;
                            return (
                                <div  key={ i }>
                                    <Link to={ url }>{ environment.name }</Link>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="index-form">
                        <div><button onClick={ this.toggleCreateForm }>
                                { this.state.showCreateForm
                                    ? 'Cancel'
                                    : 'Create New Environment'
                                }
                            </button></div>
                            { this.state.showCreateForm
                                ? <form onSubmit={ this.submitCreateForm }>
                                    <input type="text" name="name" onChange={ this.changeInput } placeholder="Creature Name"/><br/>
                                    <input type="text" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                                    <input type="submit" value="Create New Environment"/>
                                </form>
                                : null
                            }
                    </div>
                </div>
                <a href="http://localhost:3001/api/environments" target="_blank">WORK ENVIRONMENT API</a>
            </div>
        )
    }
}

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
                <h2>FOCUS EXERCISES</h2>
                <div className="index-container">
                    <div className="index-list">
                    {
                        this.state.focuses.map((focus, i) => {
                            const url = "/focuses/" + focus._id;
                            return (
                                <div  key={ i }>
                                    <Link to={ url }>{ focus.name }</Link>
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
                                    <label>Environment: </label><input type="text" name="environment" onChange={ this.changeInput } placeholder="Environment (Optional)"/><br/>
                                    <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } placeholder="Exercise Name"/><br/>
                                    <label>Description: </label><textarea type="text" className="description" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                                    <label>Image: </label><input type="text" name="image" onChange={ this.changeInput } placeholder="Focus Exercise Image (Optional)"/><br/>
                                    <input className="submit" type="submit" value="Create New Exercise"/>
                                </form>
                                : null
                            }
                    </div>
                </div>
                <a href="https://mekaala-mindify-app.herokuapp.com/api/focuses" target="_blank">FOCUS EXERCISE API</a>
            </div>
        )
    }
}

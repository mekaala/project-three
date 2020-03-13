import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class SingleFocus extends Component {
    state = {
        focus: {},
        editFocus: {},
        showEditForm: false,
        redirect: false,
    }

    getFocus = () => {
        const focusId = this.props.match.params.focusId;
        Axios.get('/api/focuses/' + focusId).then(response => {
            this.setState({
                focus: response.data,
                editFocus: response.data,
            });
        });
      }
    componentDidMount() {
        this.getFocus();
    }

    toggleEditForm = () => {
        const newShowEditForm = !this.state.showEditForm;
        this.setState({
            showEditForm: newShowEditForm,
        });
      };
    
    changeInput = (event) => {
        const updatedFocus = { ...this.state.editFocus };
        updatedFocus[event.target.name] = event.target.value;
        this.setState({
            editFocus: updatedFocus,
        });
    }
    submitUpdateForm = (event) => {
        event.preventDefault();
        const focusId = this.props.match.params.focusId;
        Axios.put('/api/focuses/' + focusId, this.state.editFocus).then(() => {
            this.getFocus();
        })
        this.setState({
            showEditForm: false,
        });
    }

    clickDelete = () => {
        const focusId = this.props.match.params.focusId;
        Axios.delete('/api/focuses/' + focusId).then(() => {
            this.setState({
                redirect: true,
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/focuses"/>;
        }

        const { name, description } = this.state.focus;
        return (
            <div className="single-exercise">
                <h2>{ name }</h2>
                <div className="exercise-container">
                    <div className="exercise-description">
                        <p>{ description }</p>
                    </div>
                    <div className="exercise-form">
                        <div><button onClick={ this.toggleEditForm }>
                            { this.state.showEditForm
                                ? 'Cancel'
                                : 'Update Exercise'
                            }
                        </button></div>
                        { this.state.showEditForm
                            ? <form onSubmit={ this.submitUpdateForm }>
                                <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editFocus.name }/><br/>
                                <label>Description: </label><input type="text" name="description" onChange={ this.changeInput } value={ this.state.editFocus.description }/><br/>
                                <input className="submit" type="submit" value="Update Exercise"/>
                            </form>
                            : null
                        }
                        <button onClick={ this.clickDelete }>Delete Exercise</button>
                    </div>
                </div>
            </div>
        )
    }
}

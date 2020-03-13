import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class SingleRelax extends Component {
    state = {
        relax: {},
        editRelax: {},
        showEditForm: false,
        redirect: false,
    }

    getRelax = () => {
        const relaxId = this.props.match.params.relaxId;
        Axios.get('/api/relaxes/' + relaxId).then(response => {
            this.setState({
                relax: response.data,
                editRelax: response.data,
            });
        });
      }
    componentDidMount() {
        this.getRelax();
    }

    toggleEditForm = () => {
        const newShowEditForm = !this.state.showEditForm;
        this.setState({
            showEditForm: newShowEditForm,
        });
      };
    
    changeInput = (event) => {
        const updatedRelax = { ...this.state.editRelax };
        updatedRelax[event.target.name] = event.target.value;
        this.setState({
            editRelax: updatedRelax,
        });
    }
    submitUpdateForm = (event) => {
        event.preventDefault();
        const relaxId = this.props.match.params.relaxId;
        Axios.put('/api/relaxes/' + relaxId, this.state.editRelax).then(() => {
            this.getRelax();
        })
        this.setState({
            showEditForm: false,
        });
    }

    clickDelete = () => {
        const relaxId = this.props.match.params.relaxId;
        Axios.delete('/api/relaxes/' + relaxId).then(() => {
            this.setState({
                redirect: true,
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/relaxes"/>;
        }

        const { name, description } = this.state.relax;
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
                                <label>Environment: </label><input type="text" name="environment" onChange={ this.changeInput } value={ this.state.editRelax.environment }/><br/>
                                <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editRelax.name }/><br/>
                                <label>Description: </label><textarea type="text" className="description" name="description" onChange={ this.changeInput } value={ this.state.editRelax.description }/><br/>
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
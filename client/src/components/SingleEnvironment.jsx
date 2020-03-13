import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class SingleEnvironment extends Component {
    state = {
        environment: {},
        editEnvironment: {},
        showEditForm: false,
        redirect: false,
    }

    getEnvironment = () => {
        const environmentId = this.props.match.params.environmentId;
        Axios.get('/api/environments/' + environmentId).then(response => {
            this.setState({
                environment: response.data,
                editEnvironment: response.data,
            });
        });
      }
    componentDidMount() {
        this.getEnvironment();
    }

    toggleEditForm = () => {
        const newShowEditForm = !this.state.showEditForm;
        this.setState({
            showEditForm: newShowEditForm,
        });
      };
    
    changeInput = (event) => {
        const updatedEnvironment = { ...this.state.editEnvironment };
        updatedEnvironment[event.target.name] = event.target.value;
        this.setState({
            editEnvironment: updatedEnvironment,
        });
    }
    submitUpdateForm = (event) => {
        event.preventDefault();
        const environmentId = this.props.match.params.environmentId;
        Axios.put('/api/environments/' + environmentId, this.state.editEnvironment).then(() => {
            this.getEnvironment();
        })
        this.setState({
            showEditForm: false,
        });
    }

    clickDelete = () => {
        const environmentId = this.props.match.params.environmentId;
        Axios.delete('/api/environments/' + environmentId).then(() => {
            this.setState({
                redirect: true,
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/environments"/>;
        }

        const { name, description } = this.state.environment;
        return (
            <div className="single-environment">
                <h2>{ name }</h2>
                <p>{ description }</p>
                <div><button onClick={ this.toggleEditForm }>
                    { this.state.showEditForm
                        ? 'Cancel'
                        : 'Update Environment'
                    }
                </button></div>
                { this.state.showEditForm
                    ? <form onSubmit={ this.submitUpdateForm }>
                        <label>Name: </label><input type="text" name="name" onChange={ this.changeInput } value={ this.state.editEnvironment.name }/><br/>
                        <label>Description: </label><input type="text" name="description" onChange={ this.changeInput } value={ this.state.editEnvironment.description }/><br/>
                        <input className="submit" type="submit" value="Update Environment"/>
                    </form>
                    : null
                }
                <button onClick={ this.clickDelete }>Delete Environment</button>
            </div>
        )
    }
}
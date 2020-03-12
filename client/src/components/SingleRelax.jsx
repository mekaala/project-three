import React, { Component } from 'react'
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
            <div>
                <h2>{ name }</h2>
                <p>{ description }</p>
                <div><button onClick={ this.toggleEditForm }>
                    { this.state.showEditForm
                        ? 'Cancel'
                        : 'Edit Relaxation Exercise'
                    }
                </button></div>
                { this.state.showEditForm
                    ? <form onSubmit={ this.submitUpdateForm }>
                        <input type="text" name="name" onChange={ this.changeInput } value={ this.state.editRelax.name }/><br/>
                        <input type="text" name="description" onChange={ this.changeInput } value={ this.state.editRelax.description }/><br/>
                        <input type="submit" value="Update Relaxation Exercise"/>
                    </form>
                    : null
                }
                <button onClick={ this.clickDelete }>Delete Relaxation Exercise</button>
            </div>
        )
    }
}
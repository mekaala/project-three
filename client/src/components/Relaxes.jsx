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
            <div>
                <h1>RELAXATION EXERCISES</h1>
                {
                    this.state.relaxes.map((relax, i) => {
                        return (
                            <div key={ i }>
                                <Link to={ relax._id }>{ relax.name }</Link>
                            </div>
                        )
                    })
                }
                <div><button onClick={ this.toggleCreateForm }>
                    { this.state.showCreateForm
                        ? 'Cancel'
                        : 'Create New Relax Exercise'
                    }
                </button></div>
                { this.state.showCreateForm
                    ? <form onSubmit={ this.submitCreateForm }>
                        <input type="text" name="name" onChange={ this.changeInput } placeholder="Relax Exercise Name"/><br/>
                        <input type="text" name="description" onChange={ this.changeInput } placeholder="Description"/><br/>
                        <input type="submit" value="Create New Relax Exercise"/>
                    </form>
                    : null
                }
                <a href="http://localhost:3001/api/relaxes" target="_blank">RELAXATION EXERCISE API</a>
            </div>
        )
    }
}

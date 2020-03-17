/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import profile from '../images/profile.jpg'

export default class About extends Component {
    state = {
        showMindify: false,
        showAbout: false
    }


    toggleMindify = () => {
        const newShowMindify = !this.state.showMindify;
        this.setState({
            showMindify: newShowMindify,
        });
    };

    toggleAbout = () => {
        const newShowAbout = !this.state.showAbout;
        this.setState({
            showAbout: newShowAbout,
        });
    };
    render() {
        return (
            <div className="footer">
                <button onClick={ this.toggleMindify }>
                    { this.state.showMindify
                        ? 'Collapse'
                        : 'About Mindify'
                    }
                </button>
                { this.state.showMindify
                    ?
                    <div className="about">
                    <h1>ABOUT MINDIFY</h1>
                        <div className="mindify-container">
                            <p>Mindify helps users understand what pressures they may feel or are currently experiencing in an environment, and provides a recommendation of exercises to perform. There are focus exercises which empower the mind to complete tasks, and relaxation exercises which calm the mind when faced with stress.</p>
                        </div>
                    </div>
                    : null
                }<br/>
                <button onClick={ this.toggleAbout }>
                    { this.state.showAbout
                        ? 'Collapse'
                        : 'About Me'
                    }
                </button>
                { this.state.showAbout
                    ?
                    <div className="about">
                    <h1>ABOUT ME</h1>
                        <div className="about-container">
                            <img src={profile} alt='profile'/>
                            <div className="about-description">
                                <h2>Mekaal Ahmad</h2>
                                <p>I am currently attending General Assembly as a student of the Software Engineering Immersive program. With this program, I hope to develop an advanced set of skills to benefit others. I hope to master website creation, and craft many successful projects.<br/>
                                Outside of General Assembly, I am a massive Nintendo fan who loves all their games, and a photographer who focuses on capturing the night sky, landscapes, and nature. I hope that with this game, I can display my capabilities in Software Engineering.</p>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className="bottom">
                    <a href="https://reactjs.org/" target="_blank">Made with React.js</a>
                    <nav className="footernav">
                        <a href="https://www.linkedin.com/in/mekaal-ahmad-b7339191/" target="_blank">Linkedin</a> | <a href="https://github.com/mekaala" target="_blank">GitHub</a> | <a href="https://www.instagram.com/mekastro/?hl=en" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>
        )
    }
}
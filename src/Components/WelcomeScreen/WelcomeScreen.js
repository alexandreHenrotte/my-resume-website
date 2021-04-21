import React from 'react';
import './WelcomeScreen.css';


export default class WelcomeScreen extends React.Component {

    getRandomSentence() {
        var array = ["Passioné d'informatique", "Curieux et envieux d'apprendre", "Étudiant en informatique"];
        var sentence = array[Math.floor(Math.random() * array.length)];
        return sentence;
    }

    render() {
        return (
            <div className="welcome-screen-container">
                <div id="welcome-message-container">
                    <h3 id="welcome-name">Henrotte Alexandre</h3>
                    <span>{(this.getRandomSentence())}</span>
                </div>
            </div>
        )
    }
}
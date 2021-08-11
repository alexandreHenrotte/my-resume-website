import React from 'react';
import { Trans } from 'react-i18next';
import './WelcomeScreen.css';


export default class WelcomeScreen extends React.Component {

    getRandomSentence() {
        var sentences = [
            <Trans>welcome-screen.sentences.1</Trans>,
            <Trans>welcome-screen.sentences.2</Trans>,
            <Trans>welcome-screen.sentences.3</Trans>
        ];
        var sentence = sentences[Math.floor(Math.random() * sentences.length)];
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
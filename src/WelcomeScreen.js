import React from 'react';
import './WelcomeScreen.css';


export default class WelcomeScreen extends React.Component {

    getRandomSentence() {
        var array = ["Passioné d'informatique", "Curieux et envieux d'apprendre", "Étudiant en informatique"];
        var sentence = array[Math.floor(Math.random() * array.length)];
        console.log(sentence);
        return sentence;
    }


    /*componentDidMount() {
        var position = this.getNameTitlePos();
        this.moveName(position.left, position.top);
    }
    getNameTitlePos() {
        var nameTitle = document.getElementById("title-name");

        var top = 0, left = 0;
        do {
            top +=  nameTitle.offsetTop  || 0;
            left +=  nameTitle.offsetLeft || 0;
             nameTitle =  nameTitle.offsetParent;
        } while(nameTitle);

        return {
            top: top,
            left: left
        };
    }

    moveName(x_pos, y_pos) {
        var name = document.getElementById('welcome-name');
        name.style.position = "absolute";
        name.style.left = x_pos+'px';
        name.style.top = `calc(${y_pos}px - 4.35vh`;
    }*/

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
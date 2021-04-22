import React from 'react';
import { $ }  from 'react-jquery-plugin';
import './Contact.css';

export default class Contact extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            mail: "",
            message: ""
        }
    }

    componentDidMount() {
        this.textAreaAutoResize();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    textAreaAutoResize() {
        $("textarea").each(function () {
            this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
          }).on("input", function () {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
          });
    }

    sendForm = (event) => {
        event.preventDefault();
        
        var message = `Cette fonctionnalité est en cours de développement mais vous pouvez toujours m'envoyer un mail à l'adresse suivante : \r\n\r\nalexandre.henrotte1@gmail.com`;
        alert(message);

        var log = `Nom: ${this.state.name}\r\nMail: ${this.state.mail}\r\nMessage: ${this.state.message}`;
        console.log(log);
    }

    render() {
        return (
            <section className='contact-container'>
                <div id="contact-form">
                    <h3>Contactez-moi</h3>
                    <form>
                        <input type="text" placeholder="Nom" name="name" onChange={this.handleChange} autocomplete="new-password"/>
                        <input type="email" placeholder="Mail" name="mail" onChange={this.handleChange} autocomplete="new-password"/>
                        <textarea placeholder="Message" name="message" onChange={this.handleChange} autocomplete="new-password"/>
                        <button onClick={(this.sendForm)}>Envoyer</button>
                    </form>
                </div>
            </section>
        )
    }
}
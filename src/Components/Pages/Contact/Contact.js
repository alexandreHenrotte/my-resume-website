import React from 'react';
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

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendForm = (event) => {
        event.preventDefault();
        var text = `Envoi du message\r\nNom: ${this.state.name}\r\nMail: ${this.state.mail}\r\nMessage: ${this.state.message}`;
        alert(text);
    }

    render() {
        return (
            <section className='contact-container'>
                <div id="contact-form">
                    <h3>Contactez-moi</h3>
                    <form>
                        <input type="text" placeholder="Nom" name="name" onChange={this.handleChange} />
                        <input type="email" placeholder="Mail" name="mail" onChange={this.handleChange} />
                        <input type="textarea" placeholder="Message" name="message" onChange={this.handleChange} />
                        <button onClick={(this.sendForm)}>Envoyer</button>
                    </form>
                </div>
            </section>
        )
    }
}
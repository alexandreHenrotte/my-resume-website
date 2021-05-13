import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com'
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

    textAreaAutoResize() {
        $("textarea").each(function () {
            this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
          }).on("input", function () {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
          });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleForm = (event) => {
        event.preventDefault();

        if (this.state.name !== "" && this.state.mail !== "" && this.state.message !== "") {
            this.sendForm();
            this.resetForm();
        }
        else {
            this.formNotValid();
        }
    }

    sendForm() {
        try {
            const templateParams = {
                name: this.state.name,
                email: this.state.mail,
                message: this.state.message
            };

            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            ).then((result) => {
                console.log(result.text);
            });
            this.successMessage();
        }
        catch(e) {
            console.log(e);
            this.errorMessage();
        }
    }

    successMessage() {
        toast.info("🎉 Message envoyé 🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    errorMessage() {
        toast.error("Le message n'a pas pu être envoyé 😓", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    formNotValid() {
        toast.error("Le formulaire de contact est incomplet 😕", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    resetForm() {
        this.setState({name: "", email: "", message: ""});
    }

    render() {
        return (
            <section className='contact-container'>
                <ToastContainer />
                <div id="contact-form">
                    <h3>Contactez-moi</h3>
                    <form>
                        <input type="text" placeholder="Nom" name="name" value={this.state.name} onChange={this.handleChange} autocomplete="new-password"/>
                        <input type="email" placeholder="Mail" name="mail" value={this.state.email} onChange={this.handleChange} autocomplete="new-password"/>
                        <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} autocomplete="new-password"/>
                        <button onClick={(this.handleForm)}>Envoyer</button>
                    </form>
                </div>
            </section>
        )
    }
}
import React from 'react';
import { Trans } from 'react-i18next';
import { renderToString } from 'react-dom/server';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com'
import { $ }  from 'react-jquery-plugin';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css';

export default class Contact extends React.Component {

    

    constructor() {
        super();

        this.state = {
            name: "",
            mail: "",
            message: "",
            captchaCompleted: false
        }
        this.captchaRef = React.createRef();
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

        if (this.state.name === "" || this.state.mail === "" || this.state.message === "") {
            this.formNotValidError();
        }
        else if (!this.state.captchaCompleted) {
            this.missingCaptchaError();
        }
        else {
            this.sendForm();
            this.resetForm();
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
        toast.info(renderToString(<Trans>contact.pop-up.success</Trans>) + " ????", {
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
        toast.error(renderToString(<Trans>contact.pop-up.global-error</Trans>) + " ????", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    missingCaptchaError() {
        toast.error(renderToString(<Trans>contact.pop-up.captcha-error</Trans>), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    formNotValidError() {
        toast.error(renderToString(<Trans>contact.pop-up.incomplete-form</Trans>) +" ????", {
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
        this.setState({name: "", mail: "", message: "", captchaCompleted: false});
        this.captchaRef.current.reset();
    }

    captchaCompleted = () => {
        this.setState({captchaCompleted: true});
    }

    render() {
        return (
            <section className='contact-container'>
                <ToastContainer />
                <div id="contact-form">
                    <h3><Trans>contact.contact-me</Trans></h3>
                    <form>
                        <input type="text" placeholder={renderToString(<Trans>contact.name</Trans>)} name="name" value={this.state.name} onChange={this.handleChange} autocomplete="new-password"/>
                        <input type="email" placeholder="Mail" name="mail" value={this.state.mail} onChange={this.handleChange} autocomplete="new-password"/>
                        <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} autocomplete="new-password"/>
                        <div id="recaptcha-container">
                            <ReCAPTCHA
                                ref={this.captchaRef}
                                sitekey="6Lfu36gbAAAAAHZUlw5qzizMjCujynRiJxHg5yOi"
                                onChange={this.captchaCompleted}
                            />
                        </div>
                        <button onClick={(this.handleForm)}>{<Trans>contact.send</Trans>}</button>
                    </form>
                </div>
            </section>
        )
    }
}
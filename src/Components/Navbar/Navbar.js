import React from 'react';
import { Trans } from 'react-i18next';
import LangSelect from '../../i18n/LangSelectComponent/LangSelect';
import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    toggle = () => {
        this.setState({ visible: !this.state.visible }, () => {
            var navbar = document.getElementById("navbar-wrapper");
            var content = document.getElementById("content");

            if (this.state.visible) {
                navbar.classList.remove("hided");
                content.classList.remove("without-navbar")
            }
            else {
                navbar.classList.add("hided");
                content.classList.add("without-navbar")
            }
        });
    }

    onLanguageChange = () => {
        // Update navbar
        this.forceUpdate()

        // Update content
        this.props.onLanguageChange()
    }

    render() {
        return (
            <div id="navbar-wrapper">
                <nav>
                    <div id="langselect-container">
                        <LangSelect action={this.onLanguageChange}/>
                    </div>
                    <ul className="nav-icons">
                        <li className="nav-icon">
                            <img className={this.props.currentContent === "about-me" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/icons/navbar/user.svg"}
                                onClick={() => this.props.changeContent("about-me")}
                                alt="Icon for section About Me" />
                            <span><Trans>nav-bar.profil</Trans></span>
                        </li>
                        <li className="nav-icon">
                            <img className={this.props.currentContent === "skills" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/icons/navbar/coding.svg"}
                                onClick={() => this.props.changeContent("skills")}
                                alt="Icon for section Skills" />
                            <span><Trans>nav-bar.skills</Trans></span>
                        </li>
                        <li className="nav-icon">
                            <img className={this.props.currentContent === "experiences" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/icons/navbar/experience.svg"}
                                onClick={() => this.props.changeContent("experiences")}
                                alt="Icon for section Experiences" />
                            <span><Trans>nav-bar.formation-experience</Trans></span>
                        </li>
                        <li className="nav-icon">
                            <img className={this.props.currentContent === "projects" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/icons/navbar/projects.svg"}
                                onClick={() => this.props.changeContent("projects")}
                                alt="Icon for section Projects" />
                            <span><Trans>nav-bar.projects</Trans></span>
                        </li>
                        <li className="nav-icon">
                            <img className={this.props.currentContent === "contact" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/icons/navbar/contact.svg"}
                                onClick={() => this.props.changeContent("contact")}
                                alt="Icon for section Contact" />
                            <span><Trans>nav-bar.contact</Trans></span>
                        </li>
                    </ul>
                    <div id="download-pdf-container">
                        <a href={process.env.PUBLIC_URL + "/files/CV-Alexandre_HENROTTE.pdf"} download="">
                            <img className="download-pdf-image"
                                        src={process.env.PUBLIC_URL + "/icons/navbar/pdf.png"}
                                        alt="Download PDF icon"/>
                        </a>
                    </div>
                </nav>
                <img id="toggle-navbar-icon"
                    src={process.env.PUBLIC_URL + "/icons/navbar/toggle-navbar.svg"}
                    onClick={() => this.toggle()}
                    alt="toggle navbar icon" />
            </div>
        )
    }
}
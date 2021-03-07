import React from 'react';
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

    render() {
        return (
            <div id="navbar-wrapper">
                <nav>
                    <ul>
                        <li>
                            <img className={this.props.currentContent === "about-me" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/navbar-icons/user.svg"}
                                onClick={() => this.props.changeContent("about-me")}
                                alt="Icon for section About Me" />
                        </li>
                        <li>
                            <img className={this.props.currentContent === "skills" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/navbar-icons/coding.svg"}
                                onClick={() => this.props.changeContent("skills")}
                                alt="Icon for section Skills" />
                        </li>
                        <li>
                            <img className={this.props.currentContent === "experiences" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/navbar-icons/experience.svg"}
                                onClick={() => this.props.changeContent("experiences")}
                                alt="Icon for section Experiences" />

                        </li>
                        <li>
                            <img className={this.props.currentContent === "projects" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/navbar-icons/projects.svg"}
                                onClick={() => this.props.changeContent("projects")}
                                alt="Icon for section Projects" />

                        </li>
                        <li>
                            <img className={this.props.currentContent === "contact" ? "active-page" : "normal-page"}
                                src={process.env.PUBLIC_URL + "/navbar-icons/contact.svg"}
                                onClick={() => this.props.changeContent("contact")}
                                alt="Icon for section Contact" />
                        </li>
                    </ul>
                </nav>
                <img id="toggle-navbar-icon"
                    src={process.env.PUBLIC_URL + "/navbar-icons/toggle-navbar.svg"}
                    onClick={() => this.toggle()}
                    alt="toggle navbar icon" />
            </div>
        )
    }
}
import React from 'react';
import './Navbar.css';


export default class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar-wrapper">
                <nav>
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + "/navbar-icons/user.svg"}
                                onClick={() => this.props.changeContent("about-me")}
                                alt="Icon for section About Me" />
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + "/navbar-icons/coding.svg"}
                                onClick={() => this.props.changeContent("skills")}
                                alt="Icon for section Skills" />
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + "/navbar-icons/experience.svg"}
                                onClick={() => this.props.changeContent("experiences")}
                                alt="Icon for section Experiences" />

                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + "/navbar-icons/projects.svg"}
                                onClick={() => this.props.changeContent("projects")}
                                alt="Icon for section Projects" />

                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + "/navbar-icons/contact.svg"}
                                onClick={() => this.props.changeContent("contact")}
                                alt="Icon for section Contact" />
                        </li>
                    </ul>
                </nav>
                <img id="toggle-navbar-icon" src={process.env.PUBLIC_URL + "/navbar-icons/toggle-navbar.svg"} alt="toggle navbar icon" />
            </div>
        )
    }
}
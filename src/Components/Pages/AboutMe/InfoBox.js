import React from 'react'
import './InfoBox.css'
import './Languages.css'
import './Interests.css'
import './Softskills.css'

export default class InfoBox extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: false
        }
    }

    handleClick = () => {
        if (this.state.opened) {
            this.setState({ opened: false });
        }
        else {
            this.setState({ opened: true });
        }
    }

    render() {
        return (
            <div class="container" onClick={this.handleClick}>
                <div class="title">
                    <img className="info-icon" src={this.props.image.src} alt={this.props.image.alt}></img>
                    <h3>{this.props.title}</h3>
                    <img className="collapse-icon" src={process.env.PUBLIC_URL + "/icons/about-me/chevron.svg"} alt="Collapse icon"></img>
                </div>
                <div className={this.state.opened ? "info" : "hided"}>
                    {this.props.content}
                </div>
            </div >
        )
    }
}
import React from 'react'
import './InfoBox.css'
import './Languages.css'
import './Interests.css'

export default class InfoBox extends React.Component {
    constructor() {
        super();

        this.state = {
            opened: false
        }
    }

    handleClick = () => {
        if (this.state.opened) {
            this.setState({opened: false});
        }
        else {
            this.setState({opened: true});
        }
    }
    
    render() {
        return (
            <div class="container" onClick={this.handleClick}>
                <div class={!this.state.opened ? "title" : "hided"}>
                    <img src={this.props.image.src} alt={this.props.image.alt}></img>
                    <h3>{this.props.title}</h3>
                </div>
                <div className={this.state.opened ? "info" : "hided"}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}
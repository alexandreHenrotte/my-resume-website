import React from 'react';
import './Content.css';

export default class Content extends React.Component {
    
    constructor() {
        super()
        
        this.state = {
            created: false
        }
    }

    fadeIn = () => {
        var content = document.getElementById("content");
        content.classList.add("fade-in");
        
    }
    onAnimationEnd = () => {
        var content = document.getElementById("content");
        content.classList.remove("fade-in");
    }

    render() {
        this.state.created ? this.fadeIn() : this.setState({created: true});
        return (
            <body id="content" onAnimationEnd={this.onAnimationEnd}>
                {this.props.children}
            </body>
        )
    }
}
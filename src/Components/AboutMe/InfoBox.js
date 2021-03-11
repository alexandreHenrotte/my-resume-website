import React from 'react'
import './InfoBox.css'

export default class InfoBox extends React.Component {
    render() {
        console.log(this.props.image.src)
        return (
            <div class="container ">
                <div class="title">
                    <img src={this.props.image.src} alt={this.props.image.alt}></img>
                    <h1>{this.props.title}</h1>
                </div>
                {this.props.content}
            </div>
        )
    }
}
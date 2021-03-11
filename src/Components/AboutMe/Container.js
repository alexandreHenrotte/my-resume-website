import React from 'react'
import './Container.css'

export default class Container extends React.Component {
    render() {
        console.log(this.props.image.src)
        return (
            <div class={`container ${this.props.containerWidthClass}`}>
                <div class="title">
                    <img src={this.props.image.src} alt={this.props.image.alt}></img>
                    <h1>{this.props.title}</h1>
                </div>
                {this.props.content}
            </div>
        )
    }
}
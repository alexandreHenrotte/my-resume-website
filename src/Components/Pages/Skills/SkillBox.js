import React from 'react';
import './SkillBox.css'

export default class SkillBox extends React.Component {
    render() {
        return (
            <div class="skill-box">
                <img src={this.props.img.src} alt={this.props.img.alt} />
                <span>{this.props.skillName}</span>
            </div>
        )
    }
}
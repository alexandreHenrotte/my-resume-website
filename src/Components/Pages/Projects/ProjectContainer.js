import React from 'react';
import './ProjectContainer.css'
import '../../../utils/ihover.css'

export default class ProjectContainer extends React.Component {
    render() {
        console.log(`https://github.com/${this.props.githubProjectName}`);
        return (
            <div className='project-container'>
                    <h3>{this.props.title}</h3>
                    <div class="ih-item circle colored effect1">
                        <a href={`https://github.com/${this.props.githubProjectName}`} target="_blank">
                            <div class="spinner"></div>
                                <div class="img">
                                    <img src={this.props.img.src} alt={this.props.img.alt} />
                                </div>
                            <div class="info">
                                <div class="info-back">
                                    <h3>Voir sur Github</h3>
                                    <p>{this.props.githubProjectName}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <span>{this.props.text}</span>
            </div>
        )
    }
}
import React from 'react';
import './ProjectContainer.css'
import '../../../utils/ihover.css'

export default class ProjectContainer extends React.Component {
    render() {
        var githubUrl;
        var onHoverMainText;
        var onHoverAltText;
        if (this.props.githubProjectName === undefined) {
            githubUrl = "#";
            onHoverMainText = "En préparation";
            onHoverAltText = "...";
        }
        else {
            githubUrl = `https://github.com/${this.props.githubProjectName}`;
            onHoverMainText = "Voir sur Github";
            onHoverAltText = this.props.githubProjectName;
        }

        return (
            <div className='project-container'>
                    <h3 className="project-name">{this.props.title}</h3>
                    <div class="ih-item circle colored effect1">
                        <a href={githubUrl} target={githubUrl === "#" ? "" : "_blank"} rel="noreferrer">
                            <div class="spinner"></div>
                                <div class="img">
                                    <img src={this.props.img.src} alt={this.props.img.alt} />
                                </div>
                            <div class="info">
                                <div class="info-back">
                                    <h3>{onHoverMainText}</h3>
                                    <p>{onHoverAltText}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <span>{this.props.text}</span>
            </div>
        )
    }
}

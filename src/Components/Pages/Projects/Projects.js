import React from 'react';
import { Trans } from 'react-i18next';
import ProjectContainer from './ProjectContainer';
import './Projects.css';

export default class Projects extends React.Component {
    render() {
        return (
            <section className='projects-container'>
                <div className='projects-list'>
                    <ProjectContainer
                        title={<Trans>projects.1.name</Trans>}
                        githubProjectName="alexandreHenrotte/belgium-covid-tracker"
                        img={{
                            src: process.env.PUBLIC_URL + "/images/projects/belgium-covid-tracker.jpg",
                            alt: "Belgium Covid Tracker Project"
                        }}
                        text={<Trans>projects.1.details</Trans>}
                    />
                    <ProjectContainer
                        title={<Trans>projects.2.name</Trans>}
                        githubProjectName="alexandreHenrotte/SleepWell"
                        img={{
                            src: process.env.PUBLIC_URL + "/images/projects/sleepwell.jpg",
                            alt: "SleepWell Project"
                        }}
                        text={<Trans>projects.2.details</Trans>}
                    />
                    <ProjectContainer
                        title={<Trans>projects.3.name</Trans>}
                        githubProjectName="alexandreHenrotte/3x3-Rubiks-Cube-3D"
                        img={{
                            src: process.env.PUBLIC_URL + "/images/projects/3x3-rubiks-cube-3d.jpg",
                            alt: "3x3-Rubiks-Cube-3D"
                        }}
                        text={<Trans>projects.3.details</Trans>}
                    />
                    <ProjectContainer
                        title={<Trans>projects.4.name</Trans>}
                        img={{
                            src: process.env.PUBLIC_URL + "/images/projects/pricetracker.png",
                            alt: "PriceTracker"
                        }}
                        text={<Trans>projects.4.details</Trans>}
                    />
                    {/* <ProjectContainer
                        title="Stock Manager (en cours)"
                        githubProjectName="alexandreHenrotte/stock-manager"
                        img={{
                            src: process.env.PUBLIC_URL + "/images/projects/stock-manager.jpg",
                            alt: "Stock Manager Project"
                        }}
                        text="Site web permettant aux utilisateurs la création de stocks et la gestion de leurs produits."
                    /> */}
                </div>
                <div class='more-projects-container'>
                    <a href="https://github.com/alexandreHenrotte?tab=repositories" target="_blank" rel="noreferrer">
                        <Trans>projects.see-more-button</Trans>
                    </a>
                </div>
            </section>
        )
    }
}

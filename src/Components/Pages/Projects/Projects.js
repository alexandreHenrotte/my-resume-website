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
                        title="Belgium Covid Tracker"
                        githubProjectName="alexandreHenrotte/belgium-covid-tracker"
                        img= {{
                            src: process.env.PUBLIC_URL + "/images/projects/belgium-covid-tracker.jpg",
                            alt: "Belgium Covid Tracker Project"
                        }}
                        text={<Trans>projects.1.details</Trans>}
                    />
                    <ProjectContainer
                        title="SleepWell"
                        githubProjectName="alexandreHenrotte/SleepWell"
                        img= {{
                            src: process.env.PUBLIC_URL + "/images/projects/sleepwell.jpg",
                            alt: "SleepWell Project"
                        }}
                        text={<Trans>projects.2.details</Trans>}
                    />
                    <ProjectContainer
                        title="PriceTracker (en cours)"
                        img= {{
                            src: process.env.PUBLIC_URL + "/images/projects/pricetracker.png",
                            alt: "PriceTracker"
                        }}
                        text={<Trans>projects.3.details</Trans>}
                    />
                    {/* <ProjectContainer
                        title="Stock Manager (en cours)"
                        githubProjectName="alexandreHenrotte/stock-manager"
                        img= {{
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
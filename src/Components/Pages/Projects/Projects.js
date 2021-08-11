import React from 'react';
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
                        text="Bot Twitter postant journalièrement des statistiques sur l'état du Covid-19 en Belgique."
                    />
                    <ProjectContainer
                        title="SleepWell"
                        githubProjectName="alexandreHenrotte/SleepWell"
                        img= {{
                            src: process.env.PUBLIC_URL + "/images/projects/sleepwell.jpg",
                            alt: "SleepWell Project"
                        }}
                        text="Site web indiquant les meilleures heures pour aller dormir en se basant sur les cycles du sommeil."
                    />
                    <ProjectContainer
                        title="PriceTracker (en cours)"
                        img= {{
                            src: process.env.PUBLIC_URL + "/images/projects/pricetracker.png",
                            alt: "PriceTracker"
                        }}
                        text="Site web permettant à l'utilisateur de suivre des produits présents sur plusieurs sites web et de recevoir une alerte lorsque le prix descend."
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
                        Voir tous mes projets open-source (petits et grands)
                    </a>
                </div>
            </section>
        )
    }
}
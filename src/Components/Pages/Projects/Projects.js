import React from 'react';
import ProjectContainer from './ProjectContainer';
import './Projects.css';

export default class Projects extends React.Component {
    render() {
        return (
            <section className='projects-container'>
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
                    title="Stock Manager (en cours)"
                    githubProjectName="alexandreHenrotte/stock-manager"
                    img= {{
                        src: process.env.PUBLIC_URL + "/images/projects/stock-manager.jpg",
                        alt: "Stock Manager Project"
                    }}
                    text="Site web permettant aux utilisateurs la création de stocks et la gestion de leurs produits."
                />
            </section>
        )
    }
}
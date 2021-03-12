import React from 'react'
import './AboutMe.css'
import '../../../utils/basic-animations.css'
import InfoBox from './InfoBox'

export default class AboutMe extends React.Component {
    render() {
        return (
            <section className='about-me-container'>
                <div className='left-info'>
                    <h1 id="title-name">Henrotte Alexandre</h1>
                    <img id="profile-pic" src={process.env.PUBLIC_URL + "/images/about-me/profile-pic.png"} alt="Henrotte Alexandre" />
                    <ul className="profile-infos">
                        <li>19 ans</li>
                        <li className="text-separator">/</li>
                        <li>Tintigny</li>
                        <li className="text-separator">/</li>
                        <li>Développeur junior</li>
                    </ul>
                    <p id="text-about-me">Passionné par l'informatique depuis mon plus jeune âge, je suis une personne qui a soif de connaissance et qui ne lâche rien pour atteindre ses objectifs</p>
                    <ul className="social-networks">
                        <li>
                            <a href="https://github.com/alexandreHenrotte" target="_blank" rel="noreferrer">
                                <img className="bounce" src={process.env.PUBLIC_URL + "/icons/social-networks/github.svg"} href="https://github.com/alexandreHenrotte" alt="Github icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/henrotte-alexandre/" target="_blank" rel="noreferrer">
                                <img className="bounce" src={process.env.PUBLIC_URL + "/icons/social-networks/linkedin.svg"} alt="LinkedIn icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='right-info'>
                    {
                        <InfoBox
                            image={{
                                src: process.env.PUBLIC_URL + "/icons/about-me/languages.svg",
                                alt: "Languages icon"
                            }}
                            title="Langues"
                            content={
                                <div className="info">
                                    <ul>
                                        <li>Français : langue maternelle</li>
                                        <li>Anglais : niveau B2</li>
                                    </ul>
                                </div>
                            }
                        />
                    }
                    {
                        <InfoBox
                            image={{
                                src: process.env.PUBLIC_URL + "/icons/about-me/interests.svg",
                                alt: "Interests icon"
                            }}
                            title="Centres d'intérêts"
                            content={
                                <div className="info">
                                    <ul>
                                        <li>Développement (logiciel et web)</li>
                                        <li>Jeux vidéo</li>
                                        <li>Livres</li>
                                        <li>Cinéma</li>
                                    </ul>
                                </div>
                            }
                        />
                    }
                    {
                        <InfoBox
                            image={{
                                src: process.env.PUBLIC_URL + "/icons/about-me/soft-skills.svg",
                                alt: "Soft-skills icon"
                            }}
                            title="Soft skills"
                            content={
                                <div className="info">
                                    <ul>
                                        <li>Passion</li>
                                        <li>Persévérance</li>
                                        <li>Curiosité</li>
                                    </ul>
                                </div>
                            }
                        />
                    }
                </div>
            </section>

        )
    }
}
import React from 'react'
import './AboutMe.css'
import '../../../utils/basic-animations.css'
import InfoBox from './InfoBox'

export default class AboutMe extends React.Component {
    render() {
        return (
            <section className='about-me-container'>
                <div className='info-column'>
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
                <div className='info-column'>
                    {
                        <InfoBox
                            image={{
                                src: process.env.PUBLIC_URL + "/icons/about-me/languages.svg",
                                alt: "Languages icon"
                            }}
                            title="Langues"
                            content={
                                <div className="languages-container">
                                    <div className="language-box">
                                        <img className="language-flag" src={process.env.PUBLIC_URL + "/images/about-me/languages/french.png"} alt="French flag"></img>
                                        <span className="language-name">Français – langue maternelle</span>
                                    </div>
                                    <div className="language-box">
                                        <img className="language-flag" src={process.env.PUBLIC_URL + "/images/about-me/languages/uk.png"} alt="UK flag"></img>
                                        <span className="language-name">Anglais – niveau B2</span>
                                    </div>
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
                                <div className="interests-container">
                                    <span className="interest">Développement (logiciel et web)</span>
                                    <span className="interest">Jeux vidéo</span>
                                    <span className="interest">Livres</span>
                                    <span className="interest">Cinéma</span>
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
                                <ul className="softskills-container">
                                    <li className="softskill">Passion</li>
                                    <li className="softskills-separator">-</li>
                                    <li className="softskill">Persévérance</li>
                                    <li className="softskills-separator">-</li>
                                    <li className="softskill">Curiosité</li>
                                </ul>
                            }
                        />
                    }
                </div>
            </section>

        )
    }
}
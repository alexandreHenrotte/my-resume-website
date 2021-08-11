import React from 'react'
import { Trans } from 'react-i18next';
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
                        <li><Trans>about-me.age</Trans></li>
                        <li className="text-separator">/</li>
                        <li>Tintigny</li>
                        <li className="text-separator">/</li>
                        <li><Trans>about-me.job</Trans></li>
                    </ul>
                    <p id="text-about-me"><Trans>about-me.description</Trans></p>
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
                            title={<Trans>about-me.languages.title</Trans>}
                            content={
                                <div className="languages-container">
                                    <div className="language-box">
                                        <img className="language-flag" src={process.env.PUBLIC_URL + "/images/about-me/languages/french.png"} alt="French flag"></img>
                                        <span className="language-name"><Trans>about-me.languages.1</Trans></span>
                                    </div>
                                    <div className="language-box">
                                        <img className="language-flag" src={process.env.PUBLIC_URL + "/images/about-me/languages/uk.png"} alt="UK flag"></img>
                                        <span className="language-name"><Trans>about-me.languages.2</Trans></span>
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
                            title={<Trans>about-me.interests.title</Trans>}
                            content={
                                <div className="interests-container">
                                    <span className="interest"><Trans>about-me.interests.1</Trans></span>
                                    <span className="interest"><Trans>about-me.interests.2</Trans></span>
                                    <span className="interest"><Trans>about-me.interests.3</Trans></span>
                                    <span className="interest"><Trans>about-me.interests.4</Trans></span>
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
                            title={<Trans>about-me.soft-skills.title</Trans>}
                            content={
                                <ul className="softskills-container">
                                    <li className="softskill"><Trans>about-me.soft-skills.1</Trans></li>
                                    <li className="softskills-separator">-</li>
                                    <li className="softskill"><Trans>about-me.soft-skills.2</Trans></li>
                                    <li className="softskills-separator">-</li>
                                    <li className="softskill"><Trans>about-me.soft-skills.3</Trans></li>
                                </ul>
                            }
                        />
                    }
                </div>
            </section>

        )
    }
}
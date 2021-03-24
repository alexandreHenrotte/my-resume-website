import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './Experiences.css';

export default class Experiences extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var scrollAnimation = document.getElementById("scroll-animation");
        scrollAnimation.classList.add("animation-hide");
    }

    render() {
        return (
            <section className="formation-experiences-container">
                <div id="formations-container">
                    <h3 className="card-section-title">Formation</h3>
                    <div className="formation-cards">
                        <div className="formation-card">
                            <img src={process.env.PUBLIC_URL + "/images/experiences/henallux.png"} alt="Henallux school logo"></img>
                            <div className="formation-text-container">
                                <span className="main-text">Bachelier en informatique et systèmes, orientation technologie de l’informatique</span>
                                <span className="secondary-text">IESN - Henallux</span>
                                <span className="secondary-text">2019 - En cours | Namur, Belgique</span>
                            </div>
                        </div>
                        <div className="formation-card">
                            <img src={process.env.PUBLIC_URL + "/images/experiences/pierrard.png"} alt="IAMP Pierrard school logo"></img>
                            <div className="formation-text-container">
                                <span className="main-text">CESS + Qualification : technicien en informatique</span>
                                <span className="secondary-text">Institut des Arts et Métiers de Pierrard</span>
                                <span className="secondary-text">2017 - 2019 | Virton, Belgique</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Player
                    id="scroll-animation"
                    autoplay
                    loop
                    src={process.env.PUBLIC_URL + "/animations/scroll.json"}
                />
                <div id="experiences-container">
                    <h3 className="card-section-title">Expérience</h3>
                    <div className="experience-cards">
                        <div className="experience-card">
                            <span className="experience-name">Technicien en réseau informatique (job étudiant)</span>
                            <span className="secondary-text">LuxVoip S.A.R.L</span>
                            <span className="secondary-text">07/2019 - 08/2019 | Rodange, Luxembourg</span>
                            <span className="experience-text">Installation d'un nouveau réseau Wi-Fi dans plusieurs restaurants du domaine des grottes de Han.</span>
                            <span className="experience-acquired">Acquis : organisation, respect des délais</span>
                        </div>
                        <div className="experience-card">
                            <span className="experience-name">Technicien en réseau informatique (stage)</span>
                            <span className="secondary-text">LuxVoip S.A.R.L</span>
                            <span className="secondary-text">03/2019 - 04/2019 | Rodange, Luxembourg</span>
                            <span className="experience-text">Installation du réseau filaire d'un nouveau bâtiment de l'ESA (European Space Agency).</span>
                            <span className="experience-acquired">Acquis : organisation, respect des délais</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
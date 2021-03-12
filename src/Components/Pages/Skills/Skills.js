import React from 'react';
import SkillBox from './SkillBox';
import './Skills.css'

export default class Skills extends React.Component {
    render() {
        return (
            <section className="skills-container">
                <div className="row">
                    <div className="column">
                        <h3>Programmation</h3>
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/java.png",
                                alt: "Java Logo"
                            }}
                            skillName="Java"
                        />
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/python.png",
                                alt: "Python Logo"
                            }}
                            skillName="Python"
                        />
                    </div>
                    <div className="column">
                        <h3>Web - Front end</h3>
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/html5.png",
                                alt: "HTML Logo"
                            }}
                            skillName="HTML"
                        />
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/css3.png",
                                alt: "CSS Logo"
                            }}
                            skillName="CSS"
                        />
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/javascript.png",
                                alt: "Javascript Logo"
                            }}
                            skillName="Javascript"
                        />
                    </div>
                    <div className="column">
                        <h3>Web - Back end</h3>
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/nodejs.png",
                                alt: "Node.js Logo"
                            }}
                            skillName="Node.js"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h3>Base de données</h3>
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/mssql.png",
                                alt: "Microsoft SQL Server Logo"
                            }}
                            skillName="Microsoft SQL Server"
                        />
                    </div>
                    <div className="column">
                        <h3>Gestion de versions</h3>
                        <SkillBox 
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/git.png",
                                alt: "Git Logo"
                            }}
                            skillName="Git"
                        />
                    </div>
                </div>
            </section>
        )
    }
}
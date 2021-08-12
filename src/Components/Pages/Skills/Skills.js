import React from 'react';
import { Trans } from 'react-i18next';
import SkillBox from './SkillBox';
import './Skills.css'

export default class Skills extends React.Component {
    render() {
        return (
            <section className="skills-container">
                <div className="row">
                    <div className="column">
                        <h3><Trans>skills.programming</Trans></h3>
                        <SkillBox
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/c-sharp.png",
                                alt: "C# Logo"
                            }}
                            skillName="C#"
                        />
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
                        <SkillBox
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/react.png",
                                alt: "React Logo"
                            }}
                            skillName="React.js"
                        />
                    </div>
                    <div className="column">
                        <h3>Web - Back end</h3>
                        <SkillBox
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/dot-net-core.png",
                                alt: ".NET Core Logo"
                            }}
                            skillName="ASP.NET Core"
                        />
                        <SkillBox
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/flask.png",
                                alt: "Flask Logo"
                            }}
                            skillName="Flask"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h3><Trans>skills.database</Trans></h3>
                        <SkillBox
                            img={{
                                src: process.env.PUBLIC_URL + "/images/skills/mssql.png",
                                alt: "Microsoft SQL Server Logo"
                            }}
                            skillName="MSSQL"
                        />
                    </div>
                    <div className="column">
                        <h3><Trans>skills.version-control</Trans></h3>
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
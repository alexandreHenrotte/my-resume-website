import React from 'react';
import './App.css';

import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Pages/Skills/Skills';
import Experiences from './Components/Pages/Experiences/Experiences';
import Projects from './Components/Pages/Projects/Projects';
import Contact from './Components/Pages/Contact/Contact';
import Content from './Components/Content/Content';

import Particles from 'react-particles-js';
let json = require('./main-particles.json');

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentContent: "about-me"
    }
  }

  selectContent = () => {
    // eslint-disable-next-line
    switch (this.state.currentContent) {
      case "about-me":
        return <AboutMe />;

      case "skills":
        return <Skills />;

      case "experiences":
        return <Experiences />;

      case "projects":
        return <Projects />;

      case "contact":
        return <Contact />;
    }
  }

  changeContent = (newContent) => {
    this.setState({ currentContent: newContent });
  }

  render() {
    return (
      <div className="App" >
        <WelcomeScreen />
        <Particles className="main-particles" params={json} />
        <Navbar currentContent={this.state.currentContent} changeContent={this.changeContent} />
        <Content>
          {this.selectContent()}
        </Content>
      </div>
    )
  }
}

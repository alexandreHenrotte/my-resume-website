import React from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Skills from './Components/Skills/Skills';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Content from './Components/Content/Content';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentContent: "about-me"
    }
  }

  selectContent = () => {
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
        <Navbar currentContent={this.state.currentContent} changeContent={this.changeContent} />
        <Content>
          {this.selectContent()}
        </Content>
      </div>
    )
  }
}

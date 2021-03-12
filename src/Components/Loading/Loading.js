import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import './Loading.css';

export default class Loading extends React.Component {
    constructor() {
        super()

        this.state = {
            interval: null,
            level: 0,
        }
    }

    componentDidMount() {
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only

        var interval = setInterval(this.loading, 1500)
        this.setState({interval: interval})
    }

    loading = () => {
        if (this.state.level < 100)
            this.setState({level: this.state.level + 100});
        else {
            clearInterval(this.state.interval);
            this.loaded();
        }
    }

    loaded = () => {
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.body.scroll = "yes"; // ie only

        this.props.setLoaded();
    }

    render() {
        return(
            <div id="loading-container">
                <span id="loading-text">Chargement...</span>
                <div id="loading-bar">
                    <ProgressBar completed={this.state.level} bgcolor="#1447AA" isLabelVisible={false}/>
                </div>
            </div>
        )
    }
}
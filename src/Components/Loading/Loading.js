import React from "react";
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
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only

        var interval = setInterval(this.loading, 1000)
        this.setState({ interval: interval })
    }

    loading = () => {
        if (this.state.level < 100)
            this.setState({ level: this.state.level + 100 });
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
        return (
            <div id="loading-container">
                <img src={process.env.PUBLIC_URL + "/animations/loading.svg"} alt="loading animation" />
            </div>
        )
    }
}
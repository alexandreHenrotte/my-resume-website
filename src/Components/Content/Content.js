import React from 'react';
import Loading from '../Loading/Loading';
import './Content.css';

export default class Content extends React.Component {
    
    constructor() {
        super()

        this.state = {
            loaded: false
        }
    }

    setLoaded = () => {
        this.setState({loaded: true});
    }

    componentDidUpdate(nextProps) {
        console.log(nextProps.children)
        if (nextProps.children !== this.props.children) {
            this.setState({loaded: false});
        }
    }

    render() {
        return (
            <body id="content" onAnimationEnd={this.onAnimationEnd}>
                {!this.state.loaded && <Loading setLoaded={this.setLoaded} />}
                <div id="page" className={this.state.loaded ? "page-visible" : "page-hided"}>
                    {this.props.children}
                </div>
            </body>
        )
    }
}
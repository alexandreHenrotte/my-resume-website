import React from 'react';
import './Content.css';

export default class Content extends React.Component {
    render() {
        return (
            <body>
                {this.props.children}
            </body>
        )
    }
}
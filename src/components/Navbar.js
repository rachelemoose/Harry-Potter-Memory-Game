import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
            <li className="clickyLeft">Clicky Game</li>
            <li className="clickyMiddle">Click an image to begin!</li>
            <li className="clickyScoreRight">Score: {this.props.score}</li>
        </ul>
        </nav>
        );
    }
}

export default Navbar;
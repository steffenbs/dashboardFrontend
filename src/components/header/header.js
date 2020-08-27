import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    state = {
        name: 'Steffen'
    };

    render() {
        return (
            <header>
                <span><span id="firstPartTitle">Dark</span>board</span>
            </header>
        );
    }
}

export default Header;
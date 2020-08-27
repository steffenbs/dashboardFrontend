import React, { Component } from 'react';
import '../header.css';

class Header extends Component {
    state = {
        name: 'Steffen'
    };

    render() {
        return (
            <nav>
                <span>This is the navbar</span>
            </nav>
        );
    }
}

export default Header;
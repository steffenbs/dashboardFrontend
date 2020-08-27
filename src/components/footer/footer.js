import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {
        name: 'Steffen'
    };

    render() {
        return (
            <footer>
                <span>footer title</span>
            </footer>
        );
    }
}

export default Footer;
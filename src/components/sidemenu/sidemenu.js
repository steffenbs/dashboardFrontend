import React, { Component } from 'react';
import './sidemenu.css';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'


import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';

class SideMenu extends Component {
    constructor(){
        super();
        this.state = {
            hover: false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState  => ({
            hover: !prevState.hover
        }))
    }
    onPress(e) {
        e.stopPropagation();
        console.log('test')
    }
    render() {
        var hideButton;
        if (this.state.hover) {
          hideButton = {display: 'block'}
        } else {
          hideButton = {display: 'none'}
        }
        return (
            <div id="sidebar" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <List id="sidebarList" disablePadding dense >
            <ListItem button>
                <Link className="NavBarLink" to="/">
                    <HomeIcon />
                    <ListItemText style={hideButton} >Home</ListItemText>
                </Link>
            </ListItem>
            <ListItem button>
                <Link className="NavBarLink" to="/notes">
                <NotesIcon />
                <ListItemText style={hideButton} >Notes</ListItemText>
                </Link>
            </ListItem>
            <ListItem button>
                <Link className="NavBarLink" to="/">
                <MailOutlineIcon />
                <ListItemText style={hideButton} >Mail</ListItemText>
                </Link>
            </ListItem>
            <ListItem button>
                <Link className="NavBarLink" to="/">
                <SettingsIcon />
                <ListItemText style={hideButton} >Settings</ListItemText>
                </Link>    
            </ListItem>
            </List>
            </div>
        );
    }
}

export default SideMenu;
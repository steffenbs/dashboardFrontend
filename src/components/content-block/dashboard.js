import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './dashboard.css';
// import ButtonDropdown from "./add-content/add_content";
import SideMenu from "../sidemenu/sidemenu"
import Notes from "../../pages/notesApp/notesApp"
import Main from "../../pages/mainApp/mainApp"
const Dashboard = ({setAuth}) => {

    return (
        <Router>
            <SideMenu />
                <Switch>
                    <Route exact path="/" render={props => <Main {...props} setAuth={setAuth}/>} />
                    <Route path="/notes" render={props => <Notes {...props} setAuth={setAuth}/>} />
                </Switch>
            
        </Router>

    );
    
}

export default Dashboard;
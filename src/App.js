import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from "./components/content-block/dashboard"
import LoginPage from "./pages/loginApp/loginApp"
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean)
	};

	async function isAuth() {
		try {
			const response = await fetch('http://localhost:5000/auth/verified', {
				method: 'GET',
				headers: {Authorization: localStorage.Authorization }
			});

			const parseRes = await response.json()
			parseRes === true ? setIsAuthenticated(true): setIsAuthenticated(false)
			
		} catch (err) {
			console.error(err.message)
		}
	}
	useEffect(() => {
		isAuth()
	})
	return (
		<Fragment>
		<Router>
			<Switch>
			<Route exact path="/login" render={props => !isAuthenticated ? (<LoginPage {...props} setAuth={setAuth}/>) : (<Redirect to="/" />)} />
			<Route path="/" render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth}/>) : (<Redirect to="/login" />)} />
			</Switch>
		</Router>
		</Fragment>

);
  
}

export default App;

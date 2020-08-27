import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from "./components/header/header-navbar/navbar";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <div id="overhead">
      <Header />
      <NavBar />
    </div>
    <main>
      <App />
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
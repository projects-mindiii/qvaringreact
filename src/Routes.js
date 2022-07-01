import React, { } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Home from './components/home/Home.js';
import Recharge from './components/recharge/Recharge.js';
import History from './components/history/History.js';
import Header from './components/header/Header.js';


function routes() {

	return (
       <>       
          <Router> 
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/recharge">
              <Header/>
              <Recharge />
            </Route>
            <Route exact path="/history">
              <Header/>
              <History />
            </Route>
          </Router>
       </>
	);
};

export default routes;

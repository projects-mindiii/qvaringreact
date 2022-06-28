import React, { } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';


function routes() {

	return (
       <>
         <Header/>
		<Router> 
            <Switch>
            <Route exact path="/" component={Home}/>
            </Switch>
		</Router>
       </>
	);
};

export default routes;

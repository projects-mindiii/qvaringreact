import React, { } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Home from './components/home/Home.js';
import Recharge from './components/recharge/Recharge.js';
import History from './components/history/History.js';
import Messaging from './components/messaging/Messaging.js';
import Profile from './components/profile/Profile.js';
import AddMoney from './components/addMoney/AddMoney.js';
import OrderSummary from './components/orderSummary/OrderSummary.js';
import PaymentMethod from './components/paymentMethod/PaymentMethod.js';
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
            <Route exact path="/messaging">
              <Header/>
              <Messaging />
            </Route>
            <Route exact path="/profile">
              <Header/>
              <Profile />
            </Route>
            <Route exact path="/add-money">
              <Header/>
              <AddMoney />
            </Route>
            <Route exact path="/order-summary">
              <Header/>
              <OrderSummary />
            </Route>
            <Route exact path="/payment-method">
              <Header/>
              <PaymentMethod />
            </Route>
          </Router>
       </>
	);
};

export default routes;

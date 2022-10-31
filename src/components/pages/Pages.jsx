import React from 'react';
import { Header } from '../common/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from '../home/Home';
import { About } from './About';
import {Services} from '../home/Services';

export const Pages = () => {
  return ( 
    <>
  <Router>
       <Header/>
       <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path= '/about' component={About} />
          <Route exact path= '/services' component={Services} />
        </Switch>
    </Router></>
    );
}
import React from 'react';
import { Header } from '../common/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from '../home/Home';
import { About } from './About';
import {Services} from '../pages/Services';
import { Portfolio } from './Portfolio';

export const Pages = () => {
  return ( 
    <>
  <Router>
       <Header/>
       <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path= '/about' component={About} />
          <Route exact path= '/services' component={Services} />
          <Route exact path= '/portfolio' component={Portfolio} />
        </Switch>
    </Router></>
    );
}
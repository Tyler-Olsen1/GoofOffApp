import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home.js'
import Page1 from './components/Page1.js'
import Page2 from './components/Page2.js'

const Routing = () => (
    <Router>
    <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
    
    
    <Home/>
    <Page1/>
    <Page2/>
    </Switch>
    </Router>
  );
export default Routing
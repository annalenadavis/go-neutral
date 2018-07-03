import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from "./NotFound";
import App from "./App.js";
import Home from "./Home.js";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/app/:household/:zip" component={App}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
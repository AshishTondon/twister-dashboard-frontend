import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import routes from "./routeconfig";
import RouteWithSubRoutes from "./subroutes";
import { UserContext } from "../state/session/variables";

const Routes = () => {

    return(
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))};

                <UserContext.Consumer>
                    {({defaultURL}) => (
                        <Redirect exact path="/" to={defaultURL} />
                    )} 
                </UserContext.Consumer>
            </Switch>
        </Router>  
    );
};

export default Routes;
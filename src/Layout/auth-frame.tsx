import React from 'react';
import "../Assets/css/auth.css";
import RouteWithSubRoutes from "../Routes/subroutes";
import { Switch } from "react-router-dom";
import Router from "../util/twisterRoute";

const Auth = ({routes}:any) => {

    return(
        <div className="wrapper fadeInDown">
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <Router>
                <Switch>
                {routes.map((route:any, i:number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                </Switch>
            </Router>
        </div>
    );
};

export default Auth;
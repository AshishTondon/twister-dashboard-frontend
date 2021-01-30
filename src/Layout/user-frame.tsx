import React from 'react';
import RouteWithSubRoutes from "../Routes/subroutes";
import {Switch } from "react-router-dom";

import MainMenu from "./common/mainmenu";
import SideMenu from "./common/sidebar";
import Router from "../util/twisterRoute";


const User = ({routes,state}:any) => {


    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "/Assets/js/dashboard.js";
    //     script.async = true;
    //     script.onload = () => scriptLoaded();

    //     document.body.appendChild(script);

    //     console.log("document.body",document.body);
    // });

    return(
        <div className="container-scroller">
            
            <MainMenu username={state.displayName}/>

            <div className="container-fluid page-body-wrapper">
                <SideMenu routes={routes} />

                <div className="main-panel">
                    <div className="content-wrapper">
                        <Router>
                            <Switch>
                                {routes.map((route:any, i:number) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </Router>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default User;
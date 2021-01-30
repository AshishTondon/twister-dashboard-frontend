import React from 'react';
import {
    HashRouter,
    BrowserRouter
  } from "react-router-dom";
import { ISHASHURL } from "../Routes/routeconfig";

const TwisterRoute = ({children, ...rest}:any) => {

    if(ISHASHURL){
        return(
            <HashRouter {...rest}>
                {children}
            </HashRouter>
        );
    }else{
        return(
            <BrowserRouter {...rest}>
                {children}
            </BrowserRouter>
        );
    }
    
};

export default TwisterRoute;
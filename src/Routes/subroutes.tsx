import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../state/session/variables";

const RouteWithSubRoutes = (route:any) => {
    
  if(route.isAuth){
    return(<ProtectedRoute route={route} />);
  }else{
    return(<PublicRoute route={route} />);
  }
}

const PublicRoute = ({ route, ...rest }:any) => {
  
  return(
    <UserContext.Consumer>
          {({isLogin, defaultURL}) => (
              <Route
                  {...rest}
                  render={props =>{
                      return(! isLogin ? (
                          <route.component {...props} routes={route.routes} />
                      ) : (
                          <Redirect
                              to={{
                                  pathname: defaultURL,
                                  state: { from: props.location }
                              }}
                          />))}
                  }
              />
          )}
      </UserContext.Consumer>
  );
};

const ProtectedRoute = ({ route, ...rest }:any) => {
    
  return (
      <UserContext.Consumer>
          {(context) => ( //isLogin, defaultURL, token
              <Route
                  {...rest}
                  render={props =>{
                      return(context.isLogin ? (
                          <route.component {...props} routes={route.routes} state={context} />
                      ) : (
                          <Redirect
                              to={{
                                  pathname: context.defaultURL,
                                  state: { from: props.location }
                              }}
                          />))}
                  }
              />
          )}
      </UserContext.Consumer>
    );
}

  export default RouteWithSubRoutes;
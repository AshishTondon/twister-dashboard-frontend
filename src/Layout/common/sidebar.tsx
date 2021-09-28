import React from "react";
import Anchor from "../../util/anchor";

const SideBarTab = ({route,index}:any) => {

  if(route.hasOwnProperty("routes")){
    const icon = (route.hasOwnProperty("icon"))?`mdi ${route.icon} menu-icon`:"mdi mdi-crosshairs-gps menu-icon";
    
    return(
      <li className="nav-item" key={index}>
        <a className="nav-link" data-toggle="collapse" href={"#" + route.displayName} aria-expanded="false" aria-controls="ui-basic">
          <span className="menu-title">{route.displayName}</span>
          <i className="menu-arrow"></i>
          <i className={icon}></i>
        </a>
        <div className="collapse" id={route.displayName}>
          <ul className="nav flex-column sub-menu">
            
            {route.routes.map((noderoute:any,index:number) => (
              (noderoute.isDisplay)?<SideBarTab route={noderoute} index={index} />:""
            ))}

          </ul>
        </div>
      </li>
    );
  }else{
    const icon = (route.hasOwnProperty("icon"))?`mdi ${route.icon} menu-icon`:"mdi mdi-home menu-icon";

    return(
      <li className="nav-item" key={index}>
        <Anchor className="nav-link" href={route.path}>
          <span className="menu-title">{route.displayName}</span>
          <i className={icon}></i>
        </Anchor>
      </li>
    );
  }
  
}

const Sidebar = ({routes}:any) => {
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">

            {routes.map((route:any,index:number) => (
              (route.isDisplay)?<SideBarTab route={route} index={index} />:""
            ))}

          </ul>
        </nav>
    );
}

export default Sidebar;
import React from "react";
import { LOGOUT_URL } from "../../Routes/routeconfig";

const MainMenu = ({username}:any) => {
    
    const toggleSideBar = () => {
        if ((document.body.classList.contains('sidebar-toggle-display')) || 
            (document.body.classList.contains('sidebar-absolute'))) {
                document.body.classList.toggle('sidebar-hidden');
          } else {
            document.body.classList.toggle('sidebar-icon-only');
          }
    };

    return(
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="index.html">
                    <img src="assets/images/logo.svg" alt="Twister" />
                </a>
                <a className="navbar-brand brand-logo-mini" href="index.html">
                    <img src="assets/images/logo-mini.svg" alt="Twister" />
                </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={toggleSideBar}>
                    <span className="mdi mdi-menu"></span>
                </button>
                
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" id="profileDropdown" href="/#" data-toggle="dropdown" aria-expanded="false">
                            <div className="nav-profile-img">
                                <img src="/assets/images/faces/face1.png" alt="Avtar" />
                                <span className="availability-status online"></span>
                            </div>
                            <div className="nav-profile-text">
                                <p className="mb-1 text-black">{username}</p>
                            </div>
                        </a>

                        <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href={LOGOUT_URL}>
                                <i className="mdi mdi-logout mr-2 text-primary"></i> Signout 
                            </a>
                        </div>
                    </li>
                </ul>
            
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    );
}

export default MainMenu;

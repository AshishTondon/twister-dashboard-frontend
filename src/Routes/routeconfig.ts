//Import Interface
import { routeDef } from "../state/interface";

//Layouts
import AuthLayout from '../Layout/auth-frame';
import AdminLayout from '../Layout/admin-frame';
import UserLayout from '../Layout/user-frame';

//Pages
import Login from "../Page/auth/login";
import Forgot from "../Page/auth/forgot";
import Register from "../Page/auth/register";
import UserHome from "../Page/user/home";

//Session
import Logout from "../state/session/close";

//Declare path
export const AUTH_URL:string = "/auth";
export const LOGIN_URL:string = AUTH_URL + "/login";
export const RESETPWD_URL:string = AUTH_URL + "/forgot";
export const REGISTER_URL:string = AUTH_URL + "/register";
export const LOGOUT_URL:string = "/logout";

export const ADMINDASHBOARD_URL:string = "/admin";

export const USERDASHBOARD_URL:string = "/user";
export const USERHOME_URL:string = USERDASHBOARD_URL + "/home";
export const USERPROGRAM_URL:string = USERDASHBOARD_URL + "/program";
export const USEREPORT_URL:string = USERDASHBOARD_URL + "/report";
export const USERSUMMERY_URL:string = USEREPORT_URL + "/summery";
export const USERGRIDVIEW_URL:string = USEREPORT_URL + "/grid";
export const USERGRAPHVIEW_URL:string = USEREPORT_URL + "/graph";
export const USERPIECHARTVIEW_URL:string = USEREPORT_URL + "/piechart";
export const USERFORM_URL:string = USERDASHBOARD_URL + "/form";

//Declare Routes
const routes:routeDef[] = [
    {
        path: AUTH_URL,
        component: AuthLayout,
        isAuth: false,
        routes:[
            {
                path: LOGIN_URL,
                component:Login,
                isAuth:false
            },{
                path: RESETPWD_URL,
                component:Forgot,
                isAuth:false 
            },{
                path: REGISTER_URL,
                component:Register,
                isAuth:false 
            },{
                path: LOGOUT_URL,
                component:Logout,
                isAuth:true 
            }
        ]
    },{
        path: ADMINDASHBOARD_URL,
        component: AdminLayout,
        isAuth: true
    },{
        path: USERDASHBOARD_URL,
        component: UserLayout,
        isAuth: true,
        routes:[
            {
                path: USERHOME_URL,
                component: UserHome,
                isAuth: true,
                isDisplay:true,
                displayName:"Dashboard"
            },{
                path: USERPROGRAM_URL,
                component: UserHome,
                isAuth: true,
                isDisplay:true,
                displayName:"Programs",
                icon:"mdi-file-document"
            },{
                path: USEREPORT_URL,
                component: UserHome,
                isAuth: true,
                isDisplay:true,
                displayName:"Reports",
                icon:"mdi-format-list-bulleted",
                routes:[
                    {
                        path: USERSUMMERY_URL,
                        component: UserHome,
                        isAuth: true,
                        isDisplay:true,
                        displayName:"Summery",
                        icon:"mdi-format-list-bulleted"
                    },{
                        path: USERGRIDVIEW_URL,
                        component: UserHome,
                        isAuth: true,
                        isDisplay:true,
                        displayName:"Grid View"
                    },{
                        path: USERGRAPHVIEW_URL,
                        component: UserHome,
                        isAuth: true,
                        isDisplay:true,
                        displayName:"Graph View",
                        icon:"mdi-chart-bar"
                    },{
                        path: USERPIECHARTVIEW_URL,
                        component: UserHome,
                        isAuth: true,
                        isDisplay:true,
                        displayName:"Piechart",
                        icon:"mdi-chart-pie"
                    },{
                        path: USERPIECHARTVIEW_URL,
                        component: UserHome,
                        isAuth: true,
                        isDisplay:false,
                        displayName:"Do Not Display",
                        icon:"mdi-chart-pie"
                    }
                ]
            },{
                path: USERFORM_URL,
                component: UserHome,
                isAuth: true,
                isDisplay:true,
                displayName:"FORM",
                icon:"mdi-format-align-justify"
            }
        ]
    },{
        path: LOGOUT_URL,
        component: Logout,
        isAuth: true
    }
];

export default routes;
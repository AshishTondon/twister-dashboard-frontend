import { ILoginPkt, righttypeDef, UserrightsDef, userinfoDef } from "../interface";
import { USERHOME_URL, ADMINDASHBOARD_URL } from "../../Routes/routeconfig";

const Init = (props:ILoginPkt) => {
    let userinfo:userinfoDef = {
                                    isLogin: props.isLogin,
                                    token: props.data.user.token,
                                    email: props.data.user.email,
                                    displayName: props.data.user.displayName,
                                    defaultURL: (props.data.user.sessionrest === 1)?
                                                    USERHOME_URL : ADMINDASHBOARD_URL
                                };
    
    let userrights:UserrightsDef = {} as UserrightsDef;

    switch(props.data.user.sessionrest){
        case 1:
            userrights = { righttype : righttypeDef.USER };
        break;
        case 2:
            userrights = { righttype : righttypeDef.ADMIN };
        break;
        default:
            userrights = { righttype : righttypeDef.NORIGHT };
    }

    localStorage.setItem("user",JSON.stringify(userinfo));
    localStorage.setItem("userrights",JSON.stringify(userrights));

    return(userinfo);
} 

export default Init;
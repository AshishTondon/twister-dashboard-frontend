import React, { useState, useEffect, createContext } from "react";
import AxiosFn from "../../util/axiosconfig";
import { userinfoDef, UserrightsDef, righttypeDef } from "../interface";
import { LOGIN_URL } from "../../Routes/routeconfig";

export const UserContext = createContext<userinfoDef>({} as userinfoDef);

const SessionProvider = (props:any) => {

    const userinfoDefault = {
        isLogin: false,
        token: "",
        email: "",
        displayName: "",
        defaultURL: LOGIN_URL
    };
    
    const userrightDefult = {
        righttype: righttypeDef.NORIGHT
    };

    const userTemp = localStorage.getItem("user");
    const [userinfo, setUserinfo] = useState<userinfoDef>((userTemp !== undefined && userTemp != null)?
                                JSON.parse(userTemp) : userinfoDefault);
    
    const right = localStorage.getItem("userrights");                                                       
    const [userrights, setUserrights] = useState<UserrightsDef>((right !== undefined && right !== null)?
                                JSON.parse(right) : userrightDefult);

    const checkSession = async(token:string):Promise<boolean> => {

        
        // Set the AUTH token for any request
        // axios.interceptors.request.use(function (config) {
        //     config.headers.Authorization =  `Bearer ${token}`;
        //     return config;
        // });

        // const axios = await axiosFn({reset:true, headers:{Authorization:`Bearer ${token}`}});

        // console.log("variables-axios",axios);

        const axios = AxiosFn({header:{Authorization:`Bearer ${token}`}});

        try{
            var result = await axios.post("/api/monitoring/sessioncheck",{});
        
            return (result.status === 200)?true:false;
        }catch(any){
            return false;
        }
        
    }; 

    useEffect(() => {
        const checkSessionHandler = async() => {

            if(!localStorage.hasOwnProperty("user") || !localStorage.hasOwnProperty("userrights")){
                localStorage.removeItem("user");
                localStorage.removeItem("userrights");

                setUserinfo(userinfoDefault);
                setUserrights(userrightDefult);
            }else if(userinfo.hasOwnProperty("token") && userinfo.token.length > 0 && 
                userrights.hasOwnProperty("righttype")){
                
                // Checking if session is still Active
                if(! await checkSession(userinfo.token)){
                    localStorage.removeItem("user");
                    localStorage.removeItem("userrights");

                    setUserinfo(userinfoDefault);
                    setUserrights(userrightDefult);
                }
            }
        };

        checkSessionHandler();
    });

    return(
        <UserContext.Provider value={userinfo}>
            {props.children}
        </UserContext.Provider>
    );
}

export default SessionProvider;
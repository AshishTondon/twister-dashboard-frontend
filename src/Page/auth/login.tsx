import React, { useState } from 'react';
import mblogo from "../../Assets/image/Message-Broadcast-logo.png";
import AxiosFn from "../../util/axiosconfig";
import {RESETPWD_URL, VALIDATEUSER_URL} from "../../Routes/routeconfig";
import sessionInit from "../../state/session/initiate";
import { ILoginPkt } from "../../state/interface";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const onSubmit = async(event:any) => {
        event.preventDefault();
        
        var reqpkt = {
            email,
            password
        }

        //const axios = axiosFn({});
        //console.log("login-axios",axios);
        const axios = AxiosFn({});
        var loginresult = await axios.post(VALIDATEUSER_URL, reqpkt);

        if(loginresult.status === 200 && loginresult.data.status === 200){
            await sessionInit(loginresult.data as ILoginPkt);
            window.location.reload(false);
        }else{
            setAlert("Email and Password does not match!!");
        }
    }

    const authbuttonpress = (event:any) => {
        //console.log("event.target",event.target.name)
        //console.log("event.target.value",event.target.value)

        switch(event.target.name){
            case "email":
                setEmail(event.target.value);
            break;
            case "password":
                setPassword(event.target.value);
            break;
        }
        
    }

    return(
        <div id="formContent">
            <div className="fadeIn first mblogo">
                <img src={mblogo} id="icon" alt="User Icon" />
            </div>

            <div className="login-alert" >
                {alert}
            </div>

            <form method="post" onSubmit={onSubmit}>
                <input type="text" id="email" onChange={authbuttonpress} className="fadeIn second" name="email" placeholder="email" />
                <input type="password" id="password" onChange={authbuttonpress} className="fadeIn third" name="password" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
                <a className="underlineHover" href={RESETPWD_URL}>Forgot Password?</a>
            </div>
        </div>
    );
};

export default Login;
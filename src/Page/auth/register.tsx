import React from 'react';
import mblogo from "../../Assets/image/twister-logo.png";
import Anchor from "../../util/anchor";
import { LOGIN_URL } from "../../Routes/routeconfig";

const Register = () => {

    return(
        <div id="formContent">
            <div className="fadeIn first mblogo">
                <img src={mblogo} id="icon" alt="User Icon" />
            </div>

            <form>
                <input type="text" id="username" className="fadeIn second" name="username" placeholder="Username" />
                <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" />
                <input type="password" id="password" className="fadeIn second" name="password" placeholder="Password" />
                <input type="password" id="confirmpassword" className="fadeIn second" name="confirmpassword" placeholder="Confirm Password" />
                <input type="submit" className="fadeIn fourth" value="Register" />
            </form>

            <div id="formFooter">
                <Anchor className="underlineHover" href={LOGIN_URL}>Login</Anchor>
            </div>
        </div>
    );
};

export default Register;
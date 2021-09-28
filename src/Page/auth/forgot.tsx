import React from 'react';
//import { useParams } from "react-router-dom";
import mblogo from "../../Assets/image/twister-logo.png";
import Anchor from "../../util/anchor";
import { LOGIN_URL } from "../../Routes/routeconfig";

const Forgot = () => {
    
    /*let param: any = {};
    param = useParams();*/

    return(
        <div id="formContent">
            <div className="fadeIn first mblogo">
                <img src={mblogo} id="icon" alt="User Icon" />
            </div>

            <form>
                <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" />
                <input type="submit" className="fadeIn fourth" value="Send Email" />
            </form>

            <div id="formFooter">
                <Anchor className="underlineHover" href={LOGIN_URL}>Login</Anchor>
            </div>
        </div>
    );
};

export default Forgot;
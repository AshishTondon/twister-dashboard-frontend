import React from 'react';
import mblogo from "../../Assets/image/Message-Broadcast-logo.png";

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
        </div>
    );
};

export default Register;
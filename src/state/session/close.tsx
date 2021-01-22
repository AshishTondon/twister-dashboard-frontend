import { useEffect } from "react";

const Close = () =>{
    
    useEffect(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("userrights");

        window.location.reload(false);
    })
    
    return (
        <div>
            logout
        </div>
        );
}

export default Close;
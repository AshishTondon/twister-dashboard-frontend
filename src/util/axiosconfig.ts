import axios from "axios";
import http from "http";
import https from "https";

const AxiosFn = ({header = {}}:any) => {
    
    const axiosConfig = axios.create({
                                    timeout: 60000,
                                    httpAgent: new http.Agent({ keepAlive: true }),
                                    httpsAgent: new https.Agent({ keepAlive: true }),
                                    maxRedirects: 10,
                                    headers:header,
                                    maxContentLength: 50 * 1000 * 1000,
                                    //baseURL:"https://twister-dashboard-backend.herokuapp.com"
                                    baseURL:(window.location.hostname === "localhost")?"http://localhost:3030":"https://twister-dashboard-backend.herokuapp.com"
                                });
    
    return(axiosConfig);
};



export default AxiosFn;

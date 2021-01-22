//import React,{ useEffect } from 'react';
//import AxiosFn from "../../util/axiosconfig";

const Home = ({state}:any) => {

    /*useEffect(() => {
        const getinit = async() => {
            const axios = AxiosFn({header:{Authorization:`Bearer ${state.token}`}});
            var duketemplates = await axios.get("/api/monitoring/gettemplates");

            console.log("duketemplates",duketemplates);
        }

        getinit();
    });*/

    return(
        <div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Striped Table</h4>
                    <p className="card-description"> Add class <code>.table-striped</code>
                    </p>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th> User </th>
                          <th> First name </th>
                          <th> Progress </th>
                          <th> Amount </th>
                          <th> Deadline </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-1.png" alt="Avtar" />
                          </td>
                          <td> Herman Beck </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}}></div>
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> Messsy Adam </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{"width": "75%"}}></div>
                            </div>
                          </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> John Richards </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-warning" role="progressbar" style={{"width": "90%"}} ></div>
                            </div>
                          </td>
                          <td> $138.00 </td>
                          <td> Apr 12, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-4.png" alt="image" />
                          </td>
                          <td> Peter Meggik </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-primary" role="progressbar" style={{"width": "50%"}}></div>
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-1.png" alt="image" />
                          </td>
                          <td> Edward </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-danger" role="progressbar" style={{"width": "35%"}}></div>
                            </div>
                          </td>
                          <td> $ 160.25 </td>
                          <td> May 03, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> John Doe </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-info" role="progressbar" style={{"width": "65%"}}></div>
                            </div>
                          </td>
                          <td> $ 123.21 </td>
                          <td> April 05, 2015 </td>
                        </tr>
                        <tr>
                          <td className="py-1">
                            <img src="assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> Henry Tom </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-warning" role="progressbar" style={{"width": "20%"}}></div>
                            </div>
                          </td>
                          <td> $ 150.00 </td>
                          <td> June 16, 2015 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Home;
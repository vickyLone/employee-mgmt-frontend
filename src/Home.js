import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Empnav from "./Empnav";
import Empprofile from "./Empprofile";
import Emptasks from "./Emptasks";
import Emptrainings from "./Emptrainings";

const Home = () => {
    const[showProfile,setShowprofile]=useState(false);
    const [showTasks,setShowTasks]=useState(false);
    const[showTrainings,setShowtrainings]=useState(false);
    const [showTable,setShowTable]=useState(true);
    return (
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Empnav/>
                </div>
            </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-body-tertiary ps-3 pe-3 pt-1">
                            <div className="position-sticky">
                                <div className="list-group list-group-flush mx-3 mt-4">
                                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><img src="https://media.istockphoto.com/id/1464764064/photo/business-black-man-and-portrait-with-arms-crossed-for-leadership-management-and-trust-smile.webp?b=1&s=170667a&w=0&k=20&c=Sak8IJFnBgUP9mT0f96rMlmWvB6nE2GzigVlGigNNwg=" className="img-fluid" style={{ borderRadius: "100%" }} /></a
                                    >
                                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fas fa-lock fa-fw me-3"></i><span style={{fontFamily:"sans-serif"}}>Employee Id</span></a
                                    >
                                    <button className="list-group-item list-group-item-action py-2 ripple"
                                    onClick={()=>{setShowprofile(true);
                                                    setShowTasks(false);
                                                    setShowtrainings(false);
                                                    setShowTable(false);}}

                                    ><i className="fas fa-chart-line fa-fw me-3"></i><span style={{fontFamily:"sans-serif"}}>Profile</span></button
                                    >
                                    <button className="list-group-item list-group-item-action py-2 ripple"
                                    onClick={()=>{setShowTasks(true);
                                        setShowTable(false);
                                        setShowtrainings(false);
                                        setShowprofile(false) }}>
                                        <i className="fas fa-chart-pie fa-fw me-3"></i><span style={{fontFamily:"sans-serif"}}>Tasks</span>
                                    </button>
                                    <button className="list-group-item list-group-item-action py-2 ripple"
                                    onClick={()=>{setShowTasks(false);
                                        setShowTable(false);
                                        setShowtrainings(true);
                                        setShowprofile(false) }}
                                    ><i className="fas fa-chart-bar fa-fw me-3"></i><span style={{fontFamily:"sans-serif"}}>Training</span></button
                                    >
                                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple"
                                    ><i className="fas fa-chart-pie fa-fw me-3"></i><span style={{fontFamily:"sans-serif"}}>SignOff</span></Link
                                    >
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-8">
                        {showProfile&&<Empprofile/>}
                        {showTasks&&<Emptasks/>}
                        {showTrainings&&<Emptrainings/>}
                   {showTable&&( <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Task Id</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Objective</th>
                                    <th scope="col">Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>)}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;
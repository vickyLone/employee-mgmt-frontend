import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import proxyConfig from "./proxyConfig";
import { useLocation } from 'react-router-dom';
import Empprofile from "./Empprofile";
import Emptask from "./Emptasks";
import Viewreports from "./Viewreports";

const Employee = () => {
  const [tasks, setTasks] = useState([]);
  const microserviceReport = "report";
  const { state } = useLocation();
  const { firstName, empId } = state || {};
  const [showProfile, setShowProfile] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showEmpTask, setShowEmpTask] = useState(false);
  const [showViewReports, setShowViewReports] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${proxyConfig[microserviceReport]}api/tasks`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div className="justify-content-end">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Admin">
                              <img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_306,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" className="img-fluid" alt="Logo" />
                            </Link>
                          </li>
                          <li className="nav-item pt-4">
                            <a className="nav-link active" aria-current="page" href="#" style={{ fontFamily: "sans-serif" }}>Employee Dashboard</a>
                          </li>
                          <li className="nav-item pt-4">
                            <span className="nav-link active" style={{ fontFamily: "sans-serif" }}>
                              {`Employee Name: ${firstName || ''}`}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-body-tertiary ps-3 pe-3 pt-1">
              <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                  <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <img
                      src="https://media.istockphoto.com/id/1464764064/photo/business-black-man-and-portrait-with-arms-crossed-for-leadership-management-and-trust-smile.webp?b=1&s=170667a&w=0&k=20&c=Sak8IJFnBgUP9mT0f96rMlmWvB6nE2GzigVlGigNNwg="
                      className="img-fluid"
                      style={{ borderRadius: "100%" }}
                      alt="Employee"
                    />
                  </a>
                  <div className="list-group-item list-group-item-action py-2 ripple">
                    <span className="nav-link active" style={{ fontFamily: "sans-serif" }}>{`Employee ID: ${empId || ''}`}</span>
                  </div>
                  <div className="list-group-item list-group-item-action py-2 ripple">
                    <button
                      className="nav-link active"
                      style={{ fontFamily: 'sans-serif' }}
                      onClick={() => {
                        setShowProfile(true);
                        setShowTasks(false);
                        setShowEmpTask(false);
                        setShowViewReports(false);


                      }}
                    >
                      Profile
                    </button>
                  </div>

                  <div className="list-group-item list-group-item-action py-2 ripple">
                    <button
                      className="nav-link active"
                      style={{ fontFamily: 'sans-serif' }}
                      onClick={() => {
                        setShowTasks(true);
                        setShowProfile(false);
                        setShowEmpTask(false);
                        setShowViewReports(false);


                      }}
                    >
                      Tasks
                    </button>
                  </div>
                  <div className="list-group-item list-group-item-action py-2 ripple">
                    <Link class="nav-link active" aria-current="page" to="/" style={{ fontFamily: "sans-serif" }}>SignOff</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-9">
            <nav className="navbar navbar-expand-lg bg-body-secondary mt-2">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                      <a className="nav-link active" href="#" style={{ fontFamily: "sans-serif" }}>Submit EOD</a>
                    </li> */}
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        style={{ fontFamily: 'sans-serif' }}
                        onClick={() => {
                          setShowTasks(false);
                          setShowProfile(false);
                          setShowEmpTask(true);
                          setShowViewReports(false);

                        }}

                      >
                        Submit EOD
                      </button>                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        style={{ fontFamily: 'sans-serif' }}
                        onClick={() => {
                          setShowTasks(false);
                          setShowProfile(false);
                          setShowEmpTask(false);
                          setShowViewReports(true);
                        }}
                      >
                        View EOD Reports
                      </button>
                    </li>
                  </ul>
                  {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ fontFamily: "sans-serif" }} />
                    <button className="btn btn-outline-primary" type="submit" style={{ fontFamily: "sans-serif" }}>Search</button>
                  </form> */}
                </div>
              </div>
            </nav>
            {showProfile && <Empprofile />}
            {showEmpTask && <Emptask />}
            {showViewReports && <Viewreports />}

            {showTasks && (
              <div className="row">
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Task ID</th>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((t) => (
                        <tr key={t.taskId}>
                          <td>{t.taskId}</td>
                          <td>{t.task}</td>
                          <td>{t.discription}</td>
                          <td>{t.startDate}</td>
                          <td>{t.endDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;

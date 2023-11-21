import { useState } from "react";
import { Link } from "react-router-dom";
import Addcourse from "./Addcourses";
import Addtask from "./Addtask";
import Addtopics from "./Addtopics";
import Admprofile from "./Admprofile";
import Footer from "./Footer";
import Viewemployee from "./Viewemployee";
import Viewreports from "./Viewreports";
import Registration from "./Registration";
import { useLocation } from 'react-router-dom';
import ViewAllReports from "./ViewAllReports";


const Admin = () => {
    const { state } = useLocation();
    const { firstName, empId } = state || {};

    const [showProfile, setShowprofile] = useState(false);
    const [showAddTasks, setShowAddTasks] = useState(false);
    const [showTopics, setShowTopics] = useState(false);
    const [showAddcourse, setShowCourse] = useState(false);
    const [showReports, setShowreports] = useState(false);
    const [viewEmployee, setViewemployee] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);


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
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li class="nav-item">
                                                        <Link class="nav-link active" aria-current="page" to="/Admin"><img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_306,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" className="img-fluid" /></Link>
                                                    </li>
                                                    <li class="nav-item pt-4">
                                                        <span className="nav-link active" style={{ fontFamily: "sans-serif" }}>
                                                            Admin Dashboard
                                                        </span>
                                                    </li>
                                                    <li class="nav-item pt-4">
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
                        <nav class="navbar">
                            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}
                            <div class="bg-body-tertiary" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                {/* <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                    id="profilePicUpload"
                                /> */}
                                {/* <label for="profilePicUpload" class="nav-link active">
                                    <img
                                        src={profilePic || "default_image_url"} // Display uploaded/fetched image
                                        className="img-fluid"
                                        alt="Profile Pic"
                                        style={{ borderRadius: "100%" }}
                                    />
                                </label> */}
                            </li>
                                    <li>
                                        <span class="nav-link active" style={{ fontFamily: "sans-serif" }}>  {`Employee ID: ${empId || ''}`}</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <button
                                            className="nav-link active"
                                            style={{ fontFamily: 'sans-serif' }}
                                            onClick={() => {
                                                setShowprofile(true);
                                                setViewemployee(false);
                                                setShowTopics(false);
                                                setShowAddTasks(false);
                                                setShowCourse(false);
                                                setShowreports(false)
                                                setShowRegistration(false);

                                            }} // Show Add Topics content
                                        >
                                            Profile
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <button
                                            className="nav-link active"
                                            style={{ fontFamily: 'sans-serif' }}
                                            onClick={() => {
                                                setShowprofile(false);
                                                setViewemployee(true);
                                                setShowTopics(false);
                                                setShowAddTasks(false);
                                                setShowCourse(false);
                                                setShowreports(false)
                                                setShowRegistration(false);

                                            }} // Show Add Topics content
                                        >
                                            View Employee
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link class="nav-link active" aria-current="page" to="/" style={{ fontFamily: "sans-serif" }}>SignOff</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-9">
                        <nav className="navbar navbar-expand-lg bg-body-secondary mt-2">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                style={{ fontFamily: 'sans-serif' }}
                                                onClick={() => {
                                                    setShowTopics(false);
                                                    setViewemployee(false);
                                                    setShowAddTasks(false);
                                                    setShowCourse(true);
                                                    setShowreports(false);
                                                    setShowprofile(false)
                                                    setShowRegistration(false);

                                                }} // Show Add Topics content
                                            >
                                                Add Course
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                style={{ fontFamily: 'sans-serif' }}
                                                onClick={() => {
                                                    setShowTopics(true);
                                                    setViewemployee(false);
                                                    setShowAddTasks(false);
                                                    setShowCourse(false);
                                                    setShowreports(false);
                                                    setShowprofile(false)
                                                    setShowRegistration(false);

                                                }} // Show Add Topics content
                                            >
                                                Add Topics
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                style={{ fontFamily: 'sans-serif' }}
                                                onClick={() => {
                                                    setShowTopics(false);
                                                    setViewemployee(false);
                                                    setShowAddTasks(false);
                                                    setShowCourse(false);
                                                    setShowreports(true);
                                                    setShowprofile(false)
                                                    setShowRegistration(false);

                                                }} // Show Add Topics content
                                            >
                                                View Reports
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                style={{ fontFamily: 'sans-serif' }}
                                                onClick={() => {
                                                    setShowAddTasks(true);
                                                    setViewemployee(false);
                                                    setShowTopics(false);
                                                    setShowCourse(false);
                                                    setShowreports(false);
                                                    setShowprofile(false)
                                                    setShowRegistration(false);

                                                }} // Show Add Tasks content
                                            >
                                                Add Task
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                style={{ fontFamily: 'sans-serif' }}
                                                onClick={() => {
                                                    setShowRegistration(true);
                                                    setShowAddTasks(false);
                                                    setViewemployee(false);
                                                    setShowTopics(false);
                                                    setShowCourse(false);
                                                    setShowreports(false);
                                                    setShowprofile(false)
                                                }} // Show Add Tasks content
                                            >
                                                Add Employee
                                            </button>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Employee by Id" aria-label="Search" style={{ fontFamily: "sans-serif" }} />
                                        <button className="btn btn-outline-primary" type="submit" style={{ fontFamily: "sans-serif" }}>Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        {showAddTasks && <Addtask />}
                        {showTopics && <Addtopics />}
                        {showAddcourse && <Addcourse />}
                        {showReports && <ViewAllReports />}
                        {showProfile && <Admprofile />}
                        {viewEmployee && <Viewemployee />}
                        {showRegistration && <Registration />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Admin;
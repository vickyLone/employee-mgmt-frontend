import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import proxyConfig from "./proxyConfig";


const Addcourse = () => {

    const [courseName, setCourseName] = useState('');
    const [courses, setCourses] = useState([]);
    const microserviceTraining = "training"; // Replace with the appropriate microservice key
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const [formData, setFormData] = useState({
    //     courseName: '',

    // });

    const handleSubmit = async () => {
        try {
            // Make an API request to add the course to the backend
            await axios.post(`${proxyConfig[microserviceTraining]}api/courses`, { courseName }); // Replace with your API endpoint

            // Clear the input field
            setCourseName('');

            // Fetch the latest course list
            fetchCourses();
            setSuccessMessage('Course added successfully.');
            setTimeout(() => {
                setSuccessMessage("");
            }, 1000);

        } catch (error) {
            console.error('Error adding course:', error);
            setErrorMessage('Error adding course. Please try again.');
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);

        }
    };

    const fetchCourses = async () => {
        try {
            // Make an API request to fetch the latest course list
            const response = await axios.get(`${proxyConfig[microserviceTraining]}api/courses`);

            if (Array.isArray(response.data)) {
                // Only update the state if the response data is an array
                setCourses(response.data);
            } else {
                console.error('Invalid data received from the API:', response.data);

            }
        } catch (error) {
            console.error('Error fetching courses:', error);

        }
    };

    const handleDelete = async (courseId) => {
        try {
            // Make an API request to delete the course
            await axios.delete(`${proxyConfig[microserviceTraining]}api/courses/${courseId}`);

            // Fetch the latest course list immediately after deleting
            fetchCourses();
            setSuccessMessage('Course deleted successfully.');
            setTimeout(() => {
                setSuccessMessage("");
            }, 1000);

        } catch (error) {
            console.error('Error deleting course:', error);
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
        }
    };

    useEffect(() => {
        // Fetch the initial list of courses when the component mounts
        fetchCourses();
    }, []);

    return (
        <>


            <div className="row">
                <div className="col-4 mt-3">
                    <label>Course Name:</label>
                    <input type="text" className="form-control mt-3" style={{ border: "1px solid black" }} required value={courseName}
                        onChange={(e) => setCourseName(e.target.value)} />
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}
                    >Submit</button>
                </div>
                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Course Id</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.courseId}>
                                    <th scope="row">{course.courseId}</th>
                                    <td>{course.courseName}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(course.courseId)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Addcourse;
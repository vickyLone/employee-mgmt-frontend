import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import proxyConfig from "./proxyConfig";

const Addtopics = () => {
    const [topicName, setTopicName] = useState("");
    const [courseName, setCourseName] = useState(""); // Input to select a course
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [topics, setTopics] = useState([]);
    const [courses, setCourses] = useState([]); // For fetching the course list
    const microserviceTraining = "training"; // Replace with the appropriate microservice key

    const fetchTopics = async () => {
        try {
            const response = await axios.get(`${proxyConfig[microserviceTraining]}api/topics`);
            if (Array.isArray(response.data)) {
                setTopics(response.data);
            } else {
                console.error('Invalid data received from the API:', response.data);
            }
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get(`${proxyConfig[microserviceTraining]}api/courses`);
            if (Array.isArray(response.data)) {
                setCourses(response.data);
            } else {
                console.error('Invalid data received from the API:', response.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            // Create a data object that includes topicName and courseId
            const newTopic = { topicName, setCourseName };
            await axios.post(`${proxyConfig[microserviceTraining]}api/topics`, newTopic);

            // Clear input fields
            setTopicName('');
            setCourseName('');

            // Fetch the latest topic and course list
            fetchTopics();
            fetchCourses();
            setSuccessMessage('Topic added successfully.');
            setTimeout(() => {
                setSuccessMessage('');
            }, 1000);
        } catch (error) {
            console.error('Error adding topic:', error);
            setErrorMessage('Error adding topic. Please try again.');
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    };

    const handleDelete = async (topicId) => {
        try {
            await axios.delete(`${proxyConfig[microserviceTraining]}api/topics/${topicId}`);
            // Fetch the latest topic list immediately after deleting
            fetchTopics();
            setSuccessMessage('Topic deleted successfully.');
            setTimeout(() => {
                setSuccessMessage('');
            }, 1000);
        } catch (error) {
            console.error('Error deleting topic:', error);
            setErrorMessage('Error deleting topic. Please try again.');
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    };

    useEffect(() => {
        fetchTopics();
        fetchCourses(); // Fetch the course list on component mount
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-4 mt-3">
                    <label>Topic Name:</label>
                    <input
                        type="text"
                        className="form-control mt-3"
                        style={{ border: "1px solid black" }}
                        required
                        value={topicName}
                        onChange={(e) => setTopicName(e.target.value)}
                    />
                    <label>Course:</label>
                    <select
                        className="form-control mt-3"
                        required
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    >
                        <option value="">Select a Course</option>
                        {courses.map((course) => (
                            <option key={course.courseName} value={course.courseName}>
                                {course.courseName}
                            </option>
                        ))}
                    </select>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                    {successMessage && <p className="text-success">{successMessage}</p>}
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Topic ID</th>
                                <th scope="col">Topic Name</th>
                                <th scope="col">Course</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topics.map((topic) => (
                                <tr key={topic.topicId}>
                                    <th scope="row">{topic.topicId}</th>
                                    <td>{topic.topicName}</td>
                                    <td>{topic.courses ? topic.courses.courseName : ''}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(topic.topicId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Addtopics;
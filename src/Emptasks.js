import axios from 'axios';
import { useState } from "react";
import proxyConfig from "./proxyConfig";

const Emptask = () => {
    const [showTaskSubmit, setShowTaskSubmit] = useState(true);
    const [task, setTask] = useState('');
    const [discription, setDiscription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const microserviceReport = "report"; // Replace with the appropriate microservice key


    const empId = sessionStorage.getItem('empId'); // Assuming empId is stored in sessionStorage

    const handleSubmit = async () => {
        const eodReport = {
            task,
            discription,
            startDate,
            endDate,
            status,
            startTime,
            endTime,
            empId,
        };
        try {
            // Make a POST request to the API server
            const response = await axios.post(`${proxyConfig[microserviceReport]}reports`, eodReport);

            // Handle the response from the server, e.g., show a success message
            console.log('EOD data saved:', response.data);
            setSuccessMessage("EOD report submitted successfully");
            setTimeout(() => {
                setSuccessMessage("");
            }, 1000);
            // Clear the input fields after successfully submitting the data
            setTask('');
            setDiscription('');
            setStartTime('');
            setEndTime('');
            setStartDate('');
            setEndDate('');
            setStatus('');
        } catch (error) {
            // Handle errors, e.g., display an error message or log the error
            console.error('Error:', error);
            setErrorMessage('Error submitting EOD. Please try again.');
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
        }
    };

    return (
        <>
            {showTaskSubmit && (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mt-5">
                                <h2 className="text-center mb-4">Submit EOD Report</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="task" className="form-label">Task</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="task"
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="discription" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="discription"
                                            value={discription}
                                            onChange={(e) => setDiscription(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="startTime" className="form-label">Start Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="startTime"
                                            value={startTime}
                                            onChange={(e) => setStartTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="endTime" className="form-label">End Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="endTime"
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select
                                            className="form-control"
                                            id="status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="inProgress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="startDate" className="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="startDate"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="endDate" className="form-label">End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="endDate"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => {
                                                setShowTaskSubmit(false);
                                                handleSubmit();
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
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
        </>
    );
};

export default Emptask;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import proxyConfig from "./proxyConfig";
import { useGlobalState } from './GlobalState';



const Addtask = () => {
    const { state, dispatch } = useGlobalState();

    const [task, setTask] = useState({
        taskId: '',
        task: '',
        status: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        employeeId: '',
    });

    const [tasks, setTasks] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const microserviceReport = "report"; // Replace with the appropriate microservice key

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${proxyConfig[microserviceReport]}api/tasks`, task);
            if (response.status === 201) {
                // Task created successfully
                const newTask = {
                    taskId: response.data.taskId, // Make sure you get the task ID from the response
                    task: task.task,
                    discription: task.discription, // Or description, check your naming consistency
                    startDate: task.startDate,
                    endDate: task.endDate,
                    startTime: task.startTime,
                };
    
                // Dispatch the ADD_TASK action to add the task to your context
                dispatch({ type: 'ADD_TASK', payload: response.data }); // Dispatch newly created task

                setSuccessMessage("Task created successfully");
                setTask({
                    task: '',
                    discription: '',
                    startDate: '',
                    endDate: '',
                });
                setTimeout(() => {
                    setSuccessMessage("");
                }, 1000);
    
                // No need to call fetchTasks here, as the new task is added to the context
            }
        } catch (error) {
            console.error('Error creating task:', error);
            setErrorMessage('Error creating task. Please try again.');
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
        }
    };
    

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${proxyConfig[microserviceReport]}api/tasks`);
            if (Array.isArray(response.data)) {
                setTasks(response.data);
            } else {
                console.error('Invalid data received from the API:', response.data);
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`${proxyConfig[microserviceReport]}api/tasks/${taskId}`);
            setSuccessMessage("Task deleted successfully");
            fetchTasks(); // Fetch the latest task list after deleting
            setTimeout(() => {
                setSuccessMessage("");
              }, 1000);
        } catch (error) {
            console.error('Error deleting task:', error);
            setErrorMessage('Error deleting task. Please try again.');
            setTimeout(() => {
                setErrorMessage("");
              }, 1000);
        }
    };

    useEffect(() => {
        fetchTasks(); // Fetch the initial list of tasks when the component mounts
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12 mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                               

                                <th scope="col">Task</th>
                                <th scope="col">Description</th>

                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                

                                <td><input
                                    type="text"
                                    className="form-control"
                                    value={task.task}
                                    onChange={(e) => setTask({ ...task, task: e.target.value })}
                                /></td>
                                <td><textarea
                                    type="text"
                                    className="form-control"
                                    value={task.discription}
                                    onChange={(e) => setTask({ ...task, discription: e.target.value })}
                                /></td>
                                <td><input
                                    type="date"
                                    className="form-control"
                                    value={task.startDate}
                                    onChange={(e) => setTask({ ...task, startDate: e.target.value })}
                                /></td>
                                <td><input
                                    type="date"
                                    className="form-control"
                                    value={task.endDate}
                                    onChange={(e) => setTask({ ...task, endDate: e.target.value })}
                                /></td>
                                <td></td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleSubmit()}
                                    >
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

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
                                <th scope="col">Start Time</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((t) => (
                                <tr key={t.taskId}>
                                    <td>{t.taskId}</td>
                                    <td>{t.task}</td>
                                    <td>{t.discription}</td>
                                    <td>{t.startTime}</td>
                                    <td>{t.endDate}</td>
                                    <td>{t.startDate}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(t.taskId)}
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
}

export default Addtask;

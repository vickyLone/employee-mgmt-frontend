import { useEffect, useState } from "react";
import Emptask from "./Emptasks";

const Emptaskform = () => {
    const[showTasks,setShowtasks]=useState(false);
    const[showform,setShowform]=useState(true);
    const[tasks,setTasks]=useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:8082/reports')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            {/* <Empnav/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                    <Empslider/>
                    </div>
                    <div className="col-8"> */}
                        {showform&&(<><table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Task</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">StartTime</th>
                                    <th scope="col">EndTime</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">StartDate</th>
                                    <th scope="col">EndDate</th>
                                    <th scope="col">Report Id</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tasks.map((training, index) => (
                                <tr key={index}>
                                    <th scope="row">{training.task}</th>
                                    <td>{training.discription}</td>
                                    <td>{training.startTime}</td>
                                    <td>{training.endTime}</td>
                                    <td>{training.status}</td>
                                    <td>{training.startDate}</td>
                                    <td>{training.endDate}</td>
                                    <td>{training.reportId}</td>
                                </tr>
                            ))}
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                </tr> */}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                            <button
                                onClick={()=>{setShowtasks(true);
                                                setShowform(false)}}
                            type="button" className="btn btn-primary">Back</button>
                            <button type="button" className="btn btn-primary ms-2">All Tasks</button>
                        </div></>)}
                        {showTasks&&<Emptask/>}
                    {/* </div>
                </div>
            </div>
            <Footer/> */}
        </>
    )
}
export default Emptaskform;
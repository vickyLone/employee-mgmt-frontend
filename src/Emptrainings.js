import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Emptrainingsdone from "./Emptrainingsdone";

const Emptrainings = () => {
    const [showTrainings,setShowtrainings]=useState(false);
    const[showTrain,setShowtrain]=useState(true);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:8083/trainings')
            .then((response) => response.json())
            .then((data) => setTrainings(data))
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
                    {showTrain&&(<><p className="text-center fs-2 fw-bold">Trainings Done</p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Topic Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody> */}
                            <tbody>
                             {trainings.map((training, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{training.courseName}</td>
                                    <td>{training.topicName}</td>
                                    <td>{training.status}</td>
                                    <td>{training.startDate}</td>
                                    <td>{training.endDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-end">
                                    <Link to='/home' type="button" className="btn btn-primary">Back</Link>
                                    <button 
                                    onClick={()=>{
                                        setShowtrainings(true);
                                        setShowtrain(false);
                                    }}
                                    type="button" className="btn btn-success ms-2">Get Trained</button>
                                </div>
                            </div>
                        </div></>)}
                        {showTrainings&&<Emptrainingsdone/>}
                    {/* </div>
                </div>
            </div>
            <Footer/> */}
        </>
    )
}
export default Emptrainings;
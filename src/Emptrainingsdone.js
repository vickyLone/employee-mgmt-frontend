import axios from 'axios';
import React, { useState } from 'react';
import Emptrainings from "./Emptrainings";


const Emptrainingsdone = () => {
    const [showTrainings, setShowtrainings] = useState(false);
    const [showTrain, setShowtrain] = useState(true);
    const [courseName, setCourseName] = useState('');
    const [topicName, setTopicName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async () => {
        const trainingData = {
          courseName,
          topicName,
          startDate,
          endDate,
          status,
        };
        try {
            // Make a POST request to the API server
            const response = await axios.post('http://localhost:8083/trainings', trainingData);
      
            // Handle the response from the server, e.g., show a success message
            console.log('Training data saved:', response.data);
      
            // Clear the input fields after successfully submitting the data
            setCourseName('');
            setTopicName('');
            setStartDate('');
            setEndDate('');
            setStatus('');
          } catch (error) {
            // Handle errors, e.g., display an error message or log the error
            console.error('Error:', error);
          }
        };
//   const [trainings, setTrainings] = useState([]);
//   const [newTraining, setNewTraining] = useState({});

//   useEffect(() => {
//     async function fetchTrainings() {
//       const response = await getTrainings();
//       setTrainings(response.data);
//     }
//     fetchTrainings();
//   }, []);

//   const handleCreateTraining = async () => {
//     const createdTraining = await createTraining(newTraining);
//     setTrainings([...trainings, createdTraining]);
//     setNewTraining({});
//   };

//   const handleUpdateTraining = async (trainingId) => {
//     const updatedTraining = await updateTraining(trainingId, newTraining);
//     const updatedTrainings = trainings.map((t) =>
//       t.id === trainingId ? updatedTraining : t
//     );
//     setTrainings(updatedTrainings);sxssa
//     setNewTraining({});
//   };

//   const handleDeleteTraining = async (trainingId) => {
//     await deleteTraining(trainingId);
//     const updatedTrainings = trainings.filter((t) => t.id !== trainingId);
//     setTrainings(updatedTrainings);
//   };

    return (
        <>
            {/* <Empnav/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                    <Empslider/>
                    </div>
                    <div className="col-8"> */}
            {showTrain && (<><p className="text-center fs-2 fw-bold">Trainings</p>
                <div className="row">
                    <div className="col-4">
                        <label className="fw-bold">Course Name:</label>
                        <input type='text' value={courseName} onChange={(e)=>setCourseName(e.target.value)} className='form-control'/>
                    </div>
                    <div className="col-4">
                        <label className="fw-bold">Topic Name:</label>
                        <input type='text' value={topicName} onChange={(e)=>setTopicName(e.target.value)} className='form-control'/>
                    </div>
                    <div className="col-4">
                        <label className="fw-bold">Status:</label>
                        <input type='text' value={status} onChange={(e)=>setStatus(e.target.value)} className='form-control'/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <label className="fw-bold">Start Date:</label>
                        <input type="date" className="form-control" value={startDate} onChange={(e)=>setStartDate(e.target.value)} required />
                    </div>
                    <div className="col-4">
                        <label className="fw-bold">End Date:</label>
                        <input type="date" className="form-control" value={endDate} onChange={(e)=>setEndDate(e.target.value)} required />
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <button
                                onClick={() => {
                                    setShowtrainings(true);
                                    setShowtrain(false);
                                }}
                                type="button" className="btn btn-primary">Back</button>
                            <button type="button" className="btn btn-success ms-2" onClick={handleSubmit}>Start training</button>
                        </div>
                    </div>
                </div></>)}
            {showTrainings && <Emptrainings />}
            {/* </div>
                </div>
            </div>
            <Footer/> */}
        </>
    )
}
export default Emptrainingsdone;
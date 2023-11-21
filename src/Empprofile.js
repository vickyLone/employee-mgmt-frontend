import { useState, useEffect } from "react";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Correct import statement
import proxyConfig from "./proxyConfig";

const Empprofile = () => {
    const [employeeProfile, setEmployeeProfile] = useState({
        empId: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phoneNumber: '',
        dept: '',
        joiningDate: '',
        role: '',
        address: '',
    });

    const microserviceEmployee = "employee"; // Replace with the appropriate microservice key
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployeeProfile = async () => {
            try {
                const storedEmpId = sessionStorage.getItem('empId');
                if (storedEmpId) {
                    const response = await axios.get(
                        `${proxyConfig[microserviceEmployee]}api/employee/${storedEmpId}`
                    );

                    setEmployeeProfile(response.data);
                }
            } catch (error) {
                console.error('Error fetching employee profile', error);
            }
        };

        fetchEmployeeProfile();
    }, []);

    // const handleBack = () => {
    //     navigate('/#'); // Navigate back to the previous page
    // };

    return (
        <>
            <div className="row p-4">
                <div className="col-4 text-center">
                    <img
                        src="https://media.istockphoto.com/id/1464764064/photo/business-black-man-and-portrait-with-arms-crossed-for-leadership-management-and-trust-smile.webp?b=1&s=170667a&w=0&k=20&c=Sak8IJFnBgUP9mT0f96rMlmWvB6nE2GzigVlGigNNwg="
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                        alt="Employee Profile"
                    />
                </div>
                <div className="col-8">
                    <div className="d-flex flex-column">
                        <p>Employee Id: {employeeProfile.empId}</p>
                        <p>Name: {`${employeeProfile.firstName} ${employeeProfile.lastName}`}</p>
                        <p>Department: {employeeProfile.dept}</p>
                        <p>Role: {employeeProfile.role}</p>
                    </div>
                    <div className="d-flex flex-column">
                        <p>Email: {employeeProfile.email}</p>
                        <p>Phone No: {employeeProfile.phoneNumber}</p>
                        <p>Gender: {employeeProfile.gender}</p>
                        <p>Joining Date: {employeeProfile.joiningDate}</p>
                        <p>Address: {employeeProfile.address}</p>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary" onClick={handleBack}>Back</button> */}
<hr/>
            <div>
                <p>
                    Note: If Profile information needs to be updated or there is missing or wrong information please provide an update to HR using official web mail.
                </p>
            </div>
        </>
    );
};

export default Empprofile;

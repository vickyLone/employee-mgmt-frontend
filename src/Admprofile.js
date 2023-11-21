import { useState, useEffect } from "react";
import axios from 'axios';
import proxyConfig from "./proxyConfig";

const Admprofile = () => {
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

    const [editMode, setEditMode] = useState(false);
    const [tempProfile, setTempProfile] = useState({ ...employeeProfile });

    const microserviceEmployee = "employee"; // Replace with the appropriate microservice key

    useEffect(() => {
        const fetchEmployeeProfile = async () => {
            try {
                const storedEmpId = sessionStorage.getItem('empId');
                if (storedEmpId) {
                    const response = await axios.get(
                        `${proxyConfig[microserviceEmployee]}api/employee/${storedEmpId}`
                    );

                    setEmployeeProfile(response.data);
                    setTempProfile(response.data);
                }
            } catch (error) {
                console.error('Error fetching employee profile', error);
            }
        };

        fetchEmployeeProfile();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `${proxyConfig[microserviceEmployee]}api/employee/${employeeProfile.empId}`,
                tempProfile
            );

            setEmployeeProfile({ ...tempProfile });
            setEditMode(false);
        } catch (error) {
            console.error('Error saving employee profile', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempProfile({ ...tempProfile, [name]: value });
    };

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
                        <p>Employee Id: {editMode ? tempProfile.empId : employeeProfile.empId}</p>
                        <p>Name: {editMode ? (
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={tempProfile.firstName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={tempProfile.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ) : (
                            `${employeeProfile.firstName} ${employeeProfile.lastName}`
                        )}</p>
                        <p>Department: {editMode ? (
                            <input
                                type="text"
                                name="dept"
                                value={tempProfile.dept}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.dept
                        )}</p>
                        <p>Role: {editMode ? (
                            <input
                                type="text"
                                name="role"
                                value={tempProfile.role}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.role
                        )}</p>
                    </div>
                    <div className="d-flex flex-column">
                        <p>Email: {editMode ? (
                            <input
                                type="text"
                                name="email"
                                value={tempProfile.email}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.email
                        )}</p>
                        <p>Phone No: {editMode ? (
                            <input
                                type="text"
                                name="phoneNumber"
                                value={tempProfile.phoneNumber}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.phoneNumber
                        )}</p>
                        <p>Gender: {editMode ? (
                            <input
                                type="text"
                                name="gender"
                                value={tempProfile.gender}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.gender
                        )}</p>
                        <p>Joining Date: {editMode ? (
                            <input
                                type="text"
                                name="joiningDate"
                                value={tempProfile.joiningDate}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.joiningDate
                        )}</p>
                        <p>Address: {editMode ? (
                            <input
                                type="text"
                                name="address"
                                value={tempProfile.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            employeeProfile.address
                        )}</p>
                    </div>
                </div>


                <div className="row p-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            {!editMode && (
                                <button type="button" className="btn btn-secondary" onClick={handleEdit}>
                                    Edit
                                </button>
                            )}
                            {editMode && (
                                <>
                                    <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-primary ms-2" onClick={handleSave}>
                                        Save
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </>
            );
};

            export default Admprofile;

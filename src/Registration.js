import React, { useState } from 'react';
import axios from 'axios';
import proxyConfig from "./proxyConfig";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to navigate to the login page


const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        empId: '',
        email: '',
        gender: '',
        pzwd: '',
        phoneNumber: '',
        dept: '',
        joiningDate: '',
        role: '',
        address: '',
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const microserviceEmployee = "employee"; // Replace with the appropriate microservice key
    const Hr = 'HR';
    const Development = 'Development';
    const Management = 'Management';
    const Admin = 'Admin';
    const Employee = 'Employee';

    // Handle changes for the gender radio buttons
    const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            gender: e.target.value,
        });
    };

    const handleRegistration = async () => {
        // Validate the form
        const validationErrors = {};

        if (!formData.firstName) {
            validationErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName) {
            validationErrors.lastName = 'Last Name is required';
        }

        if (!formData.empId) {
            validationErrors.empId = 'Employee Id is Required';
        }

        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!formData.gender) {
            validationErrors.gender = 'Gender is required';
        }

        if (!formData.pzwd) {
            validationErrors.pzwd = 'Password is required';
        }

        if (!formData.phoneNumber) {
            validationErrors.phoneNumber = 'Phone Number is required';
        }

        if (!formData.dept) {
            validationErrors.dept = 'Department is required';
        }

        if (!formData.joiningDate) {
            validationErrors.joiningDate = 'Joining Date is required';
        }

        if (!formData.role) {
            validationErrors.role = 'Role is required';
        }

        if (!formData.address) {
            validationErrors.address = 'Address is required';
        }

        setValidationErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post(`${proxyConfig[microserviceEmployee]}api/employee/register`, formData);

                if (response.status === 201) {
                    setSuccessMessage('Registration successful. You can now login.');
                    setErrorMessage('');
                } else {
                    setErrorMessage('Registration failed. Please try again.');
                    setSuccessMessage('');
                }
            } catch (error) {
                console.error('Registration error:', error);
                setErrorMessage('Registration failed. Please try again.');
                setSuccessMessage('');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    return (
        <>
            <div className="container-fluid p-5">
                <div className="container bg-body-tertiary rounded p-3">
                    <div className="row">
                        <div className="col-6">
                            <span>First Name</span>
                            <input type="text" className="form-control" name='firstName' value={formData.firstName} onChange={handleChange} />
                            {validationErrors.firstName && <div className="text-danger">{validationErrors.firstName}</div>}
                            <br />
                            <span>Last Name</span>
                            <input type="text" className="form-control" name='lastName' value={formData.lastName} onChange={handleChange} />
                            {validationErrors.lastName && <div className="text-danger">{validationErrors.lastName}</div>}
                            <br />
                            <span>Employee Id</span>
                            <input type="text" className="form-control" name='empId' value={formData.empId} onChange={handleChange} />
                            {validationErrors.empId && <div className="text-danger">{validationErrors.empId}</div>}
                            <br />
                            <span>Email</span>
                            <input type="email" className="form-control" name='email' value={formData.email} onChange={handleChange} />
                            {validationErrors.email && <div className="text-danger">{validationErrors.email}</div>}
                            <br />
                            <label>Gender</label>
                            <div className="d-flex">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="maleRadio"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleGenderChange}
                                    />
                                    <label className="form-check-label" htmlFor="maleRadio">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input ms-2"
                                        type="radio"
                                        name="gender"
                                        id="femaleRadio"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleGenderChange}
                                    />
                                    <label className="form-check-label" htmlFor="femaleRadio">
                                        Female
                                    </label>
                                </div>
                            </div>
                            {validationErrors.gender && <div className="text-danger">{validationErrors.gender}</div>}
                            <br />
                            <span>Password</span>
                            <input type="password" name='pzwd' className="form-control" value={formData.pzwd} onChange={handleChange} />
                            {validationErrors.pzwd && <div className="text-danger">{validationErrors.pzwd}</div>}
                            <br />
                        </div>
                        <div className="col-6">
                            <span>Phone</span>
                            <input type="text" className="form-control" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
                            {validationErrors.phoneNumber && <div className="text-danger">{validationErrors.phoneNumber}</div>}
                            <br />
                            <span>Department</span>
                            <select className="form-select" name='dept' value={formData.dept} onChange={handleChange}>
                                <option>Select</option>
                                <option value={Hr}>HR</option>
                                <option value={Development}>Development</option>
                                <option value={Management}>Management</option>
                            </select>
                            {validationErrors.dept && <div className="text-danger">{validationErrors.dept}</div>}
                            <br />
                            <span>Joining Date</span>
                            <input type="date" className="form-control" name='joiningDate' value={formData.joiningDate} onChange={handleChange} />
                            {validationErrors.joiningDate && <div className="text-danger">{validationErrors.joiningDate}</div>}
                            <br />
                            <label>Role</label>
                            <select className="form-select" name='role' value={formData.role} onChange={handleChange}>
                                <option>Select</option>
                                <option value={Admin}>Admin</option>
                                <option value={Employee}>Employee</option>
                            </select>
                            {validationErrors.role && <div className="text-danger">{validationErrors.role}</div>}
                            <br />
                            <span>Address</span>
                            <input type="text" className="form-control" name='address' value={formData.address} onChange={handleChange} />
                            {validationErrors.address && <div className="text-danger">{validationErrors.address}</div>}
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                {/* Render success or error messages */}
                                {successMessage && <div className="text-success">{successMessage}</div>}
                                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                <button onClick={handleRegistration} className="btn btn-primary">
                                    Register
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;

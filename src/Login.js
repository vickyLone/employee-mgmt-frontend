import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { Navigate, useNavigate } from 'react-router-dom';
import proxyConfig from "./proxyConfig";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        pzwd: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        pzwd: '',
    });
    const microserviceEmployee = "employee"; // Replace with the appropriate microservice key
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear the error message when the user changes the input
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        }

        if (!formData.pzwd) {
            newErrors.pzwd = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post(
                    `${proxyConfig[microserviceEmployee]}api/employee/login`,
                    formData
                );

                if (response.data.role === 'Admin') {
                    setLoggedInUser('Admin');
                    navigate('/Admin', { state: { firstName: response.data.firstName, empId: response.data.empId } });
                    sessionStorage.setItem('empId', response.data.empId);

                } else if (response.data.role === 'Employee') {
                    setLoggedInUser('home');
                    navigate('/home', { state: { firstName: response.data.firstName, empId: response.data.empId } });
                    sessionStorage.setItem('empId', response.data.empId);

                }
                console.log('Login successful', response.data);


            } catch (error) {
                setErrors({ email: 'Invalid email or password', pzwd: '' });
                console.error('Login failed', error);
            }
        }
    };

    return (
        <>
            <div className="container-fluid p-5">
                <div className="container p-5 bg-body-tertiary rounded">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    {errors.email && <p className="text-danger">{errors.email}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="pzwd" value={formData.pzwd}
                                        onChange={handleChange} />
                                    {errors.pzwd && <p className="text-danger">{errors.pzwd}</p>}
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <p className="pt-3">Forgot Password?<a href="#">Click here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;


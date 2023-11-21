import React, { useState, useEffect } from 'react';
import axios from 'axios';
import proxyConfig from "./proxyConfig";

const Viewemployee = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const microserviceEmployee = "employee"; // Replace with the appropriate microservice key

    useEffect(() => {
        const fetchEmployeeList = async () => {
            try {
                const response = await axios.get(`${proxyConfig[microserviceEmployee]}api/employee`,
                ); // Replace with your actual backend API URL
                setEmployeeList(response.data);
            } catch (error) {
                setError('Error fetching employee list');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeList();
    }, []);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {employeeList.length === 0 && !loading && !error && <p>No employees found.</p>}

            {employeeList.length > 0 && (
                <table className="table" style={{ fontFamily: 'sans-serif' }}>
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Employee Id</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Role</th>
                            <th scope="col">Joining Date</th>
                            <th scope="col">Department</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList.map((employee, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{employee.empId}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.role}</td>
                                <td>{employee.joiningDate}</td>
                                <td>{employee.dept}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </>
    );
};

export default Viewemployee;

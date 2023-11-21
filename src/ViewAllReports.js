import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import proxyConfig from "./proxyConfig";


const ViewAllReports = () => {
  // const [userReports, setUserReports] = useState([]);
  const [allReports, setAllReports] = useState([]);
  const microserviceReport = "report"; // Replace with the appropriate microservice key

  // const fetchUserReports = async () => {
  //   try {
  //     // Fetch user-specific reports based on empId from session
  //     const empId = sessionStorage.getItem('empId');
  //     const userResponse = await axios.get(`${proxyConfig[microserviceReport]}reports/employee/${empId}`);
  //     setUserReports(userResponse.data);
  //   } catch (error) {
  //     console.error('Error fetching user reports:', error);
  //   }
  // };

  const fetchAllReports = async () => {
    try {
      // Fetch all reports
      const allResponse = await axios.get(`${proxyConfig[microserviceReport]}reports`);
      setAllReports(allResponse.data);
    } catch (error) {
      console.error('Error fetching all reports:', error);
    }
  };

  useEffect(() => {
    // Fetch user reports and all reports when the component mounts
    // fetchUserReports();
    fetchAllReports();
  }, []);

  return (
    <>


      <div className="row mt-3">
        <div className="col-12">
          <h2>All Reports</h2>
          <table className="table">
            {/* Table headers */}
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Report Id</th>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">EmployeeId</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            {/* Table body for all reports */}
            <tbody>
              {allReports.map((report, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{report.reportId}</td>
                  <td>{report.task}</td>
                  <td>{report.status}</td>
                  <td>{new Date(report.startTime).toLocaleTimeString()}</td>
                  <td>{new Date(report.endTime).toLocaleTimeString()}</td>
                  <td>{report.empId}</td>
                  {/* <td>
                    <Link to={`/viewreport/view/${report.reportId}`} type="button" className="btn btn-primary">
                      View
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewAllReports;

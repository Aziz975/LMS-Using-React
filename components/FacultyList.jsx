import React from "react";
import { Link } from "react-router-dom";

const FacultyList = ({ facultyData }) => {
  return (
    <div className="container">
      <h2>Faculty List</h2>
      {facultyData.length === 0 ? (
        <h3>No Faculty Available</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Age</th><th>Qualification</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td><td>{f.name}</td><td>{f.age}</td><td>{f.qualification}</td><td>{f.status}</td>
                <td>
                  <Link to={`/faculty-details/${f.id}`}>Details</Link> | 
                  <Link to={`/faculty-update/${f.id}`}>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FacultyList;

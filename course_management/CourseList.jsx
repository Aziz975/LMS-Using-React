import React from "react";
import { Link } from "react-router-dom";

function CourseList({ data, onDelete }) {
  return (
    <div>
      <h2>Course List</h2>

      {data.length === 0 ? (
        <p>No Courses Available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course</th>
              <th>Faculty</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((c, index) => (
              <tr key={index}>
                <td>{c.code}</td>
                <td>{c.name}</td>
                <td>{c.faculty}</td>
                <td>{c.duration} Months</td>
                <td>
                    <Link to={`/details/${c.code}`} className="view-btn">View</Link>
                    <Link to={`/update/${c.code}`} className="edit-btn">Edit</Link>
                  <button className="delete-btn" onClick={() => onDelete(c.code)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/" className="link">+ Add Another Course</Link>
    </div>
  );
}

export default CourseList;

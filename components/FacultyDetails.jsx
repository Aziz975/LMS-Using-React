import React from "react";
import { useParams } from "react-router-dom";

const FacultyDetails = ({ facultyData }) => {
  const { id } = useParams();
  const data = facultyData.find((f) => f.id === id);

  return (
    <div className="container">
      <h2>Faculty Details</h2>
      {data ? (
        <ul className="details">
          <li><b>ID:</b> {data.id}</li>
          <li><b>Name:</b> {data.name}</li>
          <li><b>Age:</b> {data.age}</li>
          <li><b>Qualification:</b> {data.qualification}</li>
          <li><b>Joined At:</b> {data.joined}</li>
          <li><b>Status:</b> {data.status}</li>
        </ul>
      ) : (
        <h3>No Faculty Found</h3>
      )}
    </div>
  );
};

export default FacultyDetails;

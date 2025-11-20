import React from "react";
import { useParams } from "react-router-dom";
import "./faculty.css";

const FacultyProfile = ({ data }) => {
  const { id } = useParams();
  const f = data.find((item) => item.id === id);

  return (
    <div className="profile-card">
      <h2>Faculty Profile</h2>

      <p><b>ID:</b> {f.id}</p>
      <p><b>Name:</b> {f.name}</p>
      <p><b>Age:</b> {f.age}</p>
      <p><b>Qualification:</b> {f.qualification}</p>
      <p><b>Joined At:</b> {f.joinedAt}</p>
      <p><b>Status:</b> {f.status}</p>
    </div>
  );
};

export default FacultyProfile;

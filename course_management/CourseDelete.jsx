import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function CourseDelete({ data, deleteCourse }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = data.find((c) => c.code === id);

  const confirmDelete = () => {
    deleteCourse(id);
    alert("Course Deleted Successfully!");
    navigate("/list");
  };

  return course ? (
    <div className="details-card">
      <h2>⚠ Delete Course</h2>
      <p>Are you sure you want to delete <strong>{course.name}</strong>?</p>
      <button className="delete-btn" onClick={confirmDelete}>Yes, Delete</button>
      <br /><br />
      <Link to="/list" className="link">❌ Cancel</Link>
    </div>
  ) : (
    <p>Course Not Found</p>
  );
}

export default CourseDelete;

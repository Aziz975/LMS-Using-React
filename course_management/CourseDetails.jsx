import React from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetails({ data }) {
  const { id } = useParams();
  const course = data.find((c) => c.code === id);

  return course ? (
    <div className="details-card">
      <h2>Course Details</h2>
      <p><strong>Code:</strong> {course.code}</p>
      <p><strong>Name:</strong> {course.name}</p>
      <p><strong>Faculty:</strong> {course.faculty}</p>
      <p><strong>Duration:</strong> {course.duration} Months</p>

      <Link to="/list" className="link">⬅ Back to List</Link>
    </div>
  ) : (
    <p>Course Not Found</p>
  );
}

export default CourseDetails;

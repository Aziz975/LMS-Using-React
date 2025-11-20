import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CourseRegistration({ addCourse }) {
  const { register, handleSubmit, reset } = useForm();

  const submitData = (data) => {
    addCourse(data);
    reset();
  };

  return (
    <div className="form-box">
      <h2>Add New Course</h2>

      <form onSubmit={handleSubmit(submitData)}>
        <input placeholder="Course Code" {...register("code", { required: true })} />
        <input placeholder="Course Name" {...register("name", { required: true })} />
        <input placeholder="Faculty" {...register("faculty", { required: true })} />
        <input type="number" placeholder="Duration (Months)" {...register("duration", { required: true })} />
        <button className="btn">Add Course</button>
      </form>

      <Link to="/list" className="link">View Courses ➜</Link>
    </div>
  );
}

export default CourseRegistration;

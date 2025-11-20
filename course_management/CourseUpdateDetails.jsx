import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function CourseUpdateDetails({ data, updateCourse }) {
  const { id } = useParams();
  const course = data.find((c) => c.code === id);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (course) reset(course);
  }, [course, reset]);

  const saveUpdate = (updated) => {
    updateCourse(updated);
  };

  return (
    <div className="form-box">
      <h2>Edit Course</h2>

      <form onSubmit={handleSubmit(saveUpdate)}>
        <input {...register("code")} readOnly />
        <input {...register("name", { required: true })} />
        <input {...register("faculty", { required: true })} />
        <input {...register("duration", { required: true })} />
        <button className="btn">Update Course</button>
      </form>
      <Link to="/list" className="link">⬅ Back</Link>
    </div>
  );
}

export default CourseUpdateDetails;

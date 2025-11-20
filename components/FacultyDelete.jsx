import React from "react";
import { useForm } from "react-hook-form";

const FacultyDelete = ({ facultyData, setFacultyData }) => {
  const { register, handleSubmit } = useForm();

  function removeFaculty({ id }) {
    const updated = facultyData.filter((f) => f.id !== id);
    setFacultyData(updated);
    alert("Faculty Deleted Successfully!");
  }

  return (
    <div className="container">
      <h2>Delete Faculty</h2>
      <form className="form" onSubmit={handleSubmit(removeFaculty)}>
        <label>Enter Faculty ID</label>
        <input {...register("id", { required: true })} />
        <button type="submit" className="deleteBtn">Delete</button>
      </form>
    </div>
  );
};

export default FacultyDelete;

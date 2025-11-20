import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const FacultyUpdate = ({ facultyData, setFacultyData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selected = facultyData.find((f) => f.id === id);
  const { register, handleSubmit } = useForm({ defaultValues: selected });

  function update(data) {
    const updated = facultyData.map((f) => (f.id === id ? data : f));
    setFacultyData(updated);
    alert("Faculty Updated Successfully!");
    navigate("/faculty-list");
  }

  return (
    <div className="container">
      <h2>Update Faculty Details</h2>
      <form className="form" onSubmit={handleSubmit(update)}>
        <label>Name</label>
        <input {...register("name")} />

        <label>Age</label>
        <input type="number" {...register("age")} />

        <label>Qualification</label>
        <input {...register("qualification")} />

        <label>Status</label>
        <select {...register("status")}>
          <option>Active</option>
          <option>On Leave</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default FacultyUpdate;

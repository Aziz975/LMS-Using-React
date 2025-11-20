import React from "react";
import { useForm } from "react-hook-form";

const FacultyRegistration = ({ facultyData, setFacultyData }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function submitData(data) {
    setFacultyData([...facultyData, data]);
    alert("Faculty Registered Successfully!");
    reset();
  }

  return (
    <div className="container">
      <h2>Faculty Registration</h2>
      <form className="form" onSubmit={handleSubmit(submitData)}>
        
        <label>Faculty ID</label>
        <input {...register("id", { required: "Faculty ID required" })} />
        <p className="error">{errors.id?.message}</p>

        <label>Faculty Name</label>
        <input {...register("name", { required: "Name required" })} />
        <p className="error">{errors.name?.message}</p>

        <label>Age</label>
        <input type="number" {...register("age", { required: "Age required" })} />
        <p className="error">{errors.age?.message}</p>

        <label>Qualification</label>
        <input {...register("qualification", { required: "Qualification required" })} />
        <p className="error">{errors.qualification?.message}</p>

        <label>Joined At</label>
        <input type="date" {...register("joined", { required: "Joining Date required" })} />
        <p className="error">{errors.joined?.message}</p>

        <label>Status</label>
        <select {...register("status", { required: "Status required" })}>
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
        </select>
        <p className="error">{errors.status?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FacultyRegistration;

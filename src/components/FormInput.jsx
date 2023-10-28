import React from "react";

const FormInput = ({ type, name, label }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input type={type} name={name} className="input input-bordered " />
    </div>
  );
};

export default FormInput;

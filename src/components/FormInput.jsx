import React from "react";

const FormInput = ({ type, name, label,onChange,value}) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input type={type} name={name} className="input input-bordered " onChange={onChange} value={value}  />
    </div>
  );
};

export default FormInput;

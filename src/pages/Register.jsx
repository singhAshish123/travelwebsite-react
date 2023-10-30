import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import SubmitBtn from "../components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { name, email, password } = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    } else {
      dispatch(registerUser({ name, email, password }));
      user.name = "";
      user.email = "";
      user.password = "";
      navigate("/login");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="name"
          name="name"
          value={user?.name}
          onChange={handleChange}
        />

        <FormInput
          type="email"
          label="email"
          name="email"
          value={user?.email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          value={user?.password}
          onChange={handleChange}
        />

        <div className="mt-4">
          <SubmitBtn text="Submit" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;

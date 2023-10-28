import React from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import SubmitBtn from "../components/SubmitButton";
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="username" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
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

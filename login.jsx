import { useDispatch, useSelector } from "react-redux";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../features/user/userSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const userData = useSelector((state) => state.user.user);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email, password } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await dispatch(loginUser({ email, password }))
        .unwrap()
        .then(() => {
          // Login successful, navigate to a protected route
          navigate("/protected-route");
        });
    } catch (error) {
      // Handle login error, e.g., display an error message
      console.error("Login failed:", error);
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
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
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;

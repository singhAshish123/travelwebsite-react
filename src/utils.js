import axios from "axios";
const hotelUrl = "http://127.0.0.1:8000/api";

export const customFetch = axios.create({
  baseURL: hotelUrl,
});

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

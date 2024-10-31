// login.js
import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", {
      username: data.fullname,
      password: data.password,
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("fullname", data.fullname);
      callback(true, token);
    })
    .catch((error) => {
      callback(false, error.message);
    });
};
import axios from "axios";
// import jwt_decode from "jwt-decode";

const baseURL = "http://localhost:8080";
let headers = {};

if (localStorage.getItem("token")) {
  headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;

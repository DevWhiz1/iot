// src/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:3000/",
//   timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

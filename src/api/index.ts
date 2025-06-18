// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5167',
  withCredentials: true, // Quan trọng để gửi cookie đi!
});

export default api;

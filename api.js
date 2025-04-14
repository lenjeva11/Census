import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/villages', // Your Express endpoint
});

export default API;

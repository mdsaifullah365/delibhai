import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  // baseURL: 'https://delibhai-server.vercel.app/',
  baseURL: 'https://dev-delibhai.onrender.com', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
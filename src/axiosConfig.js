import axios from 'axios';

// Cấu hình axios
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
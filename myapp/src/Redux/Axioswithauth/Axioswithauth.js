// src/services/axiosWithAuth.js
import axios from 'axios';
import { api, token } from '../Api';



const axiosWithAuth = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosWithAuth;

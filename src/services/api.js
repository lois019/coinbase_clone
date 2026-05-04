import axios from 'axios';

const API_BASE_URL = 'https://coinbase-clone-o0ij.onrender.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for cookies (JWT tokens)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token
api.interceptors.response.use(
  (response) => {
    // Store token from login/register responses
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },
  (error) => {
    // Clear token on 401 errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  login: async (userData) => {
    const response = await api.post('/auth/login', userData);
    return response.data;
  },
};

// User API calls
export const userAPI = {
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },
};

// Crypto API calls
export const cryptoAPI = {
  getAllCryptos: async () => {
    const response = await api.get('/crypto');
    return response.data;
  },

  getTopGainers: async () => {
    const response = await api.get('/crypto/gainers');
    return response.data;
  },

  getNewListings: async () => {
    const response = await api.get('/crypto/new');
    return response.data;
  },

  addCrypto: async (cryptoData) => {
    const response = await api.post('/crypto', cryptoData);
    return response.data;
  },
};

export default api;
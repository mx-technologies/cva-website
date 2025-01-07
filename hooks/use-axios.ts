import { AuthStateProps } from '@/redux/store/slices/authSlice';
import axios from 'axios';
import { useSelector } from 'react-redux';

const axiosInstance = axios.create();

const useAxios = (token: string) => {
  // Add a request interceptor to include the Bearer token
  axiosInstance.interceptors.request.use(
    (config) => {
      // Get the token from cookies or local storage

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Set the Bearer token in the headers
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;

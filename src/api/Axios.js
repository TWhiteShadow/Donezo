import axios from 'axios';
import { toast } from 'sonner';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    toast.error('Request failed!', {
      description: error.response?.data?.message || 'An error occurred.',
    });
    return Promise.reject(error);
  }
);

export default api;

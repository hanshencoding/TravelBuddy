import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export const userAPI = {
    
  getProfile: async (id: number) => {
    const response = await API.get(`/user/profile/${id}`);
    return response.data;
  },

};
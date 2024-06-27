import axios from 'axios';
import { loginData } from '../types';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({baseURL: BASE_URL});

//Authentication
export const login = async (payload: loginData) => {
    const { data } = await axiosInstance.post('/auth/login', payload);
    return data;
}

export const refreshToken = async () => {
    const data = await axiosInstance.post('/auth/refresh');
    return data;
}
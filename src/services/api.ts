import axios from 'axios';
import axiosInstance from '../axiosInstance';
import { loginData } from '../types/loginData';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const axoisInstance = axios.create({baseURL: BASE_URL});

export const login = async (data: loginData) => {
    console.log(data);
    await axiosInstance.post('/auth/login', data);
}
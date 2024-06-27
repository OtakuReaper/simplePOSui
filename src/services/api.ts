import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const axoisInstance = axios.create({baseURL: BASE_URL});


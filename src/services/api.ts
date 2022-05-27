import axios from 'axios';
import { parseCookies } from 'nookies';

//const BASE_URL = "http://localhost:5000/api/";

const cookies = parseCookies();
const { TOKEN } = cookies;

export const publicRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export const userRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
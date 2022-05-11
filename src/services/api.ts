import axios from 'axios';
import { parseCookies } from 'nookies';

const BASE_URL = "http://localhost:5000/api/";

const cookies = parseCookies();
const { TOKEN } = cookies;
/* 
const result = JSON.stringify(TOKEN);

console.log('JSON PARS', result[0]) */

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

//console.log("LOCAL STORAGE: ", TOKEN);

//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWVmOWU4MjI4YjZiYWJjNWVhNWQ1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY1MjA1MSwiZXhwIjoxNjUwOTExMjUxfQ.tI8YnS8VIrIDA4rJ4BMjife9mfz-HsT7ZlDFWLC1KP8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
import axios from 'axios'
// import cookieCutter from 'cookie-cutter'
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

axios.interceptors.request.use((config) => {
    const token =  cookies.get('token') || ''
    config.headers.Authorization =  token;

    return config;
});

export default axios
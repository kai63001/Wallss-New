import axios from 'axios'
import cookieCutter from 'cookie-cutter'

axios.interceptors.request.use((config) => {
    const token = cookieCutter.get('token')
    config.headers.Authorization =  token;

    return config;
});

export default axios
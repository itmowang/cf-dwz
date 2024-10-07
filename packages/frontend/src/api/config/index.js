import axios from 'axios';

// 判断环境来设置baseURL
const isDev = process.env.NODE_ENV === 'development';

const API_BASE_URL = isDev ? '/api' : 'https://dwzworkers.loli5.workers.dev/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
});


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage?.getItem('token') || ''
    config.headers.Authorization = "Bearer " + token
    return config
})

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            return Promise.reject(response);
        }
        return response;
    },
    (error) => {
        if(error.status === 401){
            localStorage.clear();
            window.location.href = '/login'
            return;
        }
        return Promise.reject(error);
    }
);


export default axiosInstance

import axios from 'axios';

// 判断环境来设置baseURL
const isDev = process.env.NODE_ENV === 'development';

console.log('isDev', isDev);


const API_BASE_URL = isDev ? '/api' : 'https://dwzworkers.loli5.workers.dev/api';

const axiosInstance = axios.create({
    baseURL: 'https://dwzworkers.loli5.workers.dev/api',
    timeout: 10000
});


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage?.getItem('token') || ''
    config.headers.Authorization = "Bearer " + token
    return config
})

axiosInstance.interceptors.response.use((response) => {
    // 判断http状态码
    if (response.status !== 200) {
        return Promise.reject(response)
    }
    // 在响应成功返回之前做一些处理
    return response
});


export default axiosInstance

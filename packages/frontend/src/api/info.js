import axiosInstance from './config/index'


// 仪表盘信息
export async function getDashboard(data) {
    const response = await axiosInstance.get('/info/dashboard', data)
    return response.data
}



import axiosInstance from './config/index'


// 生成短网址
export async function createLink(data) {
    const response = await axiosInstance.post('/link/dwz_create', data)
    return response.data
}

// 获取短网址列表
export async function getLinkList(params) {
    const response = await axiosInstance.get('/link/dwz_list', { params })
    return response.data
}

// 获取短网址并且跳转的关键接口
export async function toLink(params) {
    const response = await axiosInstance.get(`/link/dwz/${params}`)
    return response.data
}
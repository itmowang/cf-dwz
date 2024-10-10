import axiosInstance from './config/index'


// 生成短网址
export async function createLink(data) {
    const response = await axiosInstance.post('/link/dwz_create', data)
    return response.data
}

// 共用的短网址创建
export async function createFreeCreate(data) {
    const response = await axiosInstance.post('/free/dwz_free_create', data)
    return response.data
}

// 获取短网址列表
export async function getLinkList(params) {
    const response = await axiosInstance.get('/link/dwz_list', { params })
    return response.data
}

// 获取短网址并且跳转的关键接口
export async function toLink(params) {
    const response = await axiosInstance.get(`/free/dwz/${params}`)
    return response.data
}


// 短网址日志查询
export async function dwzPage(params) {
    const response = await axiosInstance.get(`/link/dwz_visits/page`)
    return response.data
}


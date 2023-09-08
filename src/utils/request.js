import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
    baseURL: '/', // api 的基础 url
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 例如添加请求头，身份验证等
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        // 例如数据解析，统一处理等
        return response;
    },
    error => {
        // 对响应错误做点什么
        // 例如统一处理错误，给用户反馈等
        return Promise.reject(error);
    }
);

export default service;
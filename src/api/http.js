import axios from 'axios'
const service = axios.create({
    // headers: {'X-Requested-With': 'XMLHttpRequest','content-type': 'application/json; charset=utf-8'},
    withCredentials: true
  })
  
  // request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// response拦截器
service.interceptors.response.use(
    response => {
        // 直接返回Response
        return response.data
    },
    error => {
        // for debug
        console.log(error)
        return Promise.reject(error)
    }
)

export default function (method, url, data) { 
    method = method.toLocaleLowerCase() 
    if (method === 'post') {
        return service.post(url, data) 
    } else if (method === 'get') {
        return service.get(url, {params: data})
    } else if (method === 'delete') {
        return service.delete(url, {params: data})
    }
}
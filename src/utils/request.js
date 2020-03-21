import axios from 'axios'
import { Toast } from 'antd-mobile'
export let baseURL = 'http://157.122.54.189:9060'
axios.defaults.baseURL = baseURL
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    Toast.loading('加载中...', 0)
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    Toast.hide()
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)
export default axios

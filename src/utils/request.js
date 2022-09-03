// 基于axios封装网络请求
// 每个人程序员都不一样，封装的地方和名字都不一样，但思想相同
import theAxios from 'axios'
const axios = theAxios.create({
  baseURL: 'http://toutiao.itheima.net', // 基地址
  timeout: 20000 // 20秒超时时间(请求20秒无响应直接判定超时)
})

export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })
}

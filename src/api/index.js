// 统一封装请求接口 ，方便以后统一管理
// 逻辑页面导入这个接口方法，就能发起请求
import request from '@/utils/request.js'

// 登录接口
// axios 内部，会把参数对象转成json字符串格式发给后台
// axios 内部，会自动携带请求参数(headers)
// Content-Type:'application/json' 帮你添加好
export const loginAPI = ({ mobile, code }) => request({
  url: '/v1_0/authorizations',
  method: 'POST',
  data: {
    mobile,
    code
  }
})

// 获取所有频道
export const getAllChannelsAPI = () => request({
  url: '/v1_0/channels',
  method: 'GET'
})

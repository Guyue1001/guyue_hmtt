// 此文件 封装3个方法 专门用来操作token的
// 封装代码，目的代码分层，以后方便修改和管理
// 设置
const key = 'geek-itheima'
export const setToken = (token) => {
  localStorage.setItem(key, token)
}

// 获取
export const getToken = () => localStorage.getItem(key)

// 删除
export const removeToken = () => {
  localStorage.removeItem(key)
}

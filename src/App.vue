<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api'
// 使用 try + catch 来捕获await同步代码的错误
export default {
  async created () {
    try {
      // 获取所有列表
      const res = await getAllChannelsAPI()
      console.log(res)
    } catch (err) {
      // err参数拿到的就是错误对象
      // 给用户来个弹窗提示，程序错误
      // console.dir() 详细打印
      // console.dir(err)
    }
  }
}
</script>

<style lang="less" scoped>

</style>

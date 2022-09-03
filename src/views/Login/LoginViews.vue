<template>
<div>
  <van-nav-bar
  title="黑马头条 - 登录"
  />
  <!-- van-from 整体表单组件
    @submit ->自定义事件(提交事件)
  -->
  <van-form @submit="onSubmit">
  <!-- van-field 输入框(表单项)
    v-model 数据绑定
    表单整体提交时，默认手机一个提交对象
    往后台发送的参数名就是name属性
    {"用户名":'页面值'}
    :属性名 = "表达式"
    属性名 = "字符串"
   -->
  <van-field
    v-model="user.mobile"
    name="mobile"
    label="手机号"
    placeholder="请输入11位手机号"
    :rules="[{ required: true, message: '请填写手机号', pattern: /^1[3-9]\d{9}$/ }]"
  />
  <van-field
    v-model="user.code"
    type="password"
    name="code"
    label="密码"
    placeholder="请输入6位密码"
    :rules="[{ required: true, message: '请填写密码', pattern: /^\d{6}$/ }]"
  />
  <div style="margin: 16px;">
    <!-- round 表示是否为原型，
          （1）、没有表示默认为true(布尔值)
          （2）:round="true"
         block 表示块级元素
         type 表示类型
           primary 绿色主要按钮
           info 蓝色信息按钮
           default 默认按钮
           warning 红色警告按钮
           danger 橙色危险按钮
         native-type 代表原生button属性的type属性
           代表这个van-button组件渲染的原生button标签type
           时submit提交整个表单功能的按钮

     -->
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>

</div>
</template>

<script>
import { loginAPI } from '@/api'
export default {
  name: 'LoginViews',
  data () {
    return {
      user: {
        mobile: '18120464651', // 手机号
        code: '246810' // 密码 246810
      }
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await loginAPI({
        mobile: this.user.mobile,
        code: this.user.code
        // ...this.suer
      })
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
/*
组件库样式修改：
1、找到类名，自己写css覆盖掉
2、看文档，是否支持自定义样式
*/
// .van-nav-bar{
//   background: #007bff;
// }

/*
此选择器名字是van-nav-bar组件内标签,scoped匹配不到
scped尝试把此选择器后属性选择器匹配到当前页面标签
使用了 lang=less 当前style标签内是less语法
用 /deep/ 就不会被vscode标记红线
/deep/ 会把属性选择器添加到前面 (用后代选择器的方式往里找匹配的类名)

*/

// /deep/ .van-nav-bar__title{
//   color: #fff;
// }
</style>

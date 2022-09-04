<template>
  <div>
    <div>
      <!-- 头部 -->
      <van-nav-bar fixed>
        <!-- postcss只能翻译style里面的css样式代码
        标签内行内样式它无法转换px转rem，所以只能手动转换
        html里面的font-seze: 37.5  所以用默认18 / 37.5 = 0.48rem
        -->
        <template v-slot:left>
          <img class="login" src="@/assets/toutiao_logo.png" alt="">
        </template>
        <template #right>
          <van-icon color="#fff" name="search" size="0.48rem" />
        </template>
      </van-nav-bar>
      <!-- 频道导航 -->
      <div class="main">
        <!--
          van-tabs 一行容器
          van-tab 每个tab栏
          v-model 关联的激活项的下标(双向绑定)
          tab栏+内容
         -->
        <van-tabs
          v-model="active"
          sticky
          offset-top="1.2267rem"
        >
        <van-tab
          :title="obj.name"
          v-for="obj in userChannelList"
          :key="obj.id"
        >
        {{ obj.name }}
        </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserChannelsAPI } from '@/api'
export default {
  name: 'HomeViews',
  data () {
    return {
      active: 0, // tab导航-激活序列
      userChannelList: [] // 用户选择频道列表
    }
  },
  methods: {
  },
  async created () {
    const res = await getUserChannelsAPI()
    this.userChannelList = res.data.data.channels
  }
}
</script>

<style scoped >
.login{
  widows: 100px;
  height: 30px;
}
.main {
margin-top: 46px;
/* 底部在LayoutViews组件给二级路由挂载点容器上给了padding-bootm */
}
.van-nav-bar{
z-index: 2;
}
</style>

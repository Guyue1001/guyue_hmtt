<template>
  <div>
    <div>
      <!-- 头部 -->
      <van-nav-bar left-text="返回" left-arrow>
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
      <div>
        <!--
          van-tabs 一行容器
          van-tab 每个tab栏
          v-model 关联的激活项的下标(双向绑定)
         -->
        <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeViews',
  data () {
    return {
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.login{
  widows: 100px;
  height: 30px;
}
</style>

<template>
  <div>
    <div class="home_container">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>

    <!-- 底部导航 -->
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item
          icon="home-o"
          to="/layout/home"
          >首页
        </van-tabbar-item>
        <van-tabbar-item
          icon="setting-o"
          to="/layout/user"
          >我的
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutViews',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
/* 内容底部内边距(把内容往上挤压，防止内部被底部导航挡住) */
.home_container{
  padding-bottom: 50px;
}
/*底部导航栏边框 */
.van-tabbar{
  border-top: 1px solid #f8f8f8;
}
</style>

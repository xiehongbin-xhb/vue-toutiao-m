<template>
  <div class="home-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
    >
      <van-button
        class="search_btn"
        slot="title"
        icon='search'
        type="info"
        round
        size="small"
      >搜索</van-button>
    </van-nav-bar>
    <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab title="标签 1" name="a">内容 1</van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
      <van-tab title="标签 4" name="d">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0
    }
  },
  methods: {},
  computed: {},
  props: {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
  .home-container {
    /deep/ .van-nav-bar__title {
      max-width: unset;
    }
    .search_btn {
      width: 277px;
      height: 32px;
      background-color: #5babfb;
      border:none;
      .van-icon-search::before {
        font-size: 18px;
      }
      .van-button__text {
        font-size: 14px;
      }

    }
  }

</style>

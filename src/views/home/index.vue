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
    <!-- 标签页组件就有一个功能，只有第一次查看标签页的时候才会渲染里面的内容 -->
    <van-tabs v-model="active">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key= "channel.id"
      >
        <article-list :channel = channel />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getUserChannel } from '@/api/user'
import ArticleList from './components/article-list'
export default {
  name: 'home',
  components: { ArticleList },
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  methods: {
    async loadChannels () {
      const { data } = await getUserChannel();
      console.log('data', data);
      this.channels = data.data.channels;
    }
  },
  computed: {},
  props: {},
  watch: {},
  created () {
    this.loadChannels();
  },
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

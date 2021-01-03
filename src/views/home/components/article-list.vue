<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isRefreshLoading"
      :success-text="refreshSuccessText"
      :success-duration = "1500"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="(article, index) in articles" :key="index" :title="article.title" /> -->
        <article-item
          v-for="(article, index) in articles"
          :key="index"
          :article="article" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getArticles } from '@/api/article';
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      finished: false,
      articles: [],
      timeStamp: null,
      // 下拉刷新的loading
      isRefreshLoading: false,
      // 下拉刷新成功提示文本
      refreshSuccessText: ''
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道ID
        // 类似于页码，请求最新数据，使用当前时间戳，请求下一页时间戳，下一页数据使用上一次返回数据中的时间戳
        timeStamp: this.timeStamp || Date.now(), // 时间戳 请求当前新的推荐数据，传递当前的时间戳，请求历史推荐数据，传历史时间戳
        with_top: 1 // 是否包含置顶文章,进入页面第一次请求时要包含置顶文章， 1包含 0 不包含
      });
      const { results } = data.data;
      this.articles.push(...results);
      // // 加载状态结束
      this.loading = false;

      // // 数据全部加载完成
      // 测试环境下 只加载40条数据
      if (this.articles.length >= 40) {
        this.finished = true;
      }
      // 正式环境下的判断条件
      // if (results.length) {
      //   this.timeStamp = data.data.pre_timestamp;
      // } else {
      //   this.finished = true;
      // }
    },
    async onRefresh () {
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1,
        // 这个参数是自定义的，用来标识下拉刷新的操作，方便数据模拟时增加数据
        // 正式环境下不需要传递
        isRefresh: true
      });
      const { results } = data.data;
      this.articles.unshift(...results);
      this.isRefreshLoading = false;
      this.refreshSuccessText = `更新了${results.length}条数据`;
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
  .article-list {
    position: fixed;
    left :0;
    right: 0;
    bottom: 50px;
    top: 90px;
    // 注意这个写法
    overflow-y: auto;
  }
</style>

<template>
  <div class="article-containner">
     <van-nav-bar
      class="app-nav-bar"
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <h1 class="title">{{article.title}}</h1>
    <van-cell center class="user-info">
      <div slot="title" class="name">{{article.aut_name}}</div>
      <van-image
        class="avator"
        slot="icon"
        round
        center
        fit="cover"
        :src="article.aut_photo"
      />
      <div slot="label" class="pubdate">{{article.pubdate | relativeTime}}</div>
      <van-button
        :icon="article.is_followed ? '' : 'plus'"
        class="follow-btn"
        round
        size="small"
        :type="article.is_followed ? 'default' : 'info'"
      >{{ article.is_followed ? '已关注' : '关注'}}</van-button>
    </van-cell>
    <div class="markdown-body" v-html="article.content">
      <!-- 正式环境下显示的就是一些富文本标签 -->
    </div>
  </div>

</template>

<script>
import './github-markdown.css'
import { getArticleContent } from '@/api/article'
export default {
  name: 'Article',
  data () {
    return {
      article: {} // 文章数据
    }
  },
  props: {
    articleId: {
      type: [String, Number, Object],
      required: true
    }
  },
  created () {
    this.loadArticleContent();
  },
  methods: {
    async loadArticleContent () {
      const res = await getArticleContent({
        articleId: this.articleId
      });
      console.log('data', res);
      this.article = res.data.data.data;
      // this.article = data.data;
      console.log('this.article', this.article.title);
    }
  }
}
</script>

<style lang="less" scoped>
.article-containner {
  .title {
    font-size: 20px;
    color:#3a3a3a;
    padding: 14px;
    background-color: #fff;
    margin: 0;
  }
  .avator {
    width: 35px;
    height: 35px;
    padding-right: 8px;
  }
  .user-info {
    font-size: 12px;
    color:#333;
  }
  .pubdate {
    font-size: 12px;
    color:#b4b4b4;
  }
  .follow-btn {
    width: 85px;
    height: 29px;
  }
  .markdown-body {
    padding: 14px;
    background-color: #fff;
  }
  ul {
    list-style: unset;
  }
}
</style>

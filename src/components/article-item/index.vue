<template>
  <van-cell
    class="article-item"
    :to="{ name:'article', params:{ articleId: article.art_id}}">
    <!-- 文章标题 -->
    <div slot="title" class="title van-multi-ellipsis--l3">{{article.title}}</div>
    <!-- 底部标签 -->
    <div slot="label">
      <div class="cover-wrap" v-if="article.cover.type == 3">
        <div class="cover-wrap-item"  v-for="(img, index) in article.cover.images" :key = "index">
          <van-image
            class="cover-item"
            fit="cover"
            :src="img"
          />
        </div>
      </div>
      <div class="label-wrap">
        <!-- <span>{{article.aut_name}}</span> -->
        <span>{{article.comm_count}}评论</span>
        <span>{{article.pubdate | relativeTime}}</span>
      </div>

    </div>
    <!-- 封面图 -->
    <!-- 封面图有3种情况 0 没有封面  1个封面 3个封面 -->
    <van-image
      class="right-cover"
      v-if="article.cover.type == 1"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>
<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.article-item {
  .title {
    font-size: 16px;
    color:#3a3a3a;
  }
  /deep/ .van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    margin-left: 10px;
  }
  .right-cover {
    width: 116px;
    height: 73px;
  }
  .cover-wrap {
    display: flex;
    flex-wrap: nowrap;
    padding: 15px 0;
    .cover-wrap-item {
      flex: 1;
      &:not(:last-child) {
          padding-right: 4px;
      }
      .cover-item {
        width: 100%;
        height: 73px;

      }
    }
  }
  .label-wrap {
    font-size: 11px;
    color:'#b4b4b4'
  }
  .label-wrap span {
    margin-right: 12px;
  }
}
</style>

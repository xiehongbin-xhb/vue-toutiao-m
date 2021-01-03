<template>
  <van-cell class="article-item">
    <!-- 文章标题 -->
    <div slot="title">{{article.title}}</div>
    <!-- 底部标签 -->
    <div slot="label">
      <div class="cover-wrap">
        <div class="cover-wrap-item" v-if="article.cover.type == 3">
          <van-image
            width="114"
            height="73"
            :src="img"
            v-for="(img, index) in article.cover.images"
            :key = "index"
          />
        </div>
      </div>
      <div class="label-wrap">
        <span>{{article.aut_name}}</span>
        <span>{{article.comm_count}}评论</span>
        <span>{{article.pubdate}}</span>
      </div>

    </div>
    <!-- 封面图 -->
    <!-- 封面图有3种情况 0 没有封面  1个封面 3个封面 -->
    <van-image
      v-if="article.cover.type == 1"
      width="116"
      height="73"
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

</style>

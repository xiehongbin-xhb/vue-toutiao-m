<template>
  <div class="comment-container">
     <van-cell title="全部评论"></van-cell>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- <van-cell v-for="(item, index) in list" :key="index" :title="item.content" /> -->
      <comment-item
        v-for="(comment, index) in list"
        :key="index"
        :title="comment.content"
        :comment="comment"
      />
    </van-list>
  </div>
</template>

<script>
import { getComments } from '@/api/article'
import CommentItem from './comment-item'
export default {
  name: 'CommentList',
  components: {
    CommentItem
  },
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页数据的页码
      limit: 10 // 每页大小
    }
  },
  methods: {
    async onLoad () {
      console.log('onLoad', getComments);
      console.log(this.source);
      const { data } = await getComments({
        type: 'a', // 对文章的评论传a 对评论的回复传c
        source: this.source, // 文章评论，或者评论id
        offset: this.offset, // 页码
        limit: this.limit // 每页大小
      });
      const { results } = data.data;
      this.list.push(...results);
      this.loading = false;
      // 正式环境下代码
      // if(res.results.length) {
      //   this.offset = data.data.last_id;
      // }else {
      //   this.finished = true;
      // }
      if (this.list.length >= 10) {
        this.finished = true;
      }
    }
  }
}
</script>

<style>

</style>

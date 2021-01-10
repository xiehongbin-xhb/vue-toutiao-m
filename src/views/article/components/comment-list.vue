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
        @reply-click="$emit('reply-click',$event)"
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
    },
    type: {
      type: String,
      default: 'a'
    },
    list: {
      type: Array,
      // 数组和对象的默认值必须通过函数返回
      default: () => []
    }
  },
  data () {
    return {
      // list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页数据的页码
      limit: 10 // 每页大小
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getComments({
        type: this.type, // 对文章的评论传a 对评论的回复传c
        source: this.source.toString(), // 文章评论，或者评论id
        offset: this.offset, // 页码
        limit: this.limit // 每页大小
      });
      this.$emit('update-total-count', data.data.total_count);
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

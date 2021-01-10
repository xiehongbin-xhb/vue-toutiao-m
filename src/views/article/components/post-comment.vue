<template>
  <div class="post-comment">
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
    <van-button
      size="mini"
      @click="onPost"
      :disabled="!message"
    >发布</van-button>
  </div>
</template>

<script>
import { addComments } from '@/api/article'
export default {
  name: 'PostComment',
  props: {
    target: {
      type: [Number, String, Object],
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      default: null
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async onPost () {
      this.$toast.loading({
        message: '发布中',
        forbidClick: true
      });
      const { data } = await addComments({
        content: this.message,
        art_id: this.articleId === null ? null : this.articleId.toString(), // 对评论内容发表回复时，需要传递次参数，表明所属文章id，对文章进行评论时，不传此参数
        target: this.target.toString() // 评论的目标id 评论文章则传文章id 对评论则传评论id
      });
      // 关闭弹出层
      this.$emit('postSuccess', data.data.data.new_obj);
      this.$toast.success('发布成功');
      // 清空文本框
      this.message = '';
    }
  }
}
</script>

<style lang="less" scoped>
.post-comment {
  display: flex;
  align-items: center;
  padding: 14px;
}
</style>

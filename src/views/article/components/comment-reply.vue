<template>
  <div class="comment-reply">
    <!-- 头部信息 -->
    <van-nav-bar :title="`${comment.reply_count}条回复`" >
      <van-icon slot="left" name="cross" @click="$emit('close')"></van-icon>
    </van-nav-bar>
    <!-- 当前评论项 -->
    <comment-item  :comment="comment"/>
    <!-- 展示全部回复列表 -->
    <van-cell title="所有回复"></van-cell>
    <comment-list
      :list="commentList"
      :source="comment.com_id"
      type="c"
    />
    <!-- 发布按钮 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type='default'
        round
        size="small"
        @click="isPostShow=true"
      >写评论</van-button>
    </div>
    <!-- 评论弹出层 -->
    <van-popup v-model="isPostShow" position="bottom">
      <post-comment
      :target="comment.com_id"
      :articleId="articleId"
      @postSuccess="onPostSuccess"
      ></post-comment>
    </van-popup>
  </div>
</template>

<script>
import CommentList from './comment-list'
import CommentItem from './comment-item'
import PostComment from './post-comment'
export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    CommentList,
    PostComment
  },
  props: {
    comment: {
      type: Object,
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      isPostShow: false,
      commentList: []
    }
  },
  methods: {
    onPostSuccess (comment) {
      // 将发布成功的的评论放到评论列表的顶部
      this.commentList.unshift(comment);
      // 更新评论的数量
      this.comment.reply_count++;
      // 关闭发布回复的弹出层
      this.isPostShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
.article-bottom {
    background-color: #fff;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .comment-btn {
      width: 200px;
    }
  }
</style>

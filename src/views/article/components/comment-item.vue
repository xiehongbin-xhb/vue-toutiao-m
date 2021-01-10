<template>
  <van-cell class="comment-item" >
    <van-image
      round
      class="avator"
      :src="comment.aut_photo"
      fit="cover"
      slot="icon"
    />
    <div slot="title">
      <div class="title-wrap" @click="onCommentLike" >
        <div class="name">{{comment.aut_name}}</div>
        <div class="like-wrap">
          <van-icon
            :name="comment.is_liking ? 'good-job' :'good-job-o'"
            :class="{ liked: comment.is_liking}"
            class="like-icon"
          />
          <span class="like-count">{{comment.like_count}}</span>
        </div>
      </div>
      <div class="content">{{comment.content}}</div>
      <div>
        <span class="pubdate">{{comment.pubdate | dateTime('MM:DD HH:mm')}}</span>
        <van-button
          class="reply-btn"
          round
          size="mini"
          @click="$emit('reply-click',comment)"
        >{{comment.reply_count}}回复</van-button>
      </div>
    </div>

  </van-cell>
</template>

<script>
import { addCommentLike, deleteCommentLike } from '@/api/article'
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onCommentLike () {
      console.log('this.comment.', this.comment);
      const commentId = this.comment.com_id.toString();
      console.log('commentId', this.comment.is_liking);
      // 判断是否点赞
      if (this.comment.is_liking) {
        await deleteCommentLike(commentId);
        this.comment.like_count--;
      } else {
        await addCommentLike(commentId);
        this.comment.like_count++;
      }
      this.comment.is_liking = !this.comment.is_liking;
    }
  }
}
</script>

<style lang="less" scoped>
.comment-item {
  .avator {
    width: 36px;
    height: 36px;
    margin-right: 13px;
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 14px;
      color:'#406599'
    }
  }

  .content {
    font-size: 16px;
    color:#222222;
  }
  .pubdate {
    font-size: 10px;
    margin-right: 10px;
  }
  .like-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    .like-count {
      margin-left: 3px;
    };
    .liked {
      color: orange;
    }
  }
}
</style>

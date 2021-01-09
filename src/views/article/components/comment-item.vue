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
      <div class="title-wrap">
        <div class="name">{{comment.aut_name}}</div>
        <div class="like-wrap">
          <van-icon name='good-job-o' class="like-icon" />
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
        >{{comment.reply_count}}回复</van-button>
      </div>
    </div>

  </van-cell>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true
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
    }
  }
}
</style>

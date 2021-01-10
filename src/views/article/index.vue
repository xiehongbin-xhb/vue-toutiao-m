<template>
  <div class="article-containner">
     <van-nav-bar
      class="app-nav-bar"
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="article-wrap">
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
          @click="onFollow"
          :loading='isFollowLoading'
        >{{ article.is_followed ? '已关注' : '关注'}}</van-button>
      </van-cell>
      <div class="markdown-body" v-html="article.content" ref="articleContent">
        <!-- 正式环境下显示的就是一些富文本标签 -->
        <!-- 富文本标签就是带有 -->
      </div>
      <!-- 文章评论列表 -->
      <comment-list
        :list="commentList"
        :source="articleId"
      />
    </div>
    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type='default'
        round
        size="small"
        @click="isCommentPopup = true"
      >写评论</van-button>
      <van-icon name="comment-o" info="123" color="#777" />
      <van-icon
        :name="article.is_collected ? 'star' :'star-o'"
        :color="article.is_collected ? 'orange' :'#777'"
        @click="onCollect"
      />
      <van-icon name="good-job-o"  color="#777" />
      <van-icon name="share"  color="#777" />
    </div>
    <!-- 发布评论弹出层 -->
    <van-popup
      v-model="isCommentPopup"
      position="bottom"
    >
      <post-comment :target="articleId"  @postSuccess="onPostSuccess" ></post-comment>
    </van-popup>
  </div>

</template>

<script>
import './github-markdown.css'
import { getArticleContent } from '@/api/article'
import { addFollower, deleteFollower, addCollected, deleteCollected } from '@/api/user'
import { ImagePreview } from 'vant'
import CommentList from './components/comment-list'
import PostComment from './components/post-comment'
export default {
  name: 'Article',
  components: {
    CommentList,
    PostComment
  },
  data () {
    return {
      article: {}, // 文章数据
      isFollowLoading: false, // 关注用户按钮 状态
      isCommentPopup: false, // 写评论弹出层
      commentList: [] // 文章评论列表
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
      this.handlePreviewImage();
    },
    handlePreviewImage () {
      // 获取文章内容DOM容器，获取所有的img标签，给img注册点击事件
      // 在事件处理函数中调用ImagePreView
      const articleDOM = this.$refs.articleContent;
      // 数据改变触发视图更新， 不是立即的,所以直接获取返回空数组
      // 如果需要在修改数据之后马上操作该数据影响的
      const imgPaths = [];
      this.$nextTick(() => {
        const imgs = articleDOM.querySelectorAll('img');
        imgs.forEach((img, index) => {
          imgPaths.push(img.src);
          img.onclick = function () {
            ImagePreview({
              images: imgPaths,
              startPosition: index
            });
          }
        })
      })
    },
    async onFollow () {
      this.isFollowLoading = true;
      // 已关注，取消关注
      if (this.article.is_followed) {
        await deleteFollower(this.article.aut_id);
      } else {
        // 没有关注，则取消关注
        await addFollower(this.article.aut_id);
      }
      // 更新视图
      this.article.is_followed = !this.article.is_followed;
      this.isFollowLoading = false;
    },
    async onCollect () {
      this.$toast.loading({
        message: '操作中',
        forbidClick: true // 禁止背景点击
      })
      // 已关注，取消关注
      if (this.article.is_collected) {
        await deleteCollected(this.article.art_id);
      } else {
        // 没有关注，则取消关注
        await addCollected(this.article.art_id);
      }
      // 更新视图
      this.article.is_collected = !this.article.is_collected;
      this.$toast.success(`${this.article.is_collected ? '' : '取消'}收藏成功`);
    },
    onPostSuccess (comment) {
      // 发布成功的评论数据放到评论列表顶部
      console.log('comment', comment);
      this.commentList.unshift(comment);
      // 关闭弹出层
      this.isCommentPopup = false;
    }
  }
}
</script>

<style lang="less" scoped>
.article-containner {
  .article-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 50px;
    overflow-y: auto;
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
      width: 150px;
    }
  }

}
</style>

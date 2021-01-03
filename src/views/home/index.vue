<template>
  <div class="home-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
    >
      <van-button
        class="search_btn"
        slot="title"
        icon='search'
        type="info"
        round
        size="small"
      >搜索</van-button>
    </van-nav-bar>
    <!-- 文章频道列表 -->
    <!-- 标签页组件就有一个功能，只有第一次查看标签页的时候才会渲染里面的内容 -->
    <van-tabs v-model="active" class="channel-tabs">
      <van-tab
        class="channel-tabs-item"
        :title="channel.name"
        v-for="channel in channels"
        :key= "channel.id"
      >
        <article-list :channel = channel />
      </van-tab>
      <div slot="nav-right" class="wap-placeholder"></div>
      <div slot="nav-right" >
        <van-icon  name="wap-nav" @click="isChannelEditShow=true" class="wap-nav-wrap"/>
      </div>
    </van-tabs>
    <van-popup
      v-model="isChannelEditShow"
      closeable
      get-container="body"
      close-icon-position="top-left"
      position="bottom"
      class="channel-edit-popup"
    >
    <!-- $event 表示事件接受的参数 -->
      <channel-edit
        @closePopup="isChannelEditShow = false"
        @update-active="active = $event"
        :activeNum = "active"
        :user-channels = "channels"
      />
    </van-popup>
  </div>
</template>
<script>
import { getUserChannel } from '@/api/user'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit'
import { mapState } from 'vuex'
import { getItem } from '@/util/storage'
export default {
  name: 'home',
  components: { ArticleList, ChannelEdit },
  data () {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: false // 控制频道编辑弹出层
    }
  },
  methods: {
    async loadChannels () {
      let channelData = [];
      if (this.user) {
        // 登录了
        const { data } = await getUserChannel();
        channelData = data.data.channels;
      } else {
        // 未登录
        // 判断是否有本地缓存，有就加载，没有就获取推荐的频道
        const localChannel = getItem('user-channels');
        if (localChannel) {
          channelData = localChannel;
        } else {
          // 没有登录，也没有本地数据，请求获取默认推荐的频道接口
          // const { data } = await getUserChannel(); 还是这个接口，如果是匿名用户则返回默认的频道接口数据
          // 这里测试的话 就写死
          channelData = [
            { id: 0, name: '推荐' },
            { id: 1, name: '前端' },
            { id: 2, name: '后端' }
          ]
        }
      }
      this.channels = channelData;
    }
    // onUpdateActive (index) {
    //   this.active = index;
    // }
  },
  computed: {
    ...mapState(['user'])
  },
  props: {},
  watch: {},
  created () {
    this.loadChannels();
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
  .home-container {
    /deep/ .van-nav-bar__title {
      max-width: unset;
    }
    .search_btn {
      width: 277px;
      height: 32px;
      background-color: #5babfb;
      border:none;
      .van-icon-search::before {
        font-size: 18px;
      }
      .van-button__text {
        font-size: 14px;
      }

    }
    .channel-tabs {
      /deep/ .van-tab{
        border-right: 1px solid #edeff3;
        border-bottom: 1px solid #edeff3;
      }
      /deep/ .van-tabs__line {
        width: 15px !important;
        height: 3px;
        background-color: #3296fa;
        margin-bottom: 4px;
      }
    }
    .wap-placeholder {
      width: 33px;
      flex-shrink: 0;
    }
    .wap-nav-wrap {
        position: fixed;
        right: 0;
        height: 43px;
        width: 33px;
        line-height: 43px;
        background-color: #fff;
        opacity: 0.9;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  .channel-edit-popup {
      height:100%;
    }

</style>

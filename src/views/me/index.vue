<template>
  <div class="my-container">
    <van-cell-group v-if="user" class="my_info">
      <van-cell
        class="base_info"
        title="单元格"
        value="内容"
        center
        :border='false'
      >
        <van-image
          class="avator"
          round
          fit="cover"
          slot="icon"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title" class="name">小智同学</div>
        <van-button
          class="update_btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid :border='false' class="data_info">
        <van-grid-item  text="头条" class="data_info_item">
          <span slot="icon" class="count">123</span>
        </van-grid-item>
        <van-grid-item  text="关注"  class="data_info_item">
          <span slot="icon" class="count">123</span>
        </van-grid-item>
        <van-grid-item  text="粉丝"  class="data_info_item">
          <span slot="icon" class="count">123</span>
        </van-grid-item>
        <van-grid-item  text="获赞"  class="data_info_item">
          <span slot="icon" class="count">123</span>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 未登录 -->
    <div v-else class='not-login'>
      <div @click="$router.push('/login')"><img class="mobile_img" src="./mobile.png" /></div>
      <div class="text">登录 / 注册 </div>
    </div>
    <van-grid :column-num="2" class="nav_grid md-4" icon-size='22.5' >
      <van-grid-item icon="star-o" text="收藏" class='nav_grid_item'  />
      <van-grid-item icon="browsing-history-o" text="历史"  class='nav_grid_item' />
    </van-grid>
    <van-cell title="消息通知" is-link to="" />
    <van-cell title="小智同学" is-link to="" class='md-4' />
    <van-cell
      v-if="user"
      @click="onLogout"
      title="退出登录"
      class='logout-cell'
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'me',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  created () {},
  mounted () {
    console.log('user', this.user);
  },
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          // 清除用户状态
          this.$store.commit('setUser', null);
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style lang="less" scoped>
.my-container {
  .my_info {
    background: url('./banner.png') no-repeat;
    background-size: cover;
    .base_info {
      background-color: unset;
      box-sizing: border-box;
      height: 115px;
      padding-top: 38px;
      padding-bottom: 11px;
      .avator {
        box-sizing: border-box;
        height: 66px;
        width: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name {
        color: #fff;
        font-size: 15px;
      }
      .update_btn {
        height: 23px;
        line-height: 23px;
        font-size: 10px;
        color:#666;
      }
      .data_info {
        .data_info_item {
          height: 65px;
        }
      }
    }
    // 这里为什么写在里面找不到?
    .count {
      font-size: 18px;
      color: #fff;
    }
    // 当要设置的样式和组件库的样式冲突时
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
    /deep/ .van-grid-item__text {
      color: #ffffff;
      font-size: 11px;
    }
  }
  .not-login {
    height: 180px;
    background: url('./banner.png') no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .mobile_img {
      width: 66px;
      height: 66px;
    }
    .text {
      margin-top:5px;
      color:#ffffff;
      font-size: 14px;
    }
  }
  .nav_grid {
    .nav_grid_item {
      height: 70px;
      /deep/ .van-icon-star-o::before {
        color:#eb5253;
      }
      /deep/ .van-icon-browsing-history-o {
        color: #ff9d1d;;
      }
    }

  }
  .logout-cell {
    text-align: center;
    color:#d86262;
  }

  .md-4 {
    margin-bottom: 4px;
  }
}
</style>

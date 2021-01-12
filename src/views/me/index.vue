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
          :src="imgSrc"
        />
        <div slot="title" class="name">{{currentUser.name ? currentUser.name : '-'}}</div>
        <van-button
          class="update_btn"
          size="small"
          round
          to="/user/profile"
        >编辑资料</van-button>
      </van-cell>
      <van-grid :border='false' class="data_info">
        <van-grid-item  text="头条" class="data_info_item">
          <span slot="icon" class="count">{{currentUser.art_count }}</span>
        </van-grid-item>
        <van-grid-item  text="关注"  class="data_info_item">
          <span slot="icon" class="count">{{currentUser.follow_count }}</span>
        </van-grid-item>
        <van-grid-item  text="粉丝"  class="data_info_item">
          <span slot="icon" class="count">{{currentUser.fans_count }}</span>
        </van-grid-item>
        <van-grid-item  text="获赞"  class="data_info_item">
          <span slot="icon" class="count">{{currentUser.like_count }}</span>
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
import { getCurrentUser } from '@/api/user'
export default {
  name: 'me',
  components: {},
  props: {},
  data () {
    return {
      // 当前用户信息
      currentUser: {}
    }
  },
  computed: {
    ...mapState(['user']),
    imgSrc () {
      return this.currentUser.photo ? this.currentUser.photo : require('./avator.jpg');
    }
  },
  created () {
    this.loadCurrentUser();
  },
  mounted () {
    console.log('user', this.currentUser);
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
    },
    async loadCurrentUser () {
      if (!this.user) return;
      const { data } = await getCurrentUser();
      console.log('data', data);
      this.currentUser = data.data;
    }
  }
}
</script>

<style lang="less" scoped>
// 添加scoped属性之后，这个组件内的样式不会影响其他属性
// 在有作用域的组件中 如何给子组件设置样式
// 默认只能作用到子组件的根节点 如HelloWorld组件 根节点是 class=hello 的div
// 如果是第三方的组件，就不知道根节点的类名，可以通过审查元素查看类名，或者给第三方组件手动设置类名
// 任何组件上的类名都会默认作用到根节点
// 如果要设置子组件的内部节点样式，使用/deep/ 操作符（深度作用操作符） 还可以使用 三个大于号 >>>
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

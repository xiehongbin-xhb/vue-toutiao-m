<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        clearable
        left-icon="shouji"
        icon-prefix="toutiao"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="yanzhengma"
        icon-prefix="toutiao"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" round class='send_btn'>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login_btn_wrap">
      <van-button
        class="login_btn"
        type="info"
        block
        @click="onLogin"
      >登录</van-button>
    </div>

  </div>

  <!-- 登录表单 -->

</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onLogin () {
      // 1.找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录
      // 4. 处理响应结果
      console.log('this.user', this.user)
      const res = await login(this.user)
      console.log('res', res)
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  .send_btn {
    width: 80px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color:#666;
    }
  }
  .login_btn_wrap {
  padding: 26px 16px;
  .login_btn {
    background-color: #6db4fb;
    border:none;
    .van-button__text {
      font-size: 15px;
    }
  }
}
}

</style>

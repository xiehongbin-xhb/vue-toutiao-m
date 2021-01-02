<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 当表单提交时，会触发submit事件,只有表单通过验证之后才会触发onLogin事件-->
    <van-form @submit="onLogin"
      :show-error = "false"
      :show-error-message = "false"
      @failed = "onFailed"
      validate-first
    >
      <van-field
        v-model="user.mobile"
        clearable
        left-icon="shouji"
        icon-prefix="toutiao"
        name="手机号"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
        />
      <van-field
        v-model="user.code"
        clearable
        left-icon="yanzhengma"
        icon-prefix="toutiao"
        name="验证码"
        placeholder="请输入验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" round class='send_btn'>发送验证码</van-button>
        </template>
      </van-field>
      <div class="login_btn_wrap">
        <van-button
          class="login_btn"
          type="info"
          block
        >登录</van-button>
      </div>
    </van-form>
  </div>

  <!-- 登录表单 -->

</template>
<script>
import { login } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    async onLogin () {
      // 1.找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录
      // 4. 处理响应结果
      Toast.loading({
        message: '登录中...',
        forbidClick: true, // 是否禁止背景点击
        duration: 0
      });
      const res = await login(this.user);
      const { data, status } = res;
      try {
        if (status === 200) {
          Toast.success(data.data.message);
        } else {
          Toast.fail(data.data.message);
        }
      } catch (err) {
        Toast.fail('登陆失败');
      }
    },
    onFailed (err) {
      if (err.errors[0]) {
        this.$toast({
          message: err.errors[0].message,
          position: 'top'
        });
      }
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

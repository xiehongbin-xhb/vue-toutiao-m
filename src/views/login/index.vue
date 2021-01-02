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
      ref="loginForm"
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
        name="mobile"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
        />
      <van-field
        v-model="user.code"
        clearable
        left-icon="yanzhengma"
        icon-prefix="toutiao"
        name="code"
        placeholder="请输入验证码"
        :rules="formRules.code"
      >
        <template #button>
          <!-- @click.prevent阻止默认行为 -->
          <van-count-down v-if="isCountDownShow" :time="1000 * 60" format="ss s" @finish="isCountDownShow = false"/>
          <van-button :loading="isSendSmdLoding" center v-else size="mini" round class='send_btn' @click.prevent="onSendSms">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login_btn_wrap">
        <van-button
          center
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
import { login, sendSms } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15606950280',
        code: '123456'
      },
      isSendSmdLoding: false,
      isCountDownShow: false,
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
          const { data } = res;
          // 将接口返回的用户信息保存到vuex中
          this.$store.commit('setUser', data.data);
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
    },
    async onSendSms () {
      // 校验手机号，如果验证通过才发生验证码
      // 1. 禁止按钮默认行为（处于表单）
      try {
        await this.$refs.loginForm.validate('mobile');
        // 加载中状态
        this.isSendSmdLoding = true;
        await sendSms(this.user.mobile);
        // 显示倒计时
        this.isCountDownShow = true;
      } catch (error) {
        let message = '';
        if (error && error.response && error.response.status === 429) {
          message = '发送太频繁了，请稍候重试';
        } else if (error.name === 'mobile') {
          message = error.message;
        } else {
          message = '未知错误'
        }
        this.$toast({
          message,
          position: 'top'
        });
      }
      // 无论发送成功与否都应该恢复按钮状态
      this.isSendSmdLoding = false;
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

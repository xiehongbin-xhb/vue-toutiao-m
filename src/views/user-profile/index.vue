<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell title="头像" center is-link>
       <van-image
        fit="cover"
        width="30"
        height="30"
        :src="user.photo"
        round
       />
    </van-cell>
    <van-cell
      title="昵称"
      is-link
      :value="user.name"
      @click="isEditNamePopupShow=true"
    ></van-cell>
    <van-cell title="性别" is-link :value="user.gender ? '男' : '女'"></van-cell>
    <van-cell title="生日" is-link :value="user.birthday"></van-cell>
    <!-- 修改昵称弹出层 -->
    <van-popup
      v-model="isEditNamePopupShow"
      position="bottom"
      :style="{ height: '100%'}"
    >
      <update-name
        :name="user.name"
        @close="isEditNamePopupShow=false"
        @update-name="user.name=$event"
      />
    </van-popup>
  </div>
</template>

<script>
import UpdateName from './components/update-name'
import { getUserProfile } from '@/api/user'
export default {
  name: 'UserProfile',
  components: {
    UpdateName
  },
  data () {
    return {
      isEditNamePopupShow: false,
      user: {} // 用户数据
    }
  },
  created () {
    this.loaderUserProfile()
  },
  methods: {
    async loaderUserProfile () {
      const { data } = await getUserProfile();
      this.user = data.data;
    }
  }
}
</script>

<style lang="less" scoped>
.van-popup {
  background-color: #f5f7f9;
}
</style>

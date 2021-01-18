<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <input
      type="file"
      hidden
      ref="file"
      accept="image/*"
      @change="onFileChange"
    />
    <van-cell title="头像" center is-link @click="$refs.file.click()">
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
    <van-cell
      title="性别"
      is-link
      :value="user.gender ? '男' : '女'"
      @click="isEditGenderPopupShow=true"
    ></van-cell>
    <van-cell title="生日"
      is-link
      :value="user.birthday"
      @click="isEditBirthdayPopupShow=true"
    ></van-cell>
    <!-- 修改昵称弹出层 -->
    <van-popup
      v-model="isEditNamePopupShow"
      position="bottom"
      :style="{ height: '100%'}"
    >
    <!--
        这里的name 组件中需要使用 name属性 也可以监听name属性的修改
        这种情况下 可以使用v-model 来简写
        v-model="user.name"
        相当于
        :value="user.name" // 默认会给子组件注入value这个属性
        @input="user.name=$event" // 默认监听input事件
        本质上还是父子组件通信，只是父组件上简写了
     -->
      <!-- <update-name
        :name="user.name"
        @close="isEditNamePopupShow=false"
        @update-name="user.name=$event"
      /> -->
      <!--
        v-model 在组件上只能使用一次
        如果有多个数据需要保持同步 使用.sync修饰符
        :gender.sync ="user.gender"
        相当于给子组件传递了一个gender属性
        还监听了一个 @update:gender=""的事件
      -->
      <update-name
        v-if="isEditNamePopupShow"
        v-model="user.name"
        @close="isEditNamePopupShow=false"
      />
    </van-popup>

    <!-- 修改性别弹出层 -->
    <van-popup
      v-model="isEditGenderPopupShow"
      position="bottom"
    >
      <update-gender
        v-model="user.gender"
        @close="isEditGenderPopupShow= false"
      />
    </van-popup>
    <!-- 修改生日弹出层 -->
    <van-popup
      v-model="isEditBirthdayPopupShow"
      position="bottom"
    >
      <update-birthday
        v-if="isEditBirthdayPopupShow"
        v-model="user.birthday"
        @close="isEditBirthdayPopupShow=false"
      />
    </van-popup>
    <!-- 修改头像弹出层 -->
    <van-popup
      v-model="isEditPhotoPopupShow"
      position="bottom"
      style="height=100%"
    >
    <update-photo
      @close="isEditPhotoPopupShow=false"
      :previewImage="previewImage"
      @update-photo="user.photo=$event"
    />
    </van-popup>
  </div>
</template>

<script>
import UpdateName from './components/update-name'
import { getUserProfile } from '@/api/user'
import UpdateGender from './components/update-gender'
import UpdateBirthday from './components/update-birthday'
import UpdatePhoto from './components/update-photo.vue'
export default {
  name: 'UserProfile',
  components: {
    UpdateName,
    UpdateGender,
    UpdateBirthday,
    UpdatePhoto
  },
  data () {
    return {
      isEditNamePopupShow: false,
      isEditGenderPopupShow: false, // 编辑性别
      user: {}, // 用户数据
      isEditBirthdayPopupShow: false,
      isEditPhotoPopupShow: false,
      previewImage: null
    }
  },
  created () {
    this.loaderUserProfile()
  },
  methods: {
    async loaderUserProfile () {
      const { data } = await getUserProfile();
      this.user = data.data;
    },
    onFileChange () {
      console.log('change');
      // 展示弹出层
      this.isEditPhotoPopupShow = true;
      // 在弹出层里预览图片
      // const blob = window.URL.createObjectURL(this.$refs.file.files[0]);
      const file = this.$refs.file.files[0];
      this.previewImage = file;
      this.$refs.file.value = ''; // 清空file的值，为了解决相同文件时不触发change事件
    }
  }
}
</script>

<style lang="less" scoped>
.van-popup {
  background-color: #f5f7f9;
}
</style>

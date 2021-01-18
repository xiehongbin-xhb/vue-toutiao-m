<template>
  <div class="update-photo">
    <img :src="image" />
    <van-nav-bar
      class="toolbar"
      left-text="取消"
      right-text="确认"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
  </div>
</template>

<script>
import { updateUserPhoto } from '@/api/user'
export default {
  name: 'UpdatePhoto',
  props: {
    previewImage: {
      required: true
    }
  },
  data () {
    return {
      image: window.URL.createObjectURL(this.previewImage)
    }
  },
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      });
      // 如果要求content-type是mulitipart/form-data，一定要提交FormData数据对象，专门用于文件上传
      // 不能提交 { }
      console.log('onConfirm');
      const fd = new FormData();
      fd.append('photo', this.previewImage)
      await updateUserPhoto(fd);
      this.$toast.success('保存成功');
      // 更新父祖件中的头像
      this.$emit('update-photo', this.image);
      // 关闭弹出层
      this.$emit('close');
    }
  }
}
</script>

<style lang="less" scoped>
.update-photo {
  .toolbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>

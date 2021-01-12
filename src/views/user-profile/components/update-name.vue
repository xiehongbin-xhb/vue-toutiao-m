<template>
  <div class="update-name">
    <van-nav-bar
      title="修改昵称"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
    <!-- 输入框 -->
    <div class='name-field-wrap'>
      <van-field
        v-model="localName"
        rows="2"
        autofocus
        type="textarea"
        placeholder="请输入昵称"
        show-word-limit
        maxlength="50"
      />
    </div>

  </div>
</template>

<script>
import { updateUserProfile } from '@/api/user'
export default {
  name: 'UpdateName',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      localName: this.name
    }
  },
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      })
      // 请求提交更新昵称
      await updateUserProfile({
        name: this.localName
      });
      this.$toast.success('保存成功');
      // 更新成功 修改父组件的的name 关闭弹出层
      this.$emit('update-name', this.localName);
      this.$emit('close');
    }
  }
}
</script>

<style lang="less" scoped>
  .name-field-wrap {
    padding: 10px;
  }
</style>

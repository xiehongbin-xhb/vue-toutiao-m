<template>
  <div class="update-gender">
    <van-picker
      title="标题"
      show-toolbar
      :defaultIndex="defaultIndex"
      :columns="columns"
      @confirm="onConfirm"
      @change="onGenderChange"
      @cancel="$emit('close')"
    />
  </div>
</template>

<script>
import { updateUserProfile } from '@/api/user'
export default {
  name: 'UpdateGender',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      columns: ['男', '女'],
      defaultIndex: this.value
    }
  },
  methods: {
    onGenderChange (picker, value, index) {
      this.defaultIndex = index;
    },
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      })
      // 请求提交更新昵称
      await updateUserProfile({
        gender: this.defaultIndex
      });
      this.$toast.success('保存成功');
      // 更新成功 修改父组件的的name 关闭弹出层
      this.$emit('input', this.defaultIndex);
      this.$emit('close');
    }
  }
}
</script>

<style>

</style>

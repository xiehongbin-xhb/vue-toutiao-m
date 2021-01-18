<template>
  <div class="update-birthday">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="$emit('close')"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import { updateUserProfile } from '@/api/user'
export default {
  name: 'UpdateBirthday',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      minDate: new Date(1960, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(this.value) // 默认被选中的日期
    }
  },
  methods: {
    onGenderChange (picker, value, index) {
      this.localBirthday = index;
    },
    async onConfirm () {
      this.$toast.loading({
        message: '保存中',
        forbidClick: true
      })
      // 请求提交更新生日
      await updateUserProfile({
        birthday: `${this.currentDate.getFullYear()}-${this.currentDate.getMonth() + 1}-${this.currentDate.getDate()}`
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

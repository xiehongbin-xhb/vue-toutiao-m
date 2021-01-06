<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div v-if="isDeleteShow">
        <span @click="$emit('updateHistory', [])">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDeleteShow=false">完成</span>
      </div>
      <van-icon v-else name="delete" @click="isDeleteShow=true" />
    </van-cell>
    <van-cell
      :title="item"
      v-for="(item, index) in searchHistory"
      :key="index"
      @click="onDelete(item, index)"
    >
      <van-icon v-show="isDeleteShow" name="close"  />
    </van-cell>
  </div>
</template>

<script>
import { setItem } from '@/util/storage'
export default {
  name: 'SearchHistory',
  data () {
    return {
      isDeleteShow: false
    }
  },
  props: {
    searchHistory: {
      type: Array,
      required: true
    }
  },
  methods: {
    onDelete (item, index) {
      console.log('index', index);
      // 如果是删除状态
      if (this.isDeleteShow) {
        this.searchHistory.splice(index, 1);
        setItem('search-history', this.searchHistory);
        return
      }
      // 非删除状态 需要展示搜索结果
      this.$emit('clickToSearch', item);
    }
  },
  computed: {
  }
}
</script>

<style>

</style>

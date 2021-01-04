<template>
  <div class="search-suggestion-container">
    <van-cell
      v-for="(str, index) in suggestions"
      :key="index"
      :title="str"
      icon="search"
    />
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions: []
    }
  },
  watch: {
    // 监听数据变化
    searchText: {
      // 引入lodash 实现函数防抖
      handler: debounce(async function () {
        const { data } = await getSearchSuggestions(this.searchText);
        this.suggestions = data.data.options;
      }, 200),
      // async handler () {
      //   const { data } = await getSearchSuggestions(this.searchText);
      //   this.suggestions = data.data.options;
      // },
      immediate: true
    }
  }
}
</script>

<style>

</style>

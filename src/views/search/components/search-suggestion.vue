<template>
  <div class="search-suggestion-container">
    <van-cell
      v-for="(str, index) in suggestions"
      :key="index"
      icon="search"
      @click="$emit('clickToSearch', str)"
    >
      <div slot="title" v-html='highlight(str)'></div>
    </van-cell>
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
      immediate: true
    }
  },
  methods: {
    highlight (str) {
      const highlightText = `<span style="color: red">${this.searchText}</span>`
      // RegExp()  正则表达构造函数
      // 参数1 字符串 或者变量
      // 参数2 匹配模式
      const exp = new RegExp(this.searchText, 'gi');
      return str.replace(exp, highlightText);
    }
  }
}
</script>

<style>

</style>

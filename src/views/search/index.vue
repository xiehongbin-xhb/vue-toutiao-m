<template>
  <div class="search_container">
    <!-- 搜索栏 -->
    <!-- 在van-search组件外包裹一个form标签，并且action属性不为空，即可在 iOS 输入法中显示搜索按钮。 -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="$router.back()"
        @focus="isResultShow = false"
      />
    </form>
    <!-- 输入框没有任何内容时展示历史记录，有一个字符时展示的是联想记录，触发搜索的时候显示搜索结果 -->
    <!-- 搜索结果 -->
    <search-result
      v-if="isResultShow"
    />
    <!-- 联想建议 -->
    <search-suggestion
      v-else-if="searchText"
      :searchText="searchText"
    />
    <!-- 历史记录 -->
    <search-history v-else />

  </div>
</template>

<script>
import SearchSuggestion from './components/search-suggestion'
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
export default {
  name: 'SearchIndex',
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  data () {
    return {
      searchText: '',
      isResultShow: false
    }
  },
  props: {},
  methods: {
    // 回车时
    onSearch () {
      console.log('search');
      this.isResultShow = true;
    }
  }
}
</script>

<style>

</style>

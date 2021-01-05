<template>
  <div class="search_container">
    <!-- 搜索栏 -->
    <!-- 在van-search组件外包裹一个form标签，并且action属性不为空，即可在 iOS 输入法中显示搜索按钮。 -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(searchText)"
        @cancel="$router.back()"
        @focus="isResultShow = false"
      />
    </form>
    <!-- 输入框没有任何内容时展示历史记录，有一个字符时展示的是联想记录，触发搜索的时候显示搜索结果 -->
    <!-- 搜索结果 -->
    <search-result
      :searchText="searchText"
      v-if="isResultShow"
    />
    <!-- 联想建议 -->
    <search-suggestion
      v-else-if="searchText"
      :searchText="searchText"
      @clickToSearch="onSearch"
    />
    <!-- 历史记录 -->
    <search-history
      v-else
      :searchHistory="searchHistory"
    />

  </div>
</template>

<script>
import SearchSuggestion from './components/search-suggestion'
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
import { setItem, getItem } from '@/util/storage'
import { mapState } from 'vuex'
import { getSearchedHistory } from '@/api/search'
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
      isResultShow: false,
      // 首次没有数据
      searchHistory: []
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  created () {
    this.loaderHistory();
  },
  props: {},
  methods: {
    // 回车时
    onSearch (searchText) {
      console.log('search');
      // 记录搜索历史
      const index = this.searchHistory.indexOf(searchText);
      if (index !== -1) {
        // 移除重复项
        this.searchHistory.splice(index, 1);
      }
      // 把最新的搜索历史记录放到顶部
      this.searchHistory.unshift(searchText);
      // 数据持久化
      // 如果用户已登录，则把搜索历史记录存储到线上，并且这一步不需要调用接口，当调用搜索接口时，后端会自动存储
      // 如果没有登录，则存储数据到本地
      setItem('search-history', this.searchHistory);
      this.searchText = searchText;
      this.isResultShow = true;
    },
    // 手动合并线上历史记录以及本地历史记录
    async loaderHistory () {
      let localHistory = getItem('search-history') || [];
      if (this.user) {
        const { data } = await getSearchedHistory();
        localHistory = [...new Set([...localHistory, ...data.data.keywords])];
      }
      this.searchHistory = localHistory;
    }
  }
}
</script>

<style>

</style>

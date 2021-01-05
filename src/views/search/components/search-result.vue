<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in resultList" :key="index" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import { getSearchResults } from '@/api/search'
export default {
  name: 'SearchResult',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      resultList: [],
      loading: false,
      finished: false,
      page: 1,
      per_page: 10
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getSearchResults({
        page: this.page, // 页码
        per_page: this.per_page, // 每页搜索结果数量
        q: this.searchText // 搜索的字符
      });
      console.log('data', data);
      const { results } = data.data;
      this.resultList.push(...results);
      this.loading = false;
      if (this.resultList.length >= 40) {
        this.finished = true;
      }
      // 正式环境下
      // if(results.length) {
      //   this.page++;
      // }else {
      //   this.finished = true;
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.search-result {
  position: fixed;
  left: 0;
  right: 0;
  top: 54px;
  bottom: 0;
  overflow-y: auto;

}

</style>

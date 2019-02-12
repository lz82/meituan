<template>
  <div class="m-header-search">

    <div class="search-container">
      <input
        v-model="keyword"
        type="text"
        placeholder="搜索商家或地点"
        class="search-input"
        @focus="onFocus"
        @blur="onBlur"
      >
      <nuxt-link
        to="/"
        class="search-query"
      >
        <i
          class="el-icon-search"
        />
      </nuxt-link>
    </div>
    <!-- 热门搜索 -->
    <div
      v-show="showHot"
      class="hot-search"
    >
      <h6>热门搜索</h6>
      <div class="search-items">
        <nuxt-link to="/">上海迪士尼度假区</nuxt-link>
        <nuxt-link to="/">东方明珠广播电视塔</nuxt-link>
        <nuxt-link to="/">上海迪士尼</nuxt-link>
      </div>
    </div>

    <!-- 自动完成 -->
    <ul
      v-show="showRecommend"
      class="search-result"
    >
      <li
        v-for="item in results"
        :key="item"
      >
        <nuxt-link to="/">{{ item }}</nuxt-link>
      </li>
    </ul>

    <div class="hotword">
      <nuxt-link to="/">上海迪士尼度假区</nuxt-link>
      <nuxt-link to="/">东方明珠广播电视塔</nuxt-link>
      <nuxt-link to="/">上海外滩星空错觉艺术馆</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  data () {
    return {
      keyword: '',
      results: ['上海野生动物园', '上海博物馆', '上海迪士尼', '上海科技馆'],
      isFocus: false
    }
  },

  computed: {
    showHot () {
      return this.isFocus && !this.keyword
    },

    showRecommend () {
      return this.isFocus && this.keyword
    }
  },

  methods: {
    onFocus () {
      this.isFocus = true
    },

    onBlur () {
      this.isFocus = false
    }
  }
}
</script>

<style lang="less" scoped>
.m-header-search {
  position: relative;
  padding-top: 28px;
  .search-container {
    display: flex;
    flex-flow: row nowrap;
    width: 420px;
    line-height: 40px;
    box-sizing: border-box;
    border: solid 1px #13D1BE;
    border-radius: 3px;
    padding-left: 5px;
    .search-input {
      height: 20px;
      padding: 10px;
      flex: 1 1 auto;
    }
    .search-query {
      cursor: pointer;
      line-height: 40px;
      flex: 0 0 15%;
      text-align: center;
      background-color: #13D1BE;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .hotword {
    display: flex;
    flex-flow: row nowrap;
    padding: 8px 0 0 12px;
    a {
      color: #999;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .hot-search {
    padding: 8px 0 0 12px;
    position: relative;
    z-index:100;
    a {
      color: #999;
      margin: 0 10px 3px 0;
    }
  }

  .hot-search {
    position: absolute;
    z-index: 100;
    width: 82%;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-top: none;
    font-size: 12px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #999;
    h6 {
      font-size: 12px;
      padding-bottom: 5px;
    }
    .search-items {
      display: flex;
      flex-flow: row nowrap;
      padding: 10px 0;
      a {
        &:hover {
          color: #31BBAC;
        }
      }
    }
  }

  .search-result {
    position: absolute;
    z-index: 100;
    box-sizing: border-box;
    width: 85%;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-top: none;
    font-size: 12px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #999;
    li {
      line-height: 25px;
      padding-left: 10px;
      a {
        color: #999;
        &:hover {
          color: #31BBAC;
        }
      }
      &:hover {
        background-color: rgb(248, 248, 248);
        a {
            color: #31BBAC;
        }
      }
    }
  }
}
</style>

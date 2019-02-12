<template>
  <div class="m-main-content">
    <div class="container">
      <div
        :style="'background-color: ' + color + ';background-image:' + bgImg"
        class="header"
      >
        <div class="text">
          <h5 class="title">{{ title }}</h5>
          <div class="category">
            <span
              v-for="(item, index) in category"
              :key="item.key"
              :class="{'active': currentCategory === index}"
              class="item"
              @mouseenter="onCategoryEnter(index)"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="more">
          <nuxt-link to="/">全部 <i class="el-icon-arrow-right" /></nuxt-link>
        </div>
      </div>
      <div class="content">
        <component
          v-for="item in currentList"
          :is="item.type"
          :key="item.title"
          :item="item"
          :row-cnt="rowCnt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodItem from './food'
import SpaItem from './spa'
import CinemaItem from './cinema'
import HotelItem from './hotel'
import MovieItem from './movie'
import HouseItem from './house'
import LikeItem from './like'

export default {
  name: 'MainContent',

  components: {
    FoodItem,
    SpaItem,
    CinemaItem,
    HotelItem,
    MovieItem,
    HouseItem,
    LikeItem
  },

  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    category: {
      type: Array,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    rowCnt: {
      type: [Number, String],
      required: true
    },
    lineCnt: {
      type: Number,
      required: false,
      default: 2
    }
  },

  data () {
    return {
      currentCategory: 0,
      bgImg: `linear-gradient(to right, ${this.color} 3%, ${this.color} 100%)`

    }
  },

  computed: {
    currentCategoryKey () {
      return this.category[this.currentCategory]
    },

    currentList () {
      if (!this.currentCategoryKey.key) {
        return this.list.slice(0, this.lineCnt * this.rowCnt)
      } else {
        const key = this.currentCategoryKey.key
        return this.list.filter(item => item.category === key).slice(0, this.lineCnt * this.rowCnt)
      }
    }
  },

  methods: {
    onCategoryEnter (index) {
      this.currentCategory = index
    }
  }
}
</script>

<style lang="less" scoped>
.m-main-content {
  .container {
    width: 950px;
    margin: 40px auto 0px;
    box-sizing: border;
    border: solid 1px #e5e5e5;
    display: flex;
    flex-flow: column nowrap;
    border: 0;
    .header {
      width: 100%;
      height: 44px;
      // line-height: 44px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0 13px;
      box-sizing: border-box;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .text {
        display: flex;
        flex-flow: row nowrap;
        cursor: pointer;
        line-height: 44px;
        .title {
          font-size: 18px;
          font-family: MFShangHei;
          color: #fff;
          padding: 0 5px;
          margin-right: 10px;
        }
        .category {
          font-size: 14px;
          color: #fff;
          .item {
            margin: 0 5px;
            position: relative;
            &.active {
              &:after {
                content: '';
                width: 2px;
                height: 0;
                border-left: solid 5px transparent;
                border-right: solid 5px transparent;
                border-bottom: solid 7px #fff;
                position: absolute;
                bottom: -12px;
                left:0;
                right: 0;
                margin: auto;
              }
            }
          }
        }
      }
      .more {
        line-height: 44px;
        a {
          color: #fff;
        }
      }
    }
    .content {
      box-sizing: border-box;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: solid 1px #e5e5e5;
      border-top: 0;
      display: flex;
      flex-flow: row wrap;

      /deep/ .swiper-pagination {
        z-index: 99999;
      }
    }
  }
}
</style>

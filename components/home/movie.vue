<template>
  <div class="m-movie">
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
      <div v-swiper:mySwiper="swiperOption">
        <div
          class="swiper-wrapper"
          style="z-index:-1;"
        >
          <div
            v-for="item in list"
            :key="item.name"
            class="swiper-slide"
          >
            <img
              :src="item.img"
              class="img"
            >
          </div>
        </div>
        <div class="swiper-button-next" />
        <div class="swiper-button-prev" />
        <div class="swiper-pagination" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',

  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      currentCategory: 0,
      bgImg: `linear-gradient(to right, ${this.color} 3%, ${this.color} 100%)`,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: '.swiper-pagination',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet (index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
  .m-movie {
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
      height: 340px;
      /deep/ .swiper-pagination-bullets {
        bottom: 0;
      }
       /deep/.swiper-pagination-bullet-custom {
        width: 10px;
        height: 2px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        background-color: #ccc;
        // opacity: 0.2;
        border-radius: 0;
      }
      /deep/.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
        color: #333;
        background: #333;
      }
      img {
        width: 214px;
        height: 297px;
      }
    }
  }
</style>

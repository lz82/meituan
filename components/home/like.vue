<template>
  <div
    :style="'flex: 0 0 calc( 100% / ' + rowCnt + ')'"
    class="area"
  >
    <img :src="item.img">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="rating">
      <span class="star">
        <rating-star
          :score="item.score"
        />
      </span>
      <span class="cnt">{{ item.ratingCnt }}个评价</span>
    </div>
    <div class="location">
      {{ item.location }}
    </div>
    <div class="bottom">
      <div class="left">
        <span class="symbol">￥</span>
        <span class="price">{{ item.price.toFixed(1) }}</span>
        <span class="unit">起</span>
      </div>

    </div>
  </div>
</template>

<script>
import RatingStar from './star'

export default {
  name: 'LikeItem',

  components: {
    RatingStar
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    rowCnt: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.area {
  width: 0;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #f8f8f8;
  }
  img {
    width: 100%;
    height: 120px;
    margin-bottom: 11px;
    border-radius: 4px;
  }
  .title {
    margin-bottom: 8px;
    font-size: 16px;
    color: #222;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .rating {
    height: 24px;
    line-height: 24px;
    .star {

    }
    .cnt {
      font-size: 12px;
      color: #999;
      margin-left: 10px;
    }
  }
  .location {
    height: 18px;
    line-height: 18px;
    margin-top: 4px;
    font-size: 12px;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    .left {
      .symbol {
        font-size: 14px;
        color: #F60;
        letter-spacing: -5.5px;
      }
      .price {
        font-size: 22px;
        color: #F60;
        letter-spacing: -0.8px;
      }
      .unit {
        font-size: 12px;
        color: #F60;
      }
    }
    .right {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

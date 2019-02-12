<template>
  <div
    :style="'flex: 0 0 calc( 100% / ' + rowCnt + ')'"
    class="area"
  >
    <img :src="item.img">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="tag">
      <span
        v-for="tag in item.tag"
        :key="tag"
        class="tag-item"
      >
        {{ tag }}
      </span>
    </div>
    <div class="bottom">
      <div
        v-show="item.price"
        class="left"
      >
        <span class="symbol">￥</span>
        <span class="price">{{ item.price }}</span>
        <span class="unit">/起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelItem',

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
    height: 162px;
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
  .tag {
    box-sizing: border-box;
    line-height: 20px;
    display: flex;
    flex-flow: row wrap;
    span {
      font-size: 12px;
      color: #999;
      border: solid 1px #d8d8d8;
      border-radius:2px;
      padding: 0 3px;
      margin: 0 10px 5px 0;
    }
  }
  .bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    .left {
      .symbol {
        font-size: 14px;
        color: #BE9E4D;
        letter-spacing: -5.5px;
      }
      .price {
        font-size: 22px;
        color: #BE9E4D;
        letter-spacing: -0.8px;
      }
      .unit {
        font-size: 12px;
        color: #BE9E4D;
      }
      .origin-price {
        font-size: 12px;
        color: #999;
        margin-left: 5px;
        text-decoration: line-through;
      }
    }
  }
}
</style>

<template>
  <div
    :style="'flex: 0 0 calc( 100% / ' + rowCnt + ')'"
    class="area"
  >
    <img :src="item.img">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="desc">
      {{ item.desc }}
    </div>
    <div class="bottom">
      <div
        class="left"
      >
        <span
          v-show="item.price"
          class="symbol"
        >
          ￥
        </span>
        <span
          v-show="item.price"
          class="price"
        >
          {{ item.price }}
        </span>
        <span
          v-show="item.price"
          class="unit"
        >
          /人均
        </span>
      </div>
      <div class="right">{{ item.location }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpaItem',

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
  width: 0; // 重要！ 不设置这个，文字过长时会撑开div
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
  .desc {
    margin-bottom: 7px;
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
        color: #BE9E4D;
        letter-spacing: -3.5px;
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
    .right {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

<template>
  <div
    :style="'flex: 0 0 calc( 100% / ' + rowCnt + ')'"
    class="area"
  >
    <nuxt-link to="/">
      <img
        :src="item.img"
        class="main"
      >
      <img
        :src="item.avatar || 'https://img.meituan.net/avatar/61bcc2a68f1892d1addafa4f7b544529175467.jpg@200w_200h_1e_1c'"
        class="avatar"
      >
      <div class="title">
        {{ item.title }}
      </div>
      <div class="desc">
        {{ item.desc }}
      </div>
      <div class="bottom">
        <div class="left">
          <span class="symbol">￥</span>
          <span class="price">{{ item.price }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HouseItem',

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
  position: relative;
  &:hover {
    background-color: #f8f8f8;
  }
  .main {
    width: 100%;
    height: 250px;
    margin-bottom: 11px;
    border-radius: 4px;
  }
  .avatar {
    position: absolute;
    top: 236px;
    right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .title {
    margin-bottom: 8px;
    padding-right: 40px;
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
        color: #F60;
        letter-spacing: -5.5px;
      }
      .price {
        font-size: 22px;
        color: #F60;
        letter-spacing: -0.8px;
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

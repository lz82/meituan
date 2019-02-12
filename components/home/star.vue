<template>
  <div class="m-star">
    <span class="star">
      <i
        v-for="i in 5"
        :key="i"
        class="el-icon-star-on"
      />
    </span>
    <span
      :style="lightWidth"
      class="star light"
    >
      <i
        v-for="i in 5"
        :key="i"
        :style="'color:' + color"
        class="el-icon-star-on"
      />
    </span>

  </div>
</template>

<script>
export default {
  name: 'RatingStar',

  props: {
    score: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#F90'
    }
  },

  computed: {
    lightWidth () {
      return 'width:' + (this.score / 5).toFixed(2) * 100 + "%"
    }
  }
}
</script>

<style lang="less" scoped>
  .m-star {
    display: inline-block;
    width: 84px;
    height: 24px;
    line-height: 24px;
    position: relative;
    .star {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      i {
        padding: 0 2px;
        color: #c3c3c3;
      }
    }
    .light {
      position: absolute;
      left:0;
      top: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      overflow: hidden;
      i {
        padding: 0 2px;
        // width: 0;
      }
    }
  }
</style>

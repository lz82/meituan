<template>
  <div class="m-geo-wrapper">
    <i class="el-icon-location" />
    <nuxt-link
      to="/"
    >
      {{ currentCity }}
    </nuxt-link>
    <nuxt-link
      to="/"
    >
      切换城市
    </nuxt-link>
    <span>[</span>
    <nuxt-link
      v-for="link in recommendList"
      :key="link.text"
      to="/"
      class="recommend"
    >
      {{ link.text }}
    </nuxt-link>
    <span>]</span>
  </div>
</template>

<script>
export default {
  name: 'Geo',

  data () {
    return {
      currentCity: '北京',
      recommendList: [{
        text: '彰化'
      },
      {
        text: '宜兰'
      },
      {
        text: '太仓'
      }]
    }
  }
}
</script>


<style lang="less" scoped>
.m-geo-wrapper {
  a {
    color: #666;
  }
  .recommend {
    color: #999;
  }
}
</style>

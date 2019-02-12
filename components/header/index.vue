<template>
  <div class="m-header">
    <header-bar />
    <header-content />
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar'
import HeaderContent from '@/components/header-content'

export default {
  name: 'MHeader',

  components: {
    HeaderBar,
    HeaderContent
  }
}
</script>

<style lang="less" scoped>
.m-header {
  // z-index: 2;
  position: relative;
  box-shadow: -2px 0 27px 0 rgba(0,0,0,.1);
}
</style>

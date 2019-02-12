<template>
  <div class="m-header-logo">
    <img
      src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
      alt="美团"
      class="logo">
  </div>
</template>

<script>
export default {
  name: 'Logo',

  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.m-header-logo {
  min-width: 200px;
  padding-right: 40px;
  .logo {
    width: 126px;
    height: 46px;
    padding: 28px 40px 40px 0;
  }
}
</style>

<template>
  <div class="header-content">
    <div class="container">
      <logo />
      <search />
    </div>
  </div>
</template>

<script>
import Logo from './logo'
import Search from './search'

export default {
  name: 'HeaderContent',

  components: {
    Logo,
    Search
  }
}
</script>

<style lang="less" scoped>
.header-content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-bottom: 35px;
  background-color: #fff;
  .container {
    flex: 0 0 960px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
}
</style>

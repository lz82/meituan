<template>
  <div class="layout-wrapper">
    <m-header />
    <nuxt />
    <m-footer />
  </div>
</template>

<script>
import 'normalize.css'
import MHeader from '@/components/header'
import MFooter from '@/components/footer'

export default {
  name: 'DefaultLayout',

  components: {
    MHeader,
    MFooter
  }
}
</script>


<style lang="less" scoped>
.layout-wrapper {
  background-color: #F8F8F8;
}
</style>

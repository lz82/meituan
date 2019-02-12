<template>
  <div class="m-header-bar-wrapper">
    <div class="header-content">
      <div class="position">
        <geo class="geo" />
        <user class="user" />
      </div>
      <nav-com />
    </div>
  </div>
</template>

<script>
import Geo from './geo'
import User from './user'
import NavCom from './nav'

export default {
  name: 'HeaderBar',

  components: {
    Geo,
    User,
    NavCom
  }
}
</script>

<style lang="less" scoped>
.m-header-bar-wrapper {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  background-color: #F8F8F8;
  color: #999;
  font-size: 12px;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  .header-content {
    // width: 960px;
    flex: 0 0 960px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .position {
      display: flex;
      flex-flow: row nowrap;

      .user {
        margin-left: 15px;
      }
    }
  }
}
</style>

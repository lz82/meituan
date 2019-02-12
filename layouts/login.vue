<template>
  <div class="login-layout-wrapper">
    <header>
      <nuxt-link
        to="/"
      />
    </header>
    <div class="container">
      <nuxt />
    </div>
    <footer>
      <div class="nav">
        <ul>
          <li>
            <nuxt-link to="/">关于美团</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">加入我们</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">帮助中心</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">美团手机版</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="cpy">
        ©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </div>
    </footer>
  </div>
</template>

<script>
</script>

 <style lang="less" scoped>
.login-layout-wrapper {
  header {
    width: 980px;
    margin: 40px auto 30px;
    a {
      display: inline-block;
      width: 82px;
      height: 54px;
      background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png) no-repeat;
      background-size: contain;
    }
  }
  .container {
    width: 980px;
    margin: 0 auto 70px;
  }
  footer {
    width: 980px;
    margin: 0 auto;
    font-size: 12px;
    color: #999;
    .nav {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: solid 1px #EEE;
      border-bottom: solid 1px #EEE;
      ul {
        display: flex;
        flex-flow: row nowrap;
        li {
          line-height: 14px;
          border-right: solid 1px #EEE;
          &:last-child {
            border-right: 0;
          }
          a {
            color: #999;
            margin: 5px 0;
            padding: 0 16px;
          }
        }
      }
    }
  }
}
</style>

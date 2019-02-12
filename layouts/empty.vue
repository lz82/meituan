<template>
  <div class="layout-empty">
    <header>
      <div class="header-wrapper">
        <div class="left">
          <nuxt-link
            to="/"
            class="logo"
          />
        </div>
        <div class="right">
          <span>已有美团账户？</span>
          <nuxt-link
            to="/login"
            class="login-btn"
          >
            登录
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="container">
      <nuxt />
    </div>
    <footer>
      ©meituan.com  京ICP证070791号  京公网安备11010502025545号
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-empty {
  header {
    min-width: 980px;
    color: #666;
    border-bottom: solid 2px #2bb8aa;
    .header-wrapper {
      width: 980px;
      margin: 0 auto;
      padding: 10px 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .left {
        .logo {
          display: inline-block;
          width: 54px;
          height: 36px;
          background-image: url('//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png');
          object-fit: cover;
          background-position: -669px -748px;
        }
      }
      .right {
        span {
          margin-right: 10px;
          font-size: 14px;
        }
        .login-btn {
          padding: 3px 10px;
          font-size: 12px;
          background-color: #2db3a6;
          color: #fff;
        }
      }
    }
  }
  .container {
    width: 980px;
    margin: 0 auto;
    padding: 30px 0;
  }
  footer {
    border-top: solid 1px #EEE;
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
    color: rgb(153, 153, 153);
  }
}
</style>

<template>
  <div class="m-user-wrapper">
    <div
      v-if="!hasLogin"
      class="login-wrapper"
    >
      <nuxt-link
        to="/login"
        class="login"
      >
        立即登录
      </nuxt-link>
      <nuxt-link
        to="/register"
        class="register"
      >
        注册
      </nuxt-link>
    </div>
    <div
      v-else
      class="userinfo-wrapper"
    >
      {{ username }}
      <span>[<nuxt-link to="/logout">退出登录</nuxt-link>]</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserInfo',

  data () {
    return {
      username: ''
    }
  },

  computed: {
    hasLogin () {
      return !!this.username
    }
  },

  mounted () {
    this.$axios.get('/user/getUserInfo')
    .then(({status, data}) => {
      if (status === 200 && data.code === 0) {
        if (data.username) {
          this.username = data.username
        }
      }
    })
  }
}
</script>


<style lang="less" scoped>
.m-user-wrapper {
  a {
    color: #999;
  }

  .login {
    color: #31BBAC;
    margin-right: 10px;
  }
}
</style>

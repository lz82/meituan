<template>
  <div class="login-wrapper">
    <div class="banner" />
    <div class="login-form">
      <el-form
        ref="form"
        :model="model"
        :rules="rules"
      >
        <el-form-item class="no-bottom">
          <div class="header">
            <span class="title">账户登录</span>
            <span class="login-type">
              <span>手机动态登录</span>
              <i class="mobile" />
            </span>
          </div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="手机号/用户名/邮箱"
            prefix-icon="iconfont icon-user"
          />
        </el-form-item>
        <el-form-item
          prop="pwd"
          class="no-bottom"
        >
          <el-input
            v-model="model.pwd"
            placeholder="密码"
            prefix-icon="iconfont icon-unlock"
          />
        </el-form-item>
        <el-form-item class="no-bottom">
          <div class="forget">
            <nuxt-link to="/">忘记密码？</nuxt-link>
          </div>
        </el-form-item>
        <el-form-item class="no-bottom">
          <el-button
            type="primary"
            style="width:100%;"
            @click="onLogin"
          >
            登录
          </el-button>
        </el-form-item>
        <el-form-item>
          <div class="register">
            <span>
              还没有账号登录?
            </span>
            <!-- <nuxt-link to='/register'>注册</nuxt-link> -->
            <nuxt-link to="/register">免费注册</nuxt-link>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="auth">
            <h3>
              <span>用合作网站账号登录</span>
            </h3>
            <div class="auth-log">
              <nuxt-link
                class="qq"
                to="/"
              />
              <nuxt-link
                class="weibo"
                to="/"
              />
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  layout: 'login',

  data () {
    return {
      model: {
        username: '',
        pwd: ''
      },
      rules: {
        username: [
          {
            required: true, message: '请填写手机号/用户名/邮箱', trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true, message: '请输入密码', trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    onLogin () {
      let self = this
      this.$refs.form.validate(valid => {
        if(valid) {
          const postData = {
            username: self.model.username,
            password: self.model.pwd
          }
          self.$axios.post('/user/signin', postData)
          .then(({status, data}) => {
            if (status === 200 && data.code === 0) {
              location.href = '/'
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .banner {
    flex: 0 0 480px;
    background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg) no-repeat;
    height: 370px;
    margin-right: 115px;
  }
  .login-form {
    flex: 0 0 270px;
    .header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .title {
        font-size: 14px;
        color: #666;
      }
      .login-type {
        font-size: 12px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;
        span {
          color: #666;
          &:hover {
            text-decoration: underline;
          }
        }
        .mobile {
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png) no-repeat;
          background-position: -877px -677px;
        }
      }
    }
    .forget {
      text-align: right;
      a {
        color: #2bb8aa;
        font-size: 12px;
      }
    }
    .register {
      font-size: 14px;
      color: #666;
      a {
        color: #2bb8aa;
      }
    }
    .auth {
      h3 {
        position: relative;
        width: 100%;
        height: 0;
        border-bottom: solid 1px #CCC;
        text-align: center;
        span {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -20px;
          font-size: 12px;
          color: #666;
          z-index: 1;
          background-color: #fff;
          padding: 0 5px;
        }
      }
      .auth-log {
        text-align: center;
        margin-top: 20px;
        .qq {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
          background-position: -1250px -491px;
          margin-right: 20px;
        }
        .weibo {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
          background-position: -1250px -599px;
        }
      }
    }
    /deep/ .el-input__prefix {
      left: 10px;
    }
  }
  .no-bottom {
    margin-bottom: 5px !important;
  }
}
</style>

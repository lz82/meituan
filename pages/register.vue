<template>
  <div class="register-wrapper">
    <el-form
      ref="form"
      :model="model"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input
          v-model="model.username"
          style="width: 260px"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input
          v-model="model.email"
          style="width:260px"
          clearable
        />
        <el-button
          @click="onVerifyClick"
        >
          {{ verifyMsg }}
        </el-button>
      </el-form-item>
      <el-form-item
        label="动态验证码"
        prop="verifyCode"
      >
        <el-input
          v-model="model.verifyCode"
          style="width: 260px"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="创建密码"
        prop="pwd"
      >
        <el-input
          v-model="model.pwd"
          style="width: 260px"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirmPwd"
      >
        <el-input
          v-model="model.confirmPwd"
          style="width: 260px"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onRegister"
        >
          同意以下协议并注册
        </el-button>
      </el-form-item>
      <el-form-item>
        <nuxt-link to="/linsence">
          《美团网用户协议》
        </nuxt-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',

  layout: 'empty',

  data () {
    return {
      verifyMsg: '获取验证码',
      verifyTimer: null,
      model: {
        username: '',
        email: '',
        verifyCode: '',
        pwd: '',
        confirmPwd: ''
      },
      rules: {
        username: [
          {
            required: true, message: '请输入用户名', trigger: 'blur'
          }
        ],
        email: [
          {
            required: true, message: '请输入邮箱', trigger: 'blur'
          }
        ],
        verifyCode: [
          {
            required: true, message: '请输入正确的验证码', triiger: 'blur'
          }
        ],
        pwd: [
          {
            required: true, message: '请输入密码', trigger: 'blur'
          }
        ],
        confirmPwd: [
          {
            required: true, message: '请输入确认密码', trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入确认密码'))
              } else if (value !== this.model.pwd) {
                callback(new Error('两次密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    onVerifyClick () {
      let usernameCheck = false
      let emailCheck = false
      console.log(this.verifyTimer)
      if (this.verifyTimer) {
        return false
      }

      this.$refs.form.validateField('username', valid => {
        usernameCheck = valid
      })

      this.$refs.form.validateField('email', valid => {
        emailCheck = valid
      })
      // 检查不通过
      if (emailCheck || usernameCheck) {
        return false
      }
      let self = this
      // request api
      this.$axios.post('/user/sendVerify', {
        username: encodeURIComponent(self.model.username),
        email: self.model.email
      })
      .then(({ status, data }) => {
        console.log(status, data)
        if (status === 200 && data.code === 0) {
          let countDown = 60
          self.verifyTimer = setInterval(() => {
            self.verifyMsg = `验证码已发送，(${countDown--}秒 )`
            if (countDown === 0) {
              self.verifyMsg = '重新发送验证码'
              clearInterval(self.verifyTimer)
              self.verifyTimer = null
            }
          }, 1000);
        }
      })
    },

    onRegister () {
      this.$refs.form.validate(valid => {
        const postData = {
          username: this.model.username,
          email: this.model.email,
          code: this.model.verifyCode,
          password: this.model.pwd
        }
        if (valid) {
          this.$axios.post('/user/signup', postData)
          .then(({status, data}) => {
            if (status === 200 && data.code === 0) {
              location.href="/login"
            } else {
              console.log(sele.$message)
              // self.$message.error('data.msg')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .register-wrapper {
    width: 980px;
    a {
      color: #2bb8aa;
    }
  }
</style>

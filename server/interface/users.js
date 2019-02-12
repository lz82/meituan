const Router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')

const config = require('../dbs/config')
const Users = require('../dbs/models/users')
const axios = require('../utils/axios')
const passport = require('../utils/passport')

let router = new Router({
  prefix: '/user'
})

let Store = new Redis().client

router.post('/signup', async (ctx, next) => {
  console.log('signup')
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body

  if (code) {
    const cachedCode = await Store.hget(`nodemail:${username}`, 'code')
    const cachedExpire = await Store.hget(`nodemail:${username}`, 'expire')

    if (code === cachedCode) {
      if (new Date() - cachedExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期'
        }
        return false
      }

      const user = await Users.find({
        username
      })

      if (user.length) {
        ctx.body = {
          code: -1,
          msg: '该用户名已存在'
        }
        return false
      }
      console.log('pwd', password)
      const createUser = Users.create({
        username,
        password,
        email
      })

      if (createUser) {
        const res = await axios.post('/user/signin', {
          username,
          password
        })
        if (res.data && res.data.code === 0) {
          ctx.body = {
            code: 0,
            msg: '注册成功',
            user: res.data.user
          }
        } else {
          ctx.body = {
            code: -1,
            msg: '注册失败'
          }
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '注册失败'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }


})

router.post('/signin', async (ctx, next) => {
  return passport.authenticate('local', (err, user, info, status) => {
    console.log('signin',err, user, info, status)
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.post('/sendVerify', async (ctx, next) => {
  const {
    username,
    email
  } = ctx.request.body
  const cachedExpire = Store.hget(`nodemail:${username}`, 'expire')

  if (cachedExpire && cachedExpire > (new Date() -0)) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，一分钟限一次'
    }
    return false
  }

  const transporter = nodeMailer.createTransport({
    host: config.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass
    }
  })

  const ko = {
    code: config.smtp.code(),
    expire: config.smtp.expireTime(),
    email: email,
    user: username
  }

  let mailOption = {
    from: `认证邮件<${config.smtp.user}>`,
    to: ko.email,
    subject: '《美团注册验证码》',
    html: `您在《山寨美团网》中申请的注册验证码是：${ko.code}`
  }

  console.log('start send mail....')
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error)
      console.log('发送邮件失败')
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  console.log('code', ko.code)
  Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)

  ctx.body = {
    code: 0,
    msg: '验证码已发送'
  }
})

router.get('/logout', async (ctx) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUserInfo', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user

    ctx.body = {
      code: 0,
      username,
      email
    }
  } else {
    ctx.body = {
      username: '',
      email: ''
    }
  }
})

module.exports = router

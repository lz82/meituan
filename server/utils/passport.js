const passport = require('koa-passport')
const LocalStrategy = require('passport-local')

const userModel = require('../dbs/models/users')

passport.use(new LocalStrategy(async (username, password, done) => {
  let where = {
    username
  }
  console.log('username', username)
  let user = await userModel.findOne(where)
  console.log('user', user)
  if (user) {
    if (user.password === password) {
      return done(null, user)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user)
});

module.exports = passport

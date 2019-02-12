const config = {
  dbs: 'mongodb://127.0.0.1:27017/meituan',

  redis: {
    get host () {
      return '127.0.0.1'
    },

    get port () {
      return 6379
    }
  },

  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '70458055@qq.com'
    },
    get pass () {
      return 'xfbwjdjroeoubjfb'
    },
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expireTime () {
      return () => {
        return new Date() - 0  + 60 * 60 * 1000
      }
    }
  }
}

module.exports = config

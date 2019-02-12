<template>
  <div class="m-nav-wrapper">
    <ul class="nav">
      <li class="nav-item hasChild">
        <nuxt-link
          to="/"
        >
          我的美团
        </nuxt-link>
        <ul
          class="nav-second"
        >
          <li><nuxt-link to="/order">我的订单</nuxt-link></li>
          <li><nuxt-link to="/order">我的收藏</nuxt-link></li>
          <li><nuxt-link to="/order">抵用券</nuxt-link></li>
          <li><nuxt-link to="/order">账户设置</nuxt-link></li>
        </ul>
      </li>
      <li class="nav-item">
        <nuxt-link
          to="/"
        >
          手机APP
        </nuxt-link>
      </li>
      <li class="nav-item hasChild">
        <nuxt-link
          to="/"
        >
          商家中心
        </nuxt-link>
        <ul class="nav-second w140">
          <li><nuxt-link to="/">登录商家中心</nuxt-link></li>
          <li><nuxt-link to="/">美团智能收银</nuxt-link></li>
          <li><nuxt-link to="/">我想合作</nuxt-link></li>
          <li><nuxt-link to="/">手机免费开店</nuxt-link></li>
          <li><nuxt-link to="/">餐饮代理商招募</nuxt-link></li>
          <li><nuxt-link to="/">商家申请开票</nuxt-link></li>
          <li><nuxt-link to="/">免费合作美团排队</nuxt-link></li>
        </ul>
      </li>
      <li class="nav-item hasChild site">
        <nuxt-link
          to="/"
        >
          网站导航
        </nuxt-link>
        <div class="nav-site">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd><nuxt-link to="/">国际机票</nuxt-link></dd>
            <dd><nuxt-link to="/">火车票</nuxt-link></dd>
            <dd><nuxt-link to="/">榛果民宿</nuxt-link></dd>
            <dd><nuxt-link to="/">经济型酒店</nuxt-link></dd>
            <dd><nuxt-link to="/">主题酒店</nuxt-link></dd>
            <dd><nuxt-link to="/">商务酒店</nuxt-link></dd>
            <dd><nuxt-link to="/">公寓</nuxt-link></dd>
            <dd><nuxt-link to="/">豪华酒店</nuxt-link></dd>
            <dd><nuxt-link to="/">客栈</nuxt-link></dd>
            <dd><nuxt-link to="/">青年旅社</nuxt-link></dd>
            <dd><nuxt-link to="/">度假酒店</nuxt-link></dd>
            <dd><nuxt-link to="/">别墅</nuxt-link></dd>
            <dd><nuxt-link to="/">农家院</nuxt-link></dd>
          </dl>

          <dl class="food">
            <dt>吃美食</dt>
            <dd><nuxt-link to="/">烤鱼</nuxt-link></dd>
            <dd><nuxt-link to="/">特色小吃</nuxt-link></dd>
            <dd><nuxt-link to="/">烧烤</nuxt-link></dd>
            <dd><nuxt-link to="/">自助餐</nuxt-link></dd>
            <dd><nuxt-link to="/">火锅</nuxt-link></dd>
            <dd><nuxt-link to="/">代金券</nuxt-link></dd>
          </dl>

          <dl class="movie">
            <dt>看电影</dt>
            <dd><nuxt-link to="/">热映电影</nuxt-link></dd>
            <dd><nuxt-link to="/">热门影院</nuxt-link></dd>
            <dd><nuxt-link to="/">热映电影口碑榜</nuxt-link></dd>
            <dd><nuxt-link to="/">最受期待电影</nuxt-link></dd>
            <dd><nuxt-link to="/">国内票房榜</nuxt-link></dd>
            <dd><nuxt-link to="/">北美票房榜</nuxt-link></dd>
            <dd><nuxt-link to="/">电影排行榜</nuxt-link></dd>
          </dl>

          <dl class="icon">
            <dt>手机应用</dt>
            <dd>
              <nuxt-link to="/">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  alt="美团app"
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  alt="外卖app"
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                  alt="榛果app"
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  alt="点评app"
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/">
                <img
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  alt="猫眼app"
                >
              </nuxt-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',

  data () {
    return {
      showMySecond: false
    }
  }
}
</script>


<style lang="less" scoped>
.m-nav-wrapper {
  position: relative;
  // z-index:99;
  .nav {
    display: flex;
    flex-flow: row nowrap;
    height: 40px;
    line-height: 40px;
    .nav-item {
      box-sizing: border-box;
      padding: 0 14px;
      text-align: center;
      cursor: pointer;
      position: relative;
      a {
        color: #999;
        &:hover {
          color: #31BBAC;
        }
      }
      &.hasChild {
        &:hover {
          background-color: #fff;
          border-color: #E5E5E5;
          box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
          >ul {
            display: block;
          }
        }
      }

      .nav-second {
        display: none;
        box-sizing: content-box;
        background-color: #fff;
        width: 100%;
        // border-color: #E5E5E5;
        border: 1px solide #E5E5E5;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        position: absolute;
        z-index: 99;
        right: 0;
        font-size: 12px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        li {
          line-height: 35px;
        }

        &.w140 {
          width: 150%;
        }
      }

      &.site {
        &:hover {
          .nav-site {
            display: flex;
          }
        }
      }

      .nav-site {
        display: none;
        // z-index: 999;
        width: 960px;
        position: absolute;
        z-index: 99;
        right: 0;
        background-color: #fff;
        border: 1px solide #E5E5E5;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        padding: 30px 36px 36px 47px;
        box-sizing: border-box;
        flex-flow: row nowrap;

        .hotel {
          width: 234px;
          box-sizing: border-box;
          margin-right: 40px;
          dt {
            color: #31BBAC;
            font-size: 14px;
            margin-bottom: 26px;
          }

          dd {
            float: left;
            width: 33%;
            line-height: 27px;
          }
        }

        .food {
          width: 156px;
          box-sizing: border-box;
          margin-right: 40px;
          dt {
            color: #31BBAC;
            font-size: 14px;
            margin-bottom: 26px;
          }

          dd {
            float: left;
            width: 50%;
            line-height: 27px;
          }
        }

        .movie {
          width: 90px;
          box-sizing: border-box;
          margin-right: 40px;
          dt {
            color: #31BBAC;
            font-size: 14px;
            margin-bottom: 26px;
          }
          dd {
            line-height: 27px;
          }
        }

        .icon {
          width: 250px;
          box-sizing: border-box;
          margin-right: 0;
          dt {
            color: #31BBAC;
            font-size: 14px;
            margin-bottom: 26px;
          }
          dd {
            display: inline-block;
            margin: 0 8px;
            a {
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

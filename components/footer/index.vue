<template>
  <div class="m-footer">
    <div class="footer-link">
      <div
        v-for="(link, index) in linkList"
        :key="index"
        class="link-column"
      >
        <dl
          v-for="category in link.categoryList"
          :key="category.title"
        >
          <dt>{{ category.title }}</dt>
          <dd
            v-for="item in category.items"
            :key="item"
          >
            {{ item }}
          </dd>
        </dl>
      </div>
    </div>
    <div class="footer-cpy">
      <div class="left">
        <p>
          <nuxt-link to="/">©美团网团购 meituan.com</nuxt-link>
          <nuxt-link to="/">京ICP证070791号</nuxt-link>
          <nuxt-link to="/">京ICP备10211739号</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/">广播电视节目制作经营许可证（京）字第03889号</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/">食品经营许可证</nuxt-link>
          <nuxt-link to="/">互联网药品信息服务资格证</nuxt-link>
        </p>
        <p>
          <nuxt-link to="/">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</nuxt-link>
        </p>
      </div>
      <div class="right">
        <p>
          <nuxt-link to="/">京公网安备11010502025545号</nuxt-link>
        </p>
        <p>
          <nuxt-link
            to="/"
            class="beian"
          />
          <nuxt-link
            to="/"
            class="kexin"
          />
          <nuxt-link
            to="/"
            class="right"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MFooter',

  data () {
    return {
      linkList: [{
        categoryList: [
          {
            title: '用户帮助',
            items: ['申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告']
          },
          {
            title: '美团服务',
            items: ['美团外卖', '美团酒店', '猫眼电影', '美团配送', '美团云', '大众点评', '榛果民宿', '无人配送' ]
          }
        ]
      },
      {
        categoryList: [
          {
            title: '商家合作',
            items: ['美食商家入驻(非外卖)', '美团外卖开店申请', '美团收银官网', '外卖配送加盟申请', '美团点评餐饮学院', '酒店商家入驻', '境内度假商家入驻', '综合商家入驻', '榛果民宿房东商家入驻', '商家开票申请', '美团点评智能收银机', '聚宝盆餐饮开放平台', '美团智能支付', '免费使用美团排队', '快驴进货商家合作', '美团闪购商家入驻']
          }
        ]
      },
      {
        categoryList: [
          {
            title: '代理商加盟',
            items: ['智能支付渠道加盟商招募', '到店餐饮代理商招募', '非餐饮代理商招募', '美团联盟', '美团收银招募线上分销商', '美团点评5S服务商招募']
          },
          {
            title: '行业规范',
            items: ['美团点评餐饮安全管理办法']
          },
          {
            title: '廉正举报',
            items: ['廉政邮箱']
          }
        ]
      },
      {
        categoryList: [
          {
            title: '关注美团',
            items: ['美团新浪微博']
          },
          {
            title: '公司信息',
            items: ['关于我们', '投资者关系', '加入我们', '法律声明', '价格说明', '美团网平台点评规则', '美团点评团购用户服务条款', '商户诚信公约及管理办法']
          }
        ]
      },
      {
        categoryList: [
          {
            title: '消费者服务热线',
            items: ['外卖消费者：10109777', '猫眼消费者：10105335', '其他消费者：10107888']
          },
          {
            title: '商家服务热线',
            items: ['外卖&餐饮商家：10105557', '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107']
          },
          {
            title: '投诉举报热线',
            items: ['违法和不良信息举报电话：4006018900', '举报邮箱：tousujubao@meituan.com']
          },
          {
            title: '商家自助入驻美团入口'
          }
        ]
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  .m-footer {
    display: flex;
    flex-flow: column nowrap;
    width: 960px;
    margin: 40px auto 0px;
    box-sizing: border-box;
    .footer-link {
      padding: 40px 45px;
      border-top: solid 1px #E5E5E5;
      border-bottom: solid 1px #E5E5E5;
      display: flex;
      flex-flow: row nowrap;
      .link-column {
        flex: 0 0 20%;
        dl {
          padding-bottom: 20px;
          color: #666;
          dt {
            font-size: 14px;
            font-weight: 500;
            line-height: 28px;
          }
          dd {
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }
    .footer-cpy {
      padding: 15px 0 30px 20px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .left {
        a {
          color: #999;
          margin-right: 20px;
        }
      }
      .right {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        a {
          color: #999;
        }
        .beian {
          display: inline-block;
          width: 109px;
          height: 38px;
          background: url(https://s0.meituan.net/bs/fe-web-meituan/cd77df7/img/sprites/footer.png);
          background-position: 0 -167px;
        }
        .kexin {
          display: inline-block;
          width: 107px;
          height: 38px;
          background: url(https://s0.meituan.net/bs/fe-web-meituan/cd77df7/img/sprites/footer.png);
          background-position: 0 -127px;
        }
        .right {
          display: inline-block;
          width: 107px;
          height: 38px;
          background: url(https://s0.meituan.net/bs/fe-web-meituan/cd77df7/img/sprites/footer.png);
          background-position: 0 -40px;
        }
      }
    }
  }
</style>

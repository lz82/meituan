<template>
  <div class="side-menu-wrapper">
    <dl
      class="side-menu"
      @mouseleave="onMenuOut"
    >
      <dt>全部分类</dt>
      <dd
        v-for="menu in menuList"
        :key="menu.text"
        @mouseenter="onMenuOver(menu.text)"
      >
        <span class="left">
          <i :class="['iconfont', menu.icon]" />
          <span class="menu-text">{{ menu.text }}</span>
        </span>
        <span class="right">
          <i class="el-icon-arrow-right" />
        </span>
      </dd>
    </dl>
    <div
      v-show="currentCategory.length > 0"
      class="menu-detail"
      @mouseenter="onDetailOver"
      @mouseleave="onDetailOut"
    >
      <dl
        v-for="category in currentCategory"
        :key="category.title"
      >
        <dt>
          <span class="title-txt">{{ category.title }}</span>
          <span class="title-more">
            更多
            <i class="el-icon-arrow-right" />
          </span>
        </dt>
        <dd>
          <span
            v-for="item in category.child"
            :key="item"
            class="item"
          >
            {{ item }}
          </span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',

  data () {
    return {
      menuList: [{
        icon: 'icon-food',
        text: '美食',
        child: [
          {
            title: '美食',
            child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请']
          }
        ]
      },
      {
        icon: 'icon-waimaixinxi',
        text: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      },
      {
        icon: 'icon-hotel',
        text: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      },
      {
        icon: 'icon-house',
        text: '榛果民宿',
        child: [{
          title: '热门城市',
          child: ['上海','成都','北京','重庆','南京','杭州','广州','西安','大连']
        }]
      },
      {
        icon: 'icon-mao',
        text: '猫眼电影',
        child: [{
          title: '热映电影',
          child: ['死侍2','大黄蜂','新喜剧之王','白蛇','疯狂的外星人','飞驰人生']
        }, {
          title: '热门影院',
          child: ['SFC上影影城','万达影城', '百丽宫影城', '大光明影城']
        }]
      },
      {
        icon: 'icon-plane',
        text: '机票/火车票',
        child: [{
          title: '机票',
          child: ['国内机票', '港澳台/国际机票']
        },{
          title: '火车票',
          child: ['火车票']
        }]
      },
      {
        icon: 'icon-icon--1',
        text: '休闲娱乐/KTV',
        child: [{
          title: '休闲娱乐',
          child: ['足浴/按摩','洗浴汗蒸','酒吧','密室逃脱','轰趴馆','茶馆','私人影院','DIY工坊','网吧网咖','游乐游艺','VR','桌面游戏','真人CS','棋牌室','其他玩乐']
        }, {
          title: 'KTV',
          child: ['KTV']
        }]
      },
      {
        icon: 'icon-location',
        text: '生活服务',
        child: [{
          title: '生活服务',
          child: ['衣物/皮具洗护', '家政', '搬家运输', '送水', '充值缴费', '开锁换锁', '居家维修', '电脑维修', '手机维修', '管道疏通', '文化传媒机构']
        }]
      },
      {
        icon: 'icon-zuichun',
        text: '丽人/美发/医学美容',
        child: [{
          title: '丽人',
          child: ['美发','美甲美睫','美体美容','医学美容','瑜伽舞蹈','瘦身纤体','韩式定妆','祛痘','纹身', '化妆品']
        }]
      },
      {
        icon: 'icon-wedding-dress',
        text: '结婚/婚纱摄影/婚宴',
        child: [{
          title: '结婚',
          child: ['婚纱摄影', '旅拍', '个性写真']
        }]
      },
      {
        icon: 'icon-child-care',
        text: '亲子/儿童乐园/幼教',
        child: [{
          title: '儿童乐园',
          child: ['婴儿游泳', '其他亲子游乐']
        }, {
          title: '幼儿教育',
          child: ['早教中心', '少儿英语', '智力开发', '托班/幼儿园', '幼儿教育', '其他幼儿教育']
        }, {
          title: '亲子摄影',
          child: ['儿童摄影', '孕妇拍', '上门拍', '其他亲子摄影']
        }, {
          title: '孕产护理',
          child: ['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳']
        }]
      },
      {
        icon: 'icon-yaling',
        text: '运动健身/健身中心',
        child: [{
          title: '运动健身',
          child: ['健身中心','羽毛球馆','乒乓球馆','篮球馆','溜冰场','射箭馆']
        }]
      },
      {
        icon: 'icon-building-materials',
        text: '家装/建材/家居',
        child: [{
          title: '装修设计',
          child: ['半包装修', '全包装修', '清包装修']
        },{
          title: '装修建材',
          child: ['地板', '瓷砖石材', '橱柜', '灯具照明', '油漆涂料', '集成吊顶']
        },{
          title: '家具家居',
          child: ['家具', '床上用品/家纺', '家居饰品', '厨具餐具', '智能家居']
        },{
          title: '家装卖场',
          child: ['建材卖场', '家具卖场', '灯饰卖场']
        }]
      },
      {
        icon: 'icon-book',
        text: '学习培训/音乐培训',
        child: [{
          title: '音乐培训',
          child: ['钢琴', '吉他', '小提琴', '古筝', '架子鼓', '声乐']
        },{
          title: '职业技术',
          child: ['美容美妆', '会计', 'IT', '厨艺', '管理培训']
        },{
          title: '外语培训',
          child: ['英语','日语','法语','韩语','德语','汉语',]
        },{
          title: '美术培训',
          child: ['绘画', '书法', '其他美术']
        },]
      },
      {
        icon: 'icon-medical-treatment',
        text: '医疗健康/宠物/爱车',
        child: [{
          title: '医疗健康',
          child: ['医院', '齿科口腔', '体检中心', '药店', '中医']
        },
        {
          title: '宠物',
          child: ['宠物店', '宠物医院']
        },
        {
          title: '爱车',
          child: ['洗车', '租车', '加油站', '维修保养']
        }]
      },
      {
        icon: 'icon-icon--',
        text: '酒吧/密室逃脱',
        child: ['KTV','酒吧','密室逃脱','私人影院','农家乐']
      }],
      showDetail: true,
      selectedCategory: '',
      menuOverTimer: null
    }
  },

  computed: {
    currentCategory () {
      const selectCategory = this.selectedCategory
      const current = this.menuList.filter(item => item.text === selectCategory)
      if (current && current.length > 0) {
        return current[0].child
      } else {
        return []
      }
    }
  },

  methods: {
    onMenuOver (menu) {
      this.selectedCategory = menu
    },

    onMenuOut () {
      this.menuOverTimer = setTimeout(() => {
        this.selectedCategory = ''
      }, 150)
    },

    onDetailOver () {
      clearTimeout(this.menuOverTimer)
    },

    onDetailOut () {
      this.selectedCategory = ''
    }
  }
}
</script>

<style lang="less" scoped>
.side-menu-wrapper {
  position: relative;
  .side-menu {
      margin-right: 10px;
      width: 230px;
      height: 475px;
      margin-top: -50px;
      background:-webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
      dt {
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
        padding-left: 15px;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      dd {
        height: 26px;
        padding: 2px 12px;
        box-sizing: border-box;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        &:hover {
          background-color: rgba(255, 255, 255, .2);
          .left {
            i {
              color: rgb(255, 255, 255);
            }
          }
        }
        .left {
          i {
            color: rgba(0, 0, 0, .15);
          }
          .menu-text {
            color: #fff;
            cursor: pointer;
            margin-left: 11px;
            font-size: 13px;
            line-height: 20px;
          }
        }
        .right {
          i {
            color: #fff;
          }
        }
      }
    }

    .menu-detail {
      position: absolute;
      z-index: 100;
      left: 230px;
      top: 0px;
      width: 400px;
      height: 425px;
      background-color: #fff;
      overflow: hidden;
      box-sizing: border-box;
      padding: 30px;
      dl {
        margin-bottom: 20px;
      }
      dt {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #e5e5e5;
        padding-bottom: 10px;
        box-sizing: border-box;
        .title-txt {
          color: #222;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }
        .title-more {
          color: #999;
          font-size: 12px;
          font-weight: 400;
        }
      }
      dd {
        color: #999;
        display: flex;
        flex-flow: row wrap;
        .item {
          font-size: 12px;
          line-height: 15px;
          margin: 10px 16px 0 0;
        }
      }
    }
}
</style>

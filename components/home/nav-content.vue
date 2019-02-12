<template>
  <div class="m-nav-content">
    <div class="container">
      <div class="header">
        美团导航
      </div>
      <div class="content">
        <div
          v-for="category in categoryList"
          :key="category.title"
          class="category"
        >
          <div class="title">{{ category.title }}</div>
          <div class="list">
            <span
              v-for="item in category.items"
              :key="item"
              class="item"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavContent',

  data () {
    return {
      categoryList: [
        {
          title: '热门城市',
          items: ['宁波', '北京', '广州', '大连', '佛山', '天津', '东莞', '沈阳', '长春', '武汉', '合肥', '温州', '常州', '上海', '济南', '杭州', '青岛', '无锡', '成都', '福州']
        },
        {
          title: '热门分类',
          items: ['酒店', '美食', '休闲娱乐', '运动健身', '生活服务', '上门服务', '购物', '时尚购', '本地购物', '结婚', '摄影写真', '宴会', '丽人', '母婴亲子', '学习培训', '家装', '汽车服务', '医疗', '宠物']
        },
        {
          title: '周边热门',
          items: ['彰化酒店', '彰化美食', '太仓休闲娱乐', '宜兰运动健身', '宜兰生活服务', '彰化上门服务', '太仓购物', '太仓市尚购', '太仓本地购物', '宜兰结婚', '彰化摄影写真', '宜兰宴会', '太仓丽人', '彰化母婴亲子', '宜兰学习培训', '彰化家装', '宜兰汽车服务', '宜兰医疗', '太仓宠物']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.m-nav-content {
  .container {
    width: 950px;
    margin: 40px auto 0px;
    box-sizing: border;
    border: solid 1px #e5e5e5;
    display: flex;
    flex-flow: column nowrap;
    border: 0;
    .header {
      width: 100%;
      height: 44px;
      line-height: 44px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0 18px;
      box-sizing: border-box;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #0ECAC7;
      background-image: linear-gradient(-90deg,#0ECAC7 0,#06C1AE 100%);
      font-size: 18px;
      font-family: MFShangHei;
      color: #fff;
    }
    .content {
      box-sizing: border-box;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: solid 1px #e5e5e5;
      border-top: 0;
      display: flex;
      flex-flow: column nowrap;
      .category {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        .title {
          flex: 0 0 100px;
          width: 100px;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          padding: 10px 0;
          box-sizing: border-box;
        }
        .list {
          flex: 0 0 830px;
          padding-top: 12px;
          box-sizing: border-box;
          margin-right: 10px;
          display: flex;
          flex-flow: row wrap;
          border-bottom: solid 1px #e5e5e5;
          &:last-child {
            border-bottom: 0;
          }
          .item {
            flex: 0 0 12.5%;
            font-size: 12px;
            height: 17px;
            margin-bottom: 13px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>

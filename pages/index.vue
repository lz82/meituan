<template>
  <div class="container">
    <div class="banner-wrapper">
      <!-- 顶部 -->
      <!-- 左侧菜单 -->
      <side-menu />
      <!-- 右侧Banner -->
      <nav-bar />
    </div>
    <!-- 电影 -->
    <movie-content
      :title="movieList.title"
      :category="movieList.category"
      :list="movieList.rawData"
      :color="movieList.bgColor"
    />
    <!-- 中间内容 -->
    <template
      v-for="content in contentList"
    >
      <main-content
        :key="content.img"
        :title="content.title"
        :category="content.category"
        :list="content.rawData"
        :color="content.bgColor"
        :row-cnt="content.rowCnt"
        :line-cnt="content.lineCnt"
      />
    </template>
    <!-- 美团导航 -->
    <nav-content />
  </div>
</template>

<script>
import SideMenu from '@/components/home/side-menu'
import NavBar from '@/components/home/navbar'
import MainContent from '@/components/home/main-content'
import NavContent from '@/components/home/nav-content'
import MovieContent from '@/components/home/movie'

export default {
  name: 'Index',

  components: {
    SideMenu,
    NavBar,
    MainContent,
    NavContent,
    MovieContent
  },

  data () {
    return {
      contentList: [
        {
          title: '有格调',
          bgColor: 'rgb(190, 164, 116)',
          rowCnt: 3,
          category: [
            {name: '全部', key: ''},
            {name: '约会聚餐', key: 'FoodItem'},
            {name: '丽人SPA', key: 'SpaItem'},
            {name: '电影演出', key: 'CinemaItem'},
            {name: '品质出游', key: 'HotelItem'}
          ],
          rawData: [{
            img: '//p1.meituan.net/mogu/3858734e1ceb0706608c0ab632ec5e4c156034.jpg@736w_416h_1e_1c',
            title: '百年义利（南小街店）',
            desc: '心花怒放（红丝绒）1个，约20厘米，圆形',
            price: 242,
            originPrice: 269,
            location: '建国门/北京站',
            category: 'FoodItem',
            type: 'FoodItem'
          },
          {
            img: '//p0.meituan.net/mogu/dc1d9d6166f95d474318ed3525125f9d100723.jpg@736w_416h_1e_1c',
            title: '金茂万丽酒店·万丽轩',
            desc: '万丽轩主厨推荐六人套餐，包间免费',
            price: 1280,
            originPrice: 2431,
            location: '王府井/东单',
            category: 'FoodItem',
            type: 'FoodItem'
          },{
            img: '//p1.meituan.net/msmerchant/eafc48adf49bb622e4a6fb17d0749bac215377.jpg@736w_416h_1e_1c',
            title: 'CAKEBOSS蛋糕老板（王府井apm店）',
            desc: '酷炫黑巧乳酪蛋糕1个，约2.8磅，圆形',
            price: 299,
            originPrice: 499,
            location: '王府井/东单',
            category: 'FoodItem',
            type: 'FoodItem'
          },
          {
            img: '//p1.meituan.net/msmerchant/a3d564e1a487b9fe263e100e8c77d928257807.jpg@736w_416h_1e_1c',
            title: '诺心LE CAKE（总店）',
            desc: '蛋糕6选1',
            price: 198,
            originPrice: 218,
            location: '国贸/建外',
            category: 'FoodItem',
            type: 'FoodItem'
          },
          {
            img: '//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@736w_416h_1e_1c',
            title: '哈根达斯（国瑞店）',
            desc: '800克欢乐芝间蛋糕冰淇淋1个，约800克，圆',
            price: 248,
            originPrice: 298,
            location: '崇文门',
            category: 'FoodItem',
            type: 'FoodItem'
          },
          {
            img: '//p0.meituan.net/msmerchant/d36d3be0df80b20ff5be6b5abef3bb01330177.jpg@736w_416h_1e_1c',
            title: 'Godiva（国瑞购物中心店）',
            desc: '松露型系列巧克力1颗，仅限自提，不提供配送',
            price: 9.9,
            originPrice: 30,
            location: '崇文门',
            category: 'FoodItem',
            type: 'FoodItem'
          },
          {
            img: '//p0.meituan.net/wedding/b9f1daad8a7f4f615208e3dfa995e105137326.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
            title: '佛伦斯私人定制烫染名店（亚运村店）',
            desc: '佛伦斯私人定制烫染名店（亚运村店）',
            price: 237,
            location: '亚运村',
            category: 'SpaItem',
            type: 'SpaItem'
          },
          {
            img: '//p1.meituan.net/wedding/f7ca26228604512b20a81ad5eaeab2ec281855.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
            title: '博士园防脱生发黑发养发中心（崇文门店）',
            desc: '博士园防脱生发黑发养发中心（崇文门店）',
            price: 237,
            location: '亚运村',
            category: 'SpaItem',
            type: 'SpaItem'
          },
          {
            img: '//p0.meituan.net/wedding/ee826d566b576907f647421fe415a6b572044.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
            title: 'Lovepink美甲美睫',
            desc: 'Lovepink美甲美睫',
            location: '亚运村',
            category: 'SpaItem',
            type: 'SpaItem'
          },
          {
            img: '//p1.meituan.net/wedding/6b522223bcb0547d4368b5145f99785e422981.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
            title: 'YOYO·美瑜（摩方购物中心店）',
            desc: 'YOYO·美瑜（摩方购物中心店）',
            price: 237,
            location: '亚运村',
            category: 'SpaItem',
            type: 'SpaItem'
          },
          {
            img: '//p0.meituan.net/poi/__4783417__9671691.jpg@736w_416h_1e_1c',
            title: '百老汇影城(东方广场店)',
            desc: '免押金,可停车,儿童票,RealD厅,60帧厅',
            price: 19.9,
            location: '亚运村',
            category: 'CinemaItem',
            type: 'SpaItem'
          },
          {
            img: '//p1.meituan.net/deal/201203/31/002.jpg@736w_416h_1e_1c',
            title: '广安门电影院',
            desc: '免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅',
            price: 19.9,
            category: 'CinemaItem',
            type: 'CinemaItem'
          },
          {
            img: '//p0.meituan.net/deal/__42960313__1244354.jpg@736w_416h_1e_1c',
            title: '百老汇影城(apm购物中心店)',
            desc: '免押金,可停车,儿童票,可刷卡,RealD厅,60帧厅',
            price: 19.9,
            category: 'CinemaItem',
            type: 'CinemaItem'
          },
          {
            img: '//p1.meituan.net/deal/__29661209__6853522.jpg@736w_416h_1e_1c',
            title: '中影国际影城(丰台千禧街店)',
            desc: '免押金,可停车,有情侣座,儿童票,可刷卡,休息区,中国巨幕厅,60帧厅',
            price: 19.9,
            category: 'CinemaItem',
            type: 'CinemaItem'
          },
          {
            img: '//p1.meituan.net/dnaimgdark/e5bb7737b2e3a0f84353bf9d5cce118d2788828.jpg@736w_416h_1e_1c',
            title: '北京希尔顿酒店',
            tag: ['酒店套餐', '房量充足', '发票推荐', '含早'],
            price: 860,
            category: 'HotelItem',
            type: 'HotelItem'
          },
          {
            img: '//p0.meituan.net/tdchotel/0838875a23e8cbe689c15a0c775f6ab3562154.jpg@736w_416h_1e_1c',
            title: '北京励骏酒店',
            tag: ['亲子场景酒店', '房量充足', '发票推荐', '亲子酒店'],
            price: 1167,
            category: 'HotelItem',
            type: 'HotelItem'
          },
          {
            img: '//p0.meituan.net/dnaimgdark/ee4f9274d0e9eaff90596d3852b7ffe32478600.jpg@736w_416h_1e_1c',
            title: '北京九华山庄国际会展大酒店',
            tag: ['酒店套餐', '房量充足', '发票推荐', '含早'],
            price: 616,
            category: 'HotelItem',
            type: 'HotelItem'
          },
          {
            img: '//p1.meituan.net/tdchotel/__24567842__1490663.jpg@736w_416h_1e_1c',
            title: 'Zsmart智尚酒店',
            tag: ['酒店套餐', '房量充足', '发票推荐', '含早'],
            price: 339,
            category: 'HotelItem',
            type: 'HotelItem'
          }]
        },
        {
          title: '推荐民宿',
          bgColor: 'rgb(243, 182, 74)',
          rowCnt: 2,
          lineCnt: 3,
          category: [
            {name: '南京', key: '南京'},
            {name: '杭州', key: '杭州'},
            {name: '苏州', key: '苏州'}
          ],
          rawData: [{
            img: '//p1.meituan.net/iphoenix/732c88f901435ae1f61fcb7a013ea0351542639.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/iphoenix/670062ed149eac62b5f5e231974c411c2885607.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'http://p0.meituan.net/iphoenix/8c4f96304521bfc89126569d144adb10318460.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/iphoenix/ee797f8c620d9df69b4d259e5569b37975162.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/iphoenix/c8157568b86af53411b5d45695e3dba82427951.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/iphoenix/eb7ef50571d728ce39bb6961a9abaf273076241.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '苏州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/iphoenix/aa9c2a931f6ff52c3bc773b520c30ab3807043.jpg@740w_416h_1e_1c',
            title: '【一期一会】南京南站夫子庙地中海风格地铁口超大三室最多住8人（现代小区一梯两户）',
            desc: '整套3居室·可住8人 | 南京南站/明发',
            price: 568,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/iphoenix/c1626da580aab9d4f0fc92529731baae7097057.jpg@740w_416h_1e_1c',
            title: '摩登日式 精致榻榻米 靠南京南站 毗邻夫子庙 地铁沿线 温馨舒适 干净整饬',
            desc: '整套1居室·可住2人 | 南京南站/证大喜马拉雅',
            price: 128,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/phoenix/abd50e6ecc185ae393309e57bf280eb8630866.jpg@740w_416h_1e_1c',
            title: '夫子庙景区好房',
            desc: '整套1居室·可住4人 | 夫子庙/水游城',
            price: 198,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/iphoenix/d596015cf28046134c932fca2d81d9d06394499.jpg@740w_416h_1e_1c',
            title: '摩登日式 温馨榻榻米  靠南京南站 毗邻夫子庙 地铁沿线 温馨舒适 干净整饬',
            desc: '整套1居室·可住2人 | 南京南站/证大喜马拉雅',
            price: 138,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/phoenix/158f18c1e0c4ea5e9c17d854438db2ba164565.jpg@740w_416h_1e_1c',
            title: '新街口珠江路地铁口君临国际原木自然影院房',
            desc: '整套1居室·可住2人 | 新街口/金轮/五台山体育中心',
            price: 200,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'http://p0.meituan.net/iphoenix/036d731e9344db985392db21ccb7af525663693.jpg@740w_416h_1e_1c',
            title: '【爱琴海】长江大桥-热河路-绣球公园-静海寺-阅江楼-峰云府简约风大床房',
            desc: '整套1居室·可住2人 | 大观/阅江楼',
            price: 298,
            category: '南京',
            type: 'HouseItem'
          },
          {
            img: 'http://p1.meituan.net/phoenix/c008c3d56c5db9823d2651d7678eafc01153286.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/phoenix/1ba8b52457d79c0bf8c21f613fdb14bc389029.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/phoenix/7a63a0278cfb0adab48a9e20d3c718cd475831.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          },
          {
            img: 'http://p0.meituan.net/iphoenix/b95ecc32dc9f2ce65f9f0a02e8a43c611592239.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/phoenix/b2d0333126fcca78f8d8f93c39644181405958.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          },
          {
            img: 'https://img.meituan.net/iphoenix/aae8456d36f118483d1e3446d479d209505870.jpg@740w_416h_1e_1c',
            title: '『花舍』姑苏区·平江路1min·近观前街|拙政园|狮子林|博物馆|山塘街|火车站【舒适2居】投影享受+智能家居+舒适床垫',
            desc: '整套2居室·可住5人 | 平江路',
            price: 398,
            category: '杭州',
            type: 'HouseItem'
          }]
        },
        {
          title: '猜你喜欢',
          bgColor: 'rgb(18, 210, 198)',
          rowCnt: 4,
          lineCnt: 3,
          category: [
            {name: '为你甄选最合适的', key: ''}
          ],
          rawData: [{
            img: '//p1.meituan.net/mogu/18c5e76a1bb79d5f4c460da90131a9a4412226.jpg@428w_240h_1e_1c',
            title: '炭香园自助烧烤（人民北路店）',
            score: 4.4,
            ratingCnt: 13915,
            location: '人民北路',
            price: 59.8,
            type: 'LikeItem'
          },
          {
            img: '//p1.meituan.net/bbia/01fa8981759bf069e150bee05c43fe3159913.jpg@428w_240h_1e_1c',
            title: '华莱士（朱家角店）',
            score: 5,
            ratingCnt: 606,
            location: '朱家角/东方绿舟',
            price: 3.5,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/joymerchant/1d2b209eeeb53ae00277a75eeb6f328d--1608407668.jpg@428w_240h_1e_1c',
            title: '君悦富侨（江桥店）',
            score: 5,
            ratingCnt: 443,
            location: '虹桥火车站/江桥',
            price: 149.0,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/apiback/ffd95965ac83a671942273c72a5f343e22929.jpg@428w_240h_1e_1c',
            title: '牛人自助纸上烤肉免费火锅（大柏树店）',
            score: 3.8,
            ratingCnt: 1658,
            location: '五角场/大学区',
            price: 58,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/mogu/db197e433eea2b48b047f307e88c5074769629.jpg@428w_240h_1e_1c',
            title: '爱尚自助火锅',
            score: 3,
            ratingCnt: 1436,
            location: '迪士尼',
            price: 59.9,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/msmerchant/0415c14f46e4f7488368fd1f6c1b023f3468678.jpg@428w_240h_1e_1c',
            title: '曼哈顿自助海鲜（百联滨江店）',
            score: 3.5,
            ratingCnt: 3996,
            location: '东外滩',
            price: 108.0,
            type: 'LikeItem'
          },
          {
            img: '//p1.meituan.net/deal/60942bdae68186c41bab7eb572af0f48110006.jpg@428w_240h_1e_1c',
            title: '鑫海汇烤肉自助餐厅（巴黎春天店）',
            score: 3,
            ratingCnt: 13128,
            location: '娄山关路/威宁路',
            price: 56.9,
            type: 'LikeItem'
          },
          {
            img: '//p1.meituan.net/dpmerchantalbum/97a69f279097dd484beb60fa4f75183059106.jpg@428w_240h_1e_1c',
            title: '春暖花开海鲜烤肉火锅自助餐厅（嘉定宝龙店）',
            score: 4,
            ratingCnt: 2865,
            location: '嘉定镇',
            price: 79.0,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/msmerchant/8551a3d4cfb323bd601fa646db733256239807.jpg@428w_240h_1e_1c',
            title: '桂源铺港式奶茶（浦东食品城店）',
            score: 4,
            ratingCnt: 18,
            // location: '人民北路',
            price: 8.0,
            type: 'LikeItem'
          },
          {
            img: '//p1.meituan.net/merchantpic/330eadaa1bd0f96a10f4767204934526279027.jpg@428w_240h_1e_1c',
            title: '纽斯桑拿会所（东绣路店）',
            score: 4,
            ratingCnt: 5705,
            location: '世纪公园',
            price: 98.0,
            type: 'LikeItem'
          },
          {
            img: '//p0.meituan.net/mogu/df621857d1ac3932bf43351492dc1155415154.jpg@428w_240h_1e_1c',
            title: '酷肯曼牛排自助餐（江桥万达店）',
            score: 4,
            ratingCnt: 643,
            location: '江桥万达广场',
            price: 61.0,
            type: 'LikeItem'
          },
          {
            img: '//p1.meituan.net/ugcpic/fe01af871d5be4621adcbbb809c7ab73@428w_240h_1e_1c',
            title: '小辉哥火锅（百联滨江店）',
            score: 4,
            ratingCnt: 3634,
            location: '东外滩',
            price: 55.9,
            type: 'LikeItem'
          }]
        }
      ],
      movieList:
        {
          title: '猫眼电影',
          bgColor: 'rgb(250, 60, 104)',
          rowCnt: 12,
          lineCnt: 1,
          category: [
            {name: '正在热映', key: 'release'},
            {name: '即将上映', key: 'upcoming'}
          ],
          rawData: [{
            img: '//p0.meituan.net/movie/fa1ed3d0df3aa7e7107e1077ed686f087257146.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '死侍2：我爱我家',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p1.meituan.net/movie/90fe8067e17b49379d312e46703d1c116750157.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '密室逃生',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p0.meituan.net/movie/c042fa48d4c53545a9b8a404dde760a13846552.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '白蛇缘起',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },{
            img: '//p1.meituan.net/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '大黄蜂',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p1.meituan.net/movie/70147090b78af5ab17c04c60889d42fe729655.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '飞驰人生',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p0.meituan.net/movie/6a21e35ad7106c60967954b165c09b92915222.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '疯狂的外星人',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p0.meituan.net/movie/ec30a55b1b20e7b8621bfb7682b530f9568248.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '新喜剧之王',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          },
          {
            img: '//p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@428w_594h_1e_1c',
            isIMax: true,
            name: '流浪地球',
            score: 7.4,
            isRelease: true,
            wantCnt: null,
            category: 'release',
            type: 'MovieItem'
          }]
        }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .banner-wrapper {
    width: 950px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;

    .nav {
      flex: 0 0 700px;
    }
  }
}
</style>

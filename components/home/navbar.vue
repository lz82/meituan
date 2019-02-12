<template>
  <div class="m-navbar">
    <ul class="top-nav">
      <li class="takeout">
        <nuxt-link to="/">美团外卖</nuxt-link>
      </li>
      <li class="movie">
        <nuxt-link to="/">猫眼电影</nuxt-link>
      </li>
      <li class="hotel">
        <nuxt-link to="/">美团酒店</nuxt-link>
      </li>
      <li class="house">
        <nuxt-link to="/">民宿/公寓</nuxt-link>
      </li>
      <li class="store">
        <nuxt-link to="/">商家入驻</nuxt-link>
      </li>
      <li class="charity">
        <nuxt-link to="/">美团公益</nuxt-link>
      </li>
    </ul>
    <div class="bottom-nav">
      <div class="line-one">
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div
                v-for="banner in banners"
                :key="banner"
                class="swiper-slide"
              >
                <nuxt-link to="/"><img :src="banner"></nuxt-link>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets" />
          </div>
        </div>
        <div class="login">
          <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg">
          <div class="welcome">Hi!你好</div>
          <el-button
            round
            class="btn-register"
          >
            注册
          </el-button>
          <el-button
            round
            class="btn-login"
          >
            立即登录
          </el-button>
        </div>
      </div>
      <div class="line-two">
        <div class="hotel" />
        <div class="skill" />
        <div class="qcode">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png">
          <div class="title">美团APP手机版</div>
          <div class="desc">
            <span class="price">1元起</span>
            <span class="content">吃喝玩乐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      banners: [
          'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
          'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
          'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
          'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
          'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
        ],
        swiperOption: {
          autoplay:true,
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet (index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            }
          }
          // pagination: '.swiper-pagination',
          // paginationBulletRender (swiper, index, className) {
          //   return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          // }
        }
    }
  }
}
</script>

<style lang="less" scoped>
.m-navbar {
 position: relative;
//  z-index: 1;
 margin: 10px 0 0 0;
 display: flex;
 flex-flow: column nowrap;
 width: 100%;
 .top-nav {
   position: absolute;
   left: 0;
   right: 0;
   top: -45px;
   display: flex;
   flex-flow: row nowrap;
   li {
     margin: 0 20px;
     font-size: 16px;
     font-weight: 700;
     a {
       color: #222;
       cursor: pointer;
     }
     &.takeout {
       a:hover {
         color:#fbc700;
       }
     }
     &.movie {
       a:hover {
         color:#ed1e24;
       }
     }
     &.hotel {
       a:hover {
         color:#f04d4e;
       }
     }
     &.house {
       a:hover {
         color:#FDC411;
       }
     }
     &.store {
       a:hover {
         color:#31BBAC;
       }
     }
     &.charity {
       a:hover {
         color:#f04d4e;
       }
     }
   }
 }
 .bottom-nav {
   .line-one {
     display: flex;
     flex-flow: row nowrap;
     .swiper-container {
       flex: 0 0 470px;
       width: 470px;
       height: 240px;
       margin: 0;
       .swiper-wrapper {
         .swiper-slide {
           img {
             width: 100%;
             height: 240px;
           }
         }
       }
     }
     .login {
       box-sizing: border-box;
       width: 230px;
       height: 240px;
       background-color: #fff;
       margin-left: 10px;
       border: solid 1px #e5e5e5;
       display: flex;
       flex-flow: column nowrap;
       padding-top: 30px;
       align-items: center;
       img {
         width: 55px;
         height: 55px;
         border-radius: 50%;
         margin-bottom: 4px;
       }
       .welcome {
         font-size: 16px;
         color: #222;
         font-weight: 500;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
       }
       .btn-register {
         margin: 10px auto 15px;
         width: 120px;
       }
       .btn-login {
         width: 120px;
       }
     }
   }
   .line-two {
     display: flex;
     flex-flow: row nowrap;
     .hotel {
       background: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png) no-repeat;
       background-position: 0 center;
       background-size: 230px 165px;
       width: 230px;
       height: 165px;
       margin: 10px 10px 0 0 ;
     }
     .skill {
       background: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg) no-repeat;
       background-position: 0 center;
       background-size: 230px 165px;
       width: 230px;
       height: 165px;
       margin: 10px 10px 0 0 ;
     }
     .qcode {
       box-sizing: border-box;
       width: 230px;
       height: 165px;
       background-color: #fff;
       margin-top: 10px;
       padding-top: 10px;
       border: solid 1px #e5e5e5;
       display: flex;
       flex-flow: column nowrap;
       align-items: center;
       img {
         width: 95px;
         height: 95px;
       }
       .title {
         font-size: 16px;
         line-height: 22px;
         font-weight: 500;
         color: #222;
       }
       .desc {
         margin-top: 2px;
         font-size: 12px;
         font-weight: 500;
         .price {
           color: #EC5330;
           margin-right: 5px;
         }
       }
     }
   }
 }

 /deep/.swiper-pagination-bullet-custom {
    width: 10px;
    height: 2px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0;
  }
  /deep/.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #fff;
  }
}
</style>

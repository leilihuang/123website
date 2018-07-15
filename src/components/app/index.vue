<template>
  <div id="app" class="app">
    <div class="header-box">
      <div class="bg">
        <img class="logo" src="./images/logo.png" />
        <div class="title-box">
          <span v-for="(title, index) in menus" :key="index">
               <router-link :to='{ path: title.url }'> {{title.name}} </router-link>
          </span>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="footer-box">
      <div class="con clearfix">
        <div class="gzh">
          <img src="./images/gzh.jpeg" alt="">
          <div class="bah">微信公众号</div>
        </div>
        <div class="center">
          <img class="logo" src="./images/logo.png" alt="">
          <div class="bah t10">Copyright©xxxxxxx有限公司.沪ICP证1???号.沪ICP备???号-?</div>
          <div class="bah">报名热线：400-176-8367</div>
          <div class="bah">地址：上海市普陀区武宁路350号联合大厦3楼</div>
          <div class="bah">合作邮箱：haiping@123footballclub.com</div>
          <div class="bah">工作时间：09:00~22:00</div>
        </div>
        <div class="yqlj">
          <div class="title">友情链接</div>
          <a href="#" class="link-item">阿里体育</a>
          <a href="#" class="link-item">腾讯体育</a>
          <a href="#" class="link-item">新浪体育</a>
          <a href="#" class="link-item">凤凰体育</a>
          <a href="#" class="link-item">搜狐体育</a>
          <a href="#" class="link-item">虎扑体育</a>
          <a href="#" class="link-item">莱赛体育</a>
          <a href="#" class="link-item">网易体育</a>
          <a href="#" class="link-item">央视体育</a>
          <a href="#" class="link-item">五星体育</a>
          <a href="#" class="link-item">劲爆体育</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menus: [{
            name: '首页',
            url: '/'
          },
          {
            name: '关于我们',
            url: '/about'
          },
          {
            name: '网点分布',
            url: '/field'
          },
          {
            name: '私人订制',
            url: '/customized'
          },
          {
            name: '招贤纳士',
            url: '/recruit'
          },
          {
            name: '足球直播',
            url: '/broadcast'
          },
        ],
        defualtCur: 0,
      };
    },
    computed: {
  
    },
    methods: {
      setCur(index, url) {
        this.defualtCur = index;
        this.$router.push(url);
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../../../static/css/index.less';
  @import './index.less';
</style>

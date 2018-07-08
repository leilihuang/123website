<template>
	<div class="broadcast">
		<div id="ckplay" class="ckplay"></div>
    
    <div class="wl-box">
      <div class="pay-tit">网络电视｜赛事直播</div>
      <div class="pay-list clearfix">
        <div class="pay-name"
          v-for="item in relayList"
          @click="curPay(item.relay_url)">
          {{item.relay_name}}
        </div>
      </div>
    </div>
		
    <div class="ifram">
  		<iframe src="//freelive.7m.com.cn/live.aspx?mark=gb&TimeZone=%2B0800&wordAd=&wadurl=http://&width=1200&cpageBgColor=FFFFFF&tableFontSize=12&cborderColor=333333&ctdColor1=EEEEEE&ctdColor2=FFFFFF&clinkColor=0044DD&cdateFontColor=FFFFFF&cdateBgColor=333333&scoreFontSize=12&cteamFontColor=000000&cgoalFontColor=FF0000&cgoalBgColor=FFFF99&cremarkFontColor=000000&cremarkBgColor=F7F8F3&Skins=2&teamWeight=400&scoreWeight=700&goalWeight=700&fontWeight=700&DSTbox=&away=1&red=0" height="800" width="1250" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes"></iframe>
    </div>
	</div>
</template>
<script type="text/javascript">
import Util from '../../common/tools/ajax';

export default {
  name: 'broadcast',
  data() {
    return {
      relayList: [],
      ckUrl: '',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      Util.api({
        url: 'front/getRelayUrlList',
        method: 'POST',
      })
        .then((res) => {
          if (res.code === 0) {
            this.relayList = res.data.list;
            this.initCkPlay(res.data.list);
          }
        });
    },
    initCkPlay(data) {
      const videoObject = {
        container: '#ckplay', // “#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player', // 该属性必需设置，值等于下面的new chplayer()的对象
        flashplayer: false, // 如果强制使用flashplayer则设置成true
        video: data[0].relay_url, // 视频地址
      };
      const player = new ckplayer(videoObject);
    },
    curPay(url) {
      console.log('url================', url);
    },
  },
};
</script>
<style scoped lang="less">
@import "../../../static/css/index.less";
@import "./index.less";
</style>

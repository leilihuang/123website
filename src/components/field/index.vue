<template>
    <div class="field-box">
        <!--banner-->
        <div class="banner-box u-banner">

        </div>
        <div class="con-box">
            <div class="g1 mt10">
                <div class="title-bg title-text">开放预约网点</div>
                <div class="contact-wrap">
                    <p class="field-floor1-text">
                        123足球在球场的选择上，除了便利性和环境之外，我们最为看重的是安全性。 让孩子在一个标准规格、安全的环境下享受足球，是家长、也是我们最关注的事情。
                    </p>
                    <p class="field-floor1-text red"> 以下是我们目前尚有时间段与名额、并开放预约体验课的球场</p>
                </div>
            </div>
            <div class="g1 mt10">
                <div class="field-con">
                    <div class="field-table">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="上海市" name="first">
                                <el-table :data="dataList" style="width: 100%" :row-class-name="tableRowClassName">
                                    <el-table-column header-align="center" prop="center_address" label="场地" >
                                    </el-table-column>
                                    <el-table-column header-align="center"  prop="class_date" label="时间" >
                                    </el-table-column>
                                    <el-table-column header-align="center"  prop="class" label="班级">
                                    </el-table-column>
                                     <el-table-column header-align="center"  prop="class_address" label="地址">
                                    </el-table-column>
                                </el-table>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="field-oper">
                        <h3>没有家附近到球场怎么办？！</h3>
                        <p>
                            如果您希望我们可以在<span style="color: #ff0000;">您附近开班</span>，请立刻与我们取得联系！<br> （每个班满6人开班，最多满15人停止招生）
                        </p>
                        <a class="oper-button" @click="goPage"></a>
                    </div>
                </div>
            </div>
            <div class="g1 mt10">
                <div class="title-bg title-text">参加足球培训会影响学习吗？！</div>
                <div class="contact-wrap" style="padding-bottom: 76px;">
                    <div class="text-wrap">
                        <h4>
                            踢足球与文化学习冲突吗?
                        </h4>
                        <p>
                            在中国足球步入低谷的今天，足球运动被大多数家长和老师误解，认为踢球是玩物丧志，耽误学习。
                        </p>
                        <p>
                            其实不然：踢足球和学习不仅是不矛盾的，而且是相互促进的
                        </p>
                        <p>
                            这并非空穴来风，美国斯坦福成就研究室研究证明： 孩子们在足球运动时会产生多巴胺、血清素和正肾上腺素， 这三种神经传导物质都和学习有关。
                        </p>
                        <p>
                            多巴胺是种正向的情绪物质，人要快乐， 大脑中一定要有多巴胺，我们的快乐中心伏隔核里面都是多巴胺的受体。 我们看到运动完的人心情都愉快，踢完球的孩子精神都亢奋，脾气都很好
                        </p>
                        <p>
                            血清素跟我们的情绪和记忆有直接的关系。 血清素增加，记忆力变好，学习的效果也更好了。 很多抗忧郁症的药都是阻挡大脑中血清素的回收，以使大脑中的血清素比较多
                        </p>
                        <p>
                            正肾上腺素跟注意力有直接的关系，它在孩子们球场上面对对手决定要过或要传时分泌得最多。 正肾上腺素使孩子的专注力增强。所以学生心情愉快、上课专心，记得快、学得好，自信心与自尊心也会相应提升。 研究者也发现在斯坦福成就测验中，那些体能好的学生数学胜过全体的67%， 英文胜过全体的45%。2014年由小儿科医生、认知科学家等组合的团队对学生健康做了一个评估， 发现一周只要运动3到5次，每次45到60分钟，就能大大提升孩子记忆、注意力和教室行为的正向效果
                        </p>
                        <p>
                            看到足球运动对学生学习和行为的好处，学校体育课节数不但不该减少， 还应该增加才对，然而中国学生超强的学业任务和学业压力，我们的校园， 很多不注重体育课，很多学校，甚至把体育课调去补英文或数学， 体育课和运动对很多孩子来说看上去更是奢侈而遥不可及，忽视了体育运动对孩子们成长和学习中的重要性。
                        </p>
                        <p>
                            我们通过全国各地开设足球培训中心发现，很多父母都有这种迷思， 以为运动会浪费孩子时间和体力，其实，运动跟智慧有直接关系。 全世界太多研究学生运动和学业成绩的关系的实验已经一次次证明， 孩子们运动后的精力、体力恢复能力远比我们想象中好，每天上一个小时体育课的孩子在考试成绩上比较好
                        </p>
                        <p>
                            我们的祖先希腊人，早在两千年前就看到体育的重要性，他们的孩子16岁以前最注重的便是体育。 有了强健的身体，知识才有意义；失去健康和生命的话，再多的知识都无用武之地。 123足球希望充分利用孩子们闲暇周末或下午课余，通过足球，用最科学、愉悦的方式来提升他们的体能与学习效果。
                        </p>
                        <p>
                            我们有理由相信，孩子们通过踢足球有了强壮的身体和强韧的意志， 必然能够促进学业的发展；而受过高等教育的足球运动员， 凭借其丰富知识与智慧则更能够在足球场上体现出更高的竞技水平。 这其实才是足球长期发展需要遵循的路线，我们希望孩子们通过自己对足球的持之以恒， 让孩子们既能通过锻炼获得良好的身体素质，又能以充沛的精力学业有成
                        </p>
                    </div>
                    <div class="process-wrap">
                        <div class="process-title">
                            <div class="process right">
                                <img class="icon-img" src="./images/field-rght-icon.png" />
                                <span>倡导“文武双全”发展的足球理念</span>
                            </div>
                            <div class="process error">
                                <img class="icon-img" src="./images/field-error-icon.png" />
                                <span>缺少素质教育的中国足球现状</span>
                            </div>
                        </div>
                        <img class="process-img" src="./images/field-process.jpg" />
                        <p class="process-bottom-text">
                            柏拉图说：为了让人类有成功的生活，神提供了两种管道——教育与运动。 我们也越来越看到，这两种管道是相辅相成、缺一不可的。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import {
  Tabs,
  TabPane,
  Table,
  TableColumn,
} from 'element-ui';
import Util from '../../common/tools/ajax';

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);

export default {
  name: 'field',
  data() {
    return {
      activeName: 'first',
      dataList: [],
    };
  },
  mounted() {
    this.getTable();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getTable() {
      Util.api({
        url: 'front/getAddressList',
        method: 'POST',
      }).then((res) => {
        const {
          code,
          data,
        } = res;
        if (code === 0) {
          this.dataList = data.list;
        }
      });
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      }
      return '';
    },
    goPage() {
        this.$router.push({path: '/customized'});
    }
  },
};
</script>

<style lang="less">
    @import "../../../static/css/index.less";
    @import "./index.less";
</style>

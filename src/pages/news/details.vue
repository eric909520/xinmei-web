<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Img from "@/assets/images/pc/news.png"
const state = reactive({
  options:{
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
     credits: {
      "enabled": false,
      "label": '1',
      "position": 'right'
    },
  }
})
const fullpage = ref(null)
const isMobile = inject('isMobile')
onMounted(()=>{
   fullpage.value.api.moveTo(1)
})
const { t } = useI18n()
</script>

<template>
 <div :class="isMobile ? 'big_box m_big_box':'big_box'">
    <fullPage  class="full-page" ref="fullpage"  :options="state.options">
        <div class="section section0" v-if="!isMobile">
            <div class="container">
                <div>
                    <p class="title">{{t('news_center')}}</p>
                    <p class="content">{{t('news_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1" v-if="!isMobile">
            <div class="news_list">
                <p class="title">受邀出席河北省太阳能光伏标准化技术委员会换届大会</p>
                <p class="time">发布时间：2023.08.26</p>
                <p class="content">
                    8月22日，河北省太阳能光伏标准化技术委员会换届大会暨第二届委员会第一次工作会议在河北省保定市隆重召开。晶澳科技宁晋基地常务副总经理王松和曲靖基地质量部高级经理张瑞强分别被聘任为河北省太阳能光伏标准化技术委员会副秘书长和委员。此外，晶澳科技产品技术部高级经理姚艳艳分享了《DeepBlue 4.0 Pro：统一矩形硅片尺寸，实现行业融合共赢》报告，介绍了DeepBlue 4.0 Pro的技术特性和客户价值分析。

在换届仪式中，晶澳科技宁晋基地常务副总经理王松和曲靖基地质量部高级经理张瑞强分别被聘任为河北省太阳能光伏标准化技术委员会副秘书长和委员。河北省太阳能光伏标准化技术委员会是河北省唯一一家光伏领域专业标准化技术委员会，负责河北省太阳能光伏领域标准的制修订和相关标准的宣贯等工作。本届委员会涵盖企业、科研院所、检测机构、高等院校和行业协会等方面，由33名专家组成。此次受聘，再次彰显了晶澳科技在推动光伏领域标准化工作、促进行业降本增效中发挥的重要作用。

在主旨演讲环节，晶澳科技产品技术部高级经理姚艳艳分享了《DeepBlue 4.0 Pro：统一矩形硅片尺寸，实现行业融合共赢》报告，介绍了DeepBlue 4.0 Pro的技术特性和产品价值分析。DeepBlue 4.0 Pro是晶澳科技于今年5月份在上海SNEC展会新推出的高效n型组件系列产品。该系列组件以n型钝化接触Bycium+电池技术为核心，集成了SMBB技术、高密度封装技术等提质增效技术，并且通过采用更具行业包容性的182mm*199mm矩形硅片，可以使72版型组件功率达到630W，组件效率超过22.5%。采用此硅片还能同时满足1762mm、2333mm、2382mm和2465mm等四种长度的主流版型组件的生产，以适应市场不同场景下的多样化应用需求。

长期以来，晶澳科技高度重视光伏行业相关标准的制定及落实，致力于推动行业的规范化、标准化发展，在推动制定行业内相关制度、技术工艺标准和执行操作规范等方面发挥了重要作用。2021年，晶澳科技凭借在推进标准编制进度中的出色表现，获得“2021年标准制定先进单位”称号；2022年，晶澳科技主导起草的团体标准《晶体硅光伏电池电极剥离强度测试方法》(标准号：T/CSTM 00461-2022)正式实施。
                </p>
                <div class="action_box">
                    <p>上一篇：致力于推动行业的规范化</p>
                    <p>下一篇：致力于推动行业的规范化</p>
                </div>
            </div>
        </div>
        <div class="section section1" v-if="isMobile">
            <div class="contetn_box">
                <p class="title">受邀出席河北省太阳能光伏标准化技术委员会换届大会</p>
                <p class="time">发布时间：2023.08.26</p>
                <img :src="Img" alt="">
                <p class="content">
                    8月22日，河北省太阳能光伏标准化技术委员会换届大会暨第二届委员会第一次工作会议在河北省保定市隆重召开。晶澳科技宁晋基地常务副总经理王松和曲靖基地质量部高级经理张瑞强分别被聘任为河北省太阳能光伏标准化技术委员会副秘书长和委员。此外，晶澳科技产品技术部高级经理姚艳艳分享了《DeepBlue 4.0 Pro：统一矩形硅片尺寸，实现行业融合共赢》报告，介绍了DeepBlue 4.0 Pro的技术特性和客户价值分析。

                    在换届仪式中，晶澳科技宁晋基地常务副总经理王松和曲靖基地质量部高级经理张瑞强分别被聘任为河北省太阳能光伏标准化技术委员会副秘书长和委员。河北省太阳能光伏标准化技术委员会是河北省唯一一家光伏领域专业标准化技术委员会，负责河北省太阳能光伏领域标准的制修订和相关标准的宣贯等工作。本届委员会涵盖企业、科研院所、检测机构、高等院校和行业协会等方面，由33名专家组成。此次受聘，再次彰显了晶澳科技在推动光伏领域标准化工作、促进行业降本增效中发挥的重要作用。

                    在主旨演讲环节，晶澳科技产品技术部高级经理姚艳艳分享了《DeepBlue 4.0 Pro：统一矩形硅片尺寸，实现行业融合共赢》报告，介绍了DeepBlue 4.0 Pro的技术特性和产品价值分析。DeepBlue 4.0 Pro是晶澳科技于今年5月份在上海SNEC展会新推出的高效n型组件系列产品。该系列组件以n型钝化接触Bycium+电池技术为核心，集成了SMBB技术、高密度封装技术等提质增效技术，并且通过采用更具行业包容性的182mm*199mm矩形硅片，可以使72版型组件功率达到630W，组件效率超过22.5%。采用此硅片还能同时满足1762mm、2333mm、2382mm和2465mm等四种长度的主流版型组件的生产，以适应市场不同场景下的多样化应用需求。

                    长期以来，晶澳科技高度重视光伏行业相关标准的制定及落实，致力于推动行业的规范化、标准化发展，在推动制定行业内相关制度、技术工艺标准和执行操作规范等方面发挥了重要作用。2021年，晶澳科技凭借在推进标准编制进度中的出色表现，获得“2021年标准制定先进单位”称号；2022年，晶澳科技主导起草的团体标准《晶体硅光伏电池电极剥离强度测试方法》(标准号：T/CSTM 00461-2022)正式实施。
                </p>
                <div class="action_box">
                    <p>上一篇：致力于推动行业的规范化</p>
                    <p>下一篇：致力于推动行业的规范化</p>
                </div>
            </div>
        </div>
         <div class="section section7" v-if="isMobile">
            <Footer/>
        </div>
        <div class="section section6" v-else>
            <Footer/>
        </div>   
    </fullPage>
 </div>
</template>

<style scoped lang="scss">
.big_box {
    width: 100%;
    .full-page {
      width: 100%;
      .section {
        width: 100%;
        height: 100%;
        .container {
            width: 887px;
            margin: 0 auto;
            display: flex;
            justify-content:center;
            .title {
                font-size: 50px;
                color: #fff;
                margin-bottom: 30px;
            }
            .content {
                font-size: 16px;
                color: #fff;
                line-height: 32px;
            }
        }
        .news_list {
            width: 1200px;
            margin: 0 auto;
            .title {
                font-size: 30px;
                color: #393C41;
            }
            .time {
                color: #333333;
                font-size: 14px;
                margin-top: 10px;
                margin-bottom: 30px;
            }
            .content {
                font-size: 16px;
                color: #333333;
                text-align: left;
            }
            .action_box {
                margin-top: 40px;
                p {
                    text-align: left;
                    font-size: 16px;
                    color: #333333;
                    margin-bottom: 15px;
                    cursor: pointer;
                }
            }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/news.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
      }
      .section1 {
        padding-top: 50px;
        padding-bottom: 20px;
        justify-content: flex-start;
        background: #F1F3F4;
        // height: 150%;
         ::v-deep {
            .fp-overflow {
               height: 100%;
            //    height: 150%;
            }
            .fp-overflow::-webkit-scrollbar {
                display: none; /* Chrome Safari */
                }

                .fp-overflow {
                scrollbar-width: none; /* firefox */
                -ms-overflow-style: none; /* IE 10+ */
                overflow-x: hidden;
                overflow-y: auto;
                }
         }
      }
    }
}
.m_big_box {
    .full-page {
        .section {

        }
        .section1 {
            .contetn_box {
                width: calc(100% - 40px);
                margin: 0 auto;
                .title {
                    font-size: 20px;
                    color: #171A20;
                }
                .time {
                    margin: 20px 0;
                    font-size: 14px;
                    color: #333333;
                }
                .content {
                    font-size: 14px;
                    color: #333333;
                    line-height: 24px;
                }
                img {
                    width: 100%;
                    height: auto;
                }
                .action_box {
                    margin-top: 20px;
                    p {
                        text-align: left;
                    }
                }
            }
        }
    }
}
</style>

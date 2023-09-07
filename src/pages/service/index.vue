<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
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
        <div class="section section0">
            <div class="container">
                <div>
                    <p class="title">{{t('service')}}</p>
                    <p class="content">{{t('service_content')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="top">
                <p class="title">{{t('watch_day_subtitle')}}</p>
                <p class="subtitle">{{t('watch_day_subtitle_content')}}</p>
                <img src="@/assets/images/pc/service_1.png" alt="">
            </div>
            <div class="middle">
                <div class="left">
                    <p class="title">{{t('check_anytime')}}</p>
                    <p class="subtitle">{{t('check_anytime_content')}}</p>
                </div>
                <div class="right">
                    <img src="@/assets/images/pc/service_2.png" alt="">
                </div>
            </div>
            <div v-if="isMobile" class="middle">
                 <div class="left">
                    <p class="title">{{t('hot_line')}}</p>
                    <p class="subtitle">{{t('hot_line_content1')}}</p>
                    <p class="subtitle">{{t('hot_line_content2')}}</p>
                </div>
                <div class="right">
                    <img src="@/assets/images/pc/service_3.png" alt="">
                </div>
            </div>
            <div class="middle" v-else>
                <div class="right">
                    <img src="@/assets/images/pc/service_3.png" alt="">
                </div>
                <div class="left" style="margin-left:70px">
                    <p class="title">{{t('hot_line')}}</p>
                    <p class="subtitle">{{t('hot_line_content1')}}</p>
                    <p class="subtitle">{{t('hot_line_content2')}}</p>
                </div>
            </div>
        </div>
        <div class="section section2">
            <div class="container">
                <div>
                    <p class="title">{{t('sys_authority')}}</p>
                    <p class="content">{{t('sys_authority_content1')}}</p>
                    <p class="content">{{t('sys_authority_content2')}}</p>
                    <p class="content">{{t('sys_authority_content3')}}</p>
                    <div v-if="isMobile" class="authority">
                        <img src="@/assets/images/mobile/authority.png" alt="" >
                        <img src="@/assets/images/mobile/authority2.png" alt="">
                    </div>
                    <img src="@/assets/images/pc/authority.png" v-else alt="" style="width:1200px;height:auto;margin-top:40px">
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
            width: 953px;
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
        .top {
            .title {
                font-size: 50px;
                color: #393C41;
                margin-bottom: 30px;
            }
            .subtitle {
                width: 953px;
                margin: 0 auto;
                font-size: 16px;
                color: #333333;
            }
        }
        .middle {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            .left {
                .title {
                    font-size: 50px;
                    color: #393C41;
                    margin-bottom: 30px;
                }
                .subtitle {
                    width: 425px;
                    font-size: 16px;
                    color: #333333;
                    text-align: left;
                }
            }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/service1.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 80px;
      }
      .section2 {
         background: url("../../assets/images/pc/service2.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
      }
      .section1 {
        padding-top: 70px;
        padding-bottom: 40px;
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
            .container {
                align-items:center;
                width: 100%;
                .title {
                    color: #fff;
                    font-size: 30px;
                }
                .content {
                    width: 315px;
                    color: #fff;
                    margin-bottom: 15px;
                }
            }
        }
        .section0 {
             background: url("../../assets/images/mobile/service-1.png") no-repeat center;
             background-size: 100% 100%;
        }
        .section1 {
            .top {
                width: calc(100% - 20px);
                margin: 0 auto;
                .title {
                    font-size: 30px;
                    color: #171A20;
                    margin-bottom: 10px;
                }
                .subtitle {
                    width: 318px;
                }
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .middle {
                width: calc(100% - 20px);
                margin: 0 auto;
                flex-direction: column;
                align-items: center;
                .left {
                    .title {
                        font-size: 30px;
                        color: #171A20;
                        margin-bottom: 10px;
                    }
                    .subtitle {
                        width: 318px;
                    }
                }
                .right {
                    img {
                        width: 100%;
                        height:  auto;
                    }
                }
            }
        }
        .section2 {
             background: url("../../assets/images/mobile/service-2.png") no-repeat center;
             background-size: 100% 100%;
             .container {
                .title {
                    color: #fff;
                    font-size: 30px;
                }
                .content {
                    width: 100%;
                    font-size: 12px;
                    margin-bottom: 0;
                    line-height: 24px;
                }
                .authority {
                    margin-top: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 10px;
                    img {
                        width: 281px;
                        height: auto;
                    }
                }
             }
        }
    }
}
</style>

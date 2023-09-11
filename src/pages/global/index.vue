<script setup>
import { computed, onMounted, reactive, ref ,inject} from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Partener1 from "@/assets/images/pc/partener_1.png"
import Partener2 from "@/assets/images/pc/partener_2.png"
import Partener3 from "@/assets/images/pc/partener_3.png"
import Partener4 from "@/assets/images/pc/partener_4.png"
import Partener5 from "@/assets/images/pc/partener_5.png"
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
const partenerList = ref([
    {img:Partener1,id:1},
    {img:Partener2,id:2},
    {img:Partener3,id:3},
    {img:Partener4,id:4},
    {img:Partener5,id:5}
])
onMounted(()=>{
   fullpage.value.api.moveTo(1)
})
const { t } = useI18n()
</script>
<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
         <fullPage  class="full-page" ref="fullpage"  :options="state.options">
            <div class="section section0">
                <div class="container">
                     <div>
                        <p class="title">{{t('global_map')}}</p>
                        <p class="content">{{t('blobal_details')}}</p>
                    </div>
                </div>
            </div>   
            <div class="section section1" v-if="isMobile">
                <p class="title">{{t('partener')}}</p>
               <ul>
                    <li v-for="(item,index) in partenerList" :key="item.id">
                        <img :src="item.img" alt="">
                    </li>
               </ul>
            </div> 
            <div class="section section1" v-else>
               <ul>
                    <li v-for="(item,index) in partenerList" :key="item.id">
                        <img :src="item.img" alt="">
                    </li>
               </ul>
               <p class="title">{{t('partener')}}</p>
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
<style lang="scss" scoped>
.norem-big_box {
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
        ul {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            gap: 88px;
            li {
                position: relative;
                &:nth-child(1) {
                    img {
                        width: 117px;
                        height: 44px;
                    }
                }
                &:nth-child(2) {
                    img {
                        width: 117px;
                        height: 44px;
                    }
                }
                &:nth-child(2) {
                    img {
                        width: 113px;
                        height: 43px;
                    }
                }
                &:nth-child(3) {
                    img {
                        width: 116px;
                        height: 39px;
                    }
                }
                &:nth-child(4) {
                    img {
                        width: 120px;
                        height: 39px;
                    }
                }
                &:nth-child(5) {
                    img {
                        width: 79px;
                        height: 39px;
                    }
                    &::after {
                        width: 0;
                    }
                }
                &::after {
                    content: "";
                    width: 1px;
                    height: 26px;
                    background: #fff;
                    position: absolute;
                    right: -44px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        .title {
            margin-top: 88px;
            color: #fff;
            font-size: 50px;
        }
      }
      .section0 {
         background: url("../../assets/images/pc/global1.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
      }
      .section1 {
         background: url("../../assets/images/pc/global2.png") no-repeat center;
         background-size: 100% 100%;
        justify-content: flex-start;
         padding-top: 120px;
      }
    }
}
.m_big_box {
    .full-page {
       width: 100%;
       .section {
         width: 100%;
         height: 100%;
        .container {
            justify-content: center;
            width: 100%;
            gap: 42px;
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
            background: url("../../assets/images/mobile/bg3-1.png") no-repeat center;
            background-size: 100% 100%;
            justify-content: flex-start;
            padding-top: 90px;
        }
      .section1 {
         background: url("../../assets/images/mobile/bg3-2.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: space-between;
        padding: 0;
        ::v-deep {
            .fp-overflow {
               height: 100%;
                padding-top: 90px;
                 padding-bottom: 70px;
                 display: flex;
                 flex-direction: column;
               justify-content: space-between;
                .title {
                    color: #fff;
                    font-size: 30px;
                }
                ul {
                    width: calc(100% - 50px);
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 40px;
                    li {
                        position: relative;
                        &:nth-child(1) {
                            img {
                                width: 59px;
                                height: 22px;
                            }
                        }
                        &:nth-child(2) {
                            img {
                                width: 59px;
                                height: 22px;
                            }
                        }
                        &:nth-child(2) {
                            img {
                                width: 56px;
                                height: 21px;
                            }
                        }
                        &:nth-child(3) {
                            img {
                                width: 58px;
                                height: 20px;
                            }
                        }
                        &:nth-child(4) {
                            img {
                                width: 60px;
                                height: 20px;
                            }
                        }
                        &:nth-child(5) {
                            img {
                                width: 40px;
                                height: 20px;
                            }
                            &::after {
                                width: 0;
                            }
                        }
                        &::after {
                            content: "";
                            width: 1px;
                            height: 26px;
                            background: #fff;
                            position: absolute;
                            right: -22px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
         }
      }
    }
}
</style>
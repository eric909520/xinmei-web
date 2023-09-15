<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Icon1 from "@/assets/images/pc/cnicon_1.svg"
import Icon2 from "@/assets/images/pc/cnicon_2.svg"
import Icon3 from "@/assets/images/pc/cnicon_3.svg"
const { t } = useI18n()
const router = useRouter()
const isMobile = inject('isMobile')
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
const introList = [
    {title:t('storage'),subTitle:t("storage_subtitle"),icon:Icon1},
    {title:t('watch_day'),subTitle:t('watch_day_subtitle'),icon:Icon2},
    {title:t('soft_control'),subTitle:t('soft_control_subtitle'),icon:Icon3},
]
const productList = [
    {title:t('product_special1'),content:t('product_special1_content')},
    {title:t('product_special2'),content:t('product_special2_content')},
    {title:t('product_special3'),content:t('product_special3_content')},
    {title:t('product_special4'),content:t('product_special4_content')},
    {title:t('product_special5'),content:t('product_special5_content')},
    {title:t('product_special6'),content:t('product_special6_content')},
    {title:t('product_special7'),content:t('product_special7_content')}
]
const toDetails = (item)=>{
    router.push('/news-details')
}
onMounted(()=>{
})
</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <div class="full-page">
        <div class="section section0" data-aos="zoom-out">
            <div class="container">
                <div>
                    <p class="title" data-aos="fade-down">{{t('power_system')}}</p>
                    <p class="content" data-aos="fade-up">{{t('power_system_intro')}}</p>
                </div>
            </div>
            <div class="bottom_list">
                <div class="content" v-for="(item,index) in introList" :key="index" data-aos="flip-left">
                    <img :src="item.icon" alt="">
                    <p class="title">{{item.title}}</p>
                    <p class="name">{{item.subTitle}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="container_center1" v-if="isMobile">
                <p class="title" data-aos="fade-down">{{t('product_special')}}</p>
                <p class="subtitle" data-aos="fade-up">{{t('product_special_content')}}</p>
               <div class="top">
                    <img src="@/assets/images/mobile/cnproduct.png" alt="" data-aos="fade-up">
               </div>
               <div class="bottom">
                    <ul>
                        <li v-for="(item,index) in productList" :key="index" data-aos="fade-left">
                            <p class="title_li">{{item.title}}</p>
                            <p class="content">{{item.content}}</p>
                        </li>
                    </ul>
               </div>
            </div>
            <div class="container_center" v-else>
               <div class="left">
                    <img src="@/assets/images/pc/cnproduct.png" alt="" data-aos="fade-right">
               </div>
               <div class="right">
                    <p class="title" data-aos="fade-down">{{t('product_special')}}</p>
                    <p class="subtitle" data-aos="fade-up">{{t('product_special_content')}}</p>
                    <ul>
                        <li v-for="(item,index) in productList" :key="index" data-aos="fade-left">
                            <p class="title_li">{{item.title}}</p>
                            <p class="content">{{item.content}}</p>
                        </li>
                    </ul>
               </div>
            </div>
        </div>
        <div class="section section2">
           <div class="container">
                <div>
                    <p class="title" data-aos="fade-down">{{t('max_value')}}</p>
                    <p class="content" data-aos="fade-up">{{t('max_value_intro')}}</p>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<style scoped lang="scss">
.norem-big_box {
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
            // margin-top: 120px;
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
        .container_center {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 190px;
            padding: 0 20px;
            .left {
                img {
                    width: 673px;
                    height: 407px;
                }
            }
            .right {
                width: 540px;
                .title {
                    font-size: 50px;
                    color: #FFFFFF;
                    margin-bottom: 20px;
                    text-align: left;
                }
                .subtitle {
                    font-size: 16px;
                    color: #FFFFFF;
                    text-align: left;
                    opacity: 0.9;
                }
                ul {
                    margin-top: 30px;
                    li {
                        margin-bottom: 10px;
                        position: relative;
                        p {
                            text-align: left;
                        }
                        .title_li {
                            font-size: 18px;
                            color: #fff;
                        }
                        .content {
                            opacity: 0.9;
                            color: #fff;
                            font-weight: 400;
                            font-size: 16px;
                        }
                        &::before {
                            content:"";
                            width: 6px;
                            height: 6px;
                            border-radius: 3px;
                            background: #fff;
                            position: absolute;
                            top: 10px;
                            left: -15px;
                        }
                    }
                }
            }
        }
        .bottom_list {
            display: flex;
            justify-content: center;
            align-items: center;
            gap:120px;
            margin-bottom: 80px;
            .content {
                .title {
                    color: #fff;
                    font-size: 18px;
                    margin-top: 20px;
                }
                .name {
                    font-size: 18px;
                    color: #fff;
                }
                &:nth-child(1) {
                    img {
                        width: 37px;
                        height: 38px;
                    }
                }
                &:nth-child(2) {
                    img {
                        width: 34px;
                        height: 38px;
                    }
                }
                &:nth-child(3) {
                    img {
                        width: 27px;
                        height: 38px;
                    }
                }
            }

        }
      }
      .section0 {
         background: url("../../assets/images/pc/cnbg1.png") no-repeat center;
         background-size: 100% 100%;
         display: flex;
         justify-content: space-between;
         height: 100%;
         padding: 120px 0;
         box-sizing: border-box;
         flex-direction: column;
         .container {
            padding: 0;
         }
         .bottom_list {
            margin-bottom: 0;
        }
      }
      .section1 {
        background: #000;
        display: flex;
      }
      .section2 {
         background: url("../../assets/images/pc/cnbg3.png") no-repeat center;
         background-size: 100% 100%;
         padding-top: 120px;
         justify-content: flex-start;
         .container {
            .title {
                color: #393C41;
            }
            .content {
                color: #333333;
            }
         }
      }
      .section6 {
        height: 340px !important;
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
            .bottom_list {
                gap:30px;
                .content {
                    .title {
                        font-size: 12px;
                        margin-top: 10px;
                    }
                    .name {
                        font-size: 12px;
                    }
                    &:nth-child(1) {
                        img {
                            width: 25px;
                            height: 26px;
                        }
                    }
                    &:nth-child(2) {
                        img {
                            width: 22px;
                            height: 25px;
                        }
                    }
                    &:nth-child(3) {
                        img {
                            width: 19px;
                            height: 26px;
                        }
                    }
                }
            }
            .container_center1 {
                .title {
                    font-size: 30px;
                    color: #fff;
                    margin-bottom: 15px;
                }
                .subtitle {
                    font-size: 16px;
                    color: #fff;
                    line-height: 32px;
                    width: 318px;
                    margin: 0 auto;
                }
                .top{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    img {
                         width:214px;
                        height: 129px;
                    }
                }
                .bottom {
                    ul {
                    width: calc(100% - 60px);
                    margin: 0 auto;
                    li {
                        margin-bottom: 25px;
                        p {
                            text-align: left;
                        }
                        .title_li {
                            font-size: 16px;
                            color: #fff;
                            font-weight: 700;
                            margin-bottom: 10px;
                            position: relative;
                            padding-left: 5px;
                            &::before {
                                content: "";
                                width: 6px;
                                height: 6px;
                                border-radius: 3px;
                                background: #fff;
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                left: -10px;
                            }
                        }
                        .content {
                            color: #fff;
                            font-size: 12px;
                        }
                    }
                    }
                }
            }
        }
        .section0 {
            background: url("../../assets/images/mobile/cn-1.png") no-repeat center;
        }
        .section1 {
            padding: 70px 0;
            height:  auto !important;
            box-sizing: border-box;
        }
        .section2 {
            background: url("../../assets/images/mobile/cn-2.png") no-repeat center;
            .container {
                .title {
                    color: #171A20;
                }
                .content {
                    color: #393C41;
                }
            }
        }
    }
}
</style>

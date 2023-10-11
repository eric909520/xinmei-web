<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
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
const lists = [
    {
        title:t('investment_value'),
        content:t('investment_value_content'),
    },
     {
        title:t('safe_reliable'),
        content:t('safe_reliable_content'),
    },
     {
        title:t('power_rationing'),
        content:t('power_rationing_content'),
    },
     {
        title:t('emission_reduction'),
        content:t('emission_reduction_content'),
    },
     {
        title:t('energie_trends'),
        content:t('energie_trends_content'),
    },
     {
        title:t('stable_electricity'),
        content:t('stable_electricity_content'),
    }
]
const introList = [
    {name:t('dz_ys'),amount:'50+'},
    // {name:t('partener_company'),amount:'100+'},
    {name:t('amount_machain'),amount:'315'+t('Mwall')},
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
                    <p class="title" data-aos="fade-down">{{t('guangfu_power')}}</p>
                    <p class="content" data-aos="fade-up">{{t('gfdz_intro')}}</p>
                </div>
            </div>
            <div class="bottom_list">
                <div class="content" v-for="(item,index) in introList" :key="index" data-aos="flip-left">
                    <p class="title">{{item.amount}}</p>
                    <p class="name">{{item.name}}</p>
                </div>
                <div class="add_content">
                    <div class="content" data-aos="flip-left">
                        <p class="title">{{t('ten_year')}}</p>
                        <p class="name">{{t('experise')}}</p>
                    </div>
                    <div class="content" data-aos="flip-left">
                        <img src="@/assets/images/pc/wish_logo.svg" alt="">
                        <p class="name">{{t('one_wish')}}</p>
                    </div>
                    <div class="content" data-aos="flip-left">
                        <p class="title">315 {{t('Mwall')}}</p>
                        <p class="name">{{t('amount_machain')}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="news_list">
                <ul>
                    <li v-for="(item,index) in lists" :key="index"  data-aos="flip-left">
                       <p class="title" data-aos="fade-down">{{item.title}}</p>
                       <p class="content" data-aos="fade-up">{{item.content}}</p>
                    </li>
                </ul>
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
            padding-top: 120px;
            box-sizing: border-box;
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
        .bottom_list {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 80px;
            gap: 40px;
            .content {
                height: 80px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                
                .title {
                    color: #fff;
                    font-size: 28px;
                    // margin-bottom: 20px;
                }
                .name {
                    font-size: 18px;
                    color: #fff;
                }
                img {
                    width: 28px;
                    height: 28px;
                }
            }
            .add_content {
                display: flex;
                gap: 40px;
            }
        }
        .news_list {
            height: 100%;
            width: 100%;
            margin: auto;
            ul {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                height: 100%;
                li {
                    width: 33.33333%;
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .title {
                        font-size: 30px;
                        color: #FFFFFF;
                    }
                    .content {
                        font-size: 16px;
                        color: #FFFFFF;
                        width: 227px;
                        margin-top: 30px;
                    }
                    &:nth-child(1) {
                        background: url("@/assets/images/pc/dz2-1.png") no-repeat center;
                        background-size: cover;
                    }
                    &:nth-child(2) {
                        background: url("@/assets/images/pc/dz2-2.png") no-repeat center;
                        background-size: cover;
                    }
                    &:nth-child(3) {
                        background: url("@/assets/images/pc/dz2-3.png") no-repeat center;
                        background-size: cover;
                    }
                    &:nth-child(4) {
                        background: url("@/assets/images/pc/dz2-4.png") no-repeat center;
                        background-size: cover;
                    }
                    &:nth-child(5) {
                        background: url("@/assets/images/pc/dz2-5.png") no-repeat center;
                        background-size: cover;
                    }
                    &:nth-child(6) {
                        background: url("@/assets/images/pc/dz2-6.png") no-repeat center;
                        background-size: cover;
                    }
                }
            }
            .el-pagination {
                display: flex;
                justify-content: center;
                margin-top:20px;
            }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/dz1.png") no-repeat center;
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
         ::v-deep {
            .fp-overflow {
               height: 100%;
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
               width: 100%;
               justify-content: center;
               gap: 30px;
               flex-wrap: wrap;
               .content {
                height: 60px;
                    .title {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    .name {
                        font-size: 14px;
                    }
               }
            }
            .news_list {
                width: 100%;
                ul {
                    width: 100%;
                    li {
                        width: 50%;
                        height: 33.333%;
                         .title {
                            font-size: 18px;
                            color: #FFFFFF;
                        }
                        .content {
                            font-size: 12px;
                            color: #FFFFFF;
                            width: 147px;
                            margin-top: 10px;
                        }
                        &:nth-child(1) {
                            background: url("@/assets/images/mobile/dz-1.png") no-repeat center;
                            background-size: cover;
                        }
                        &:nth-child(2) {
                            background: url("@/assets/images/mobile/dz-2.png") no-repeat center;
                            background-size: cover;
                        }
                        &:nth-child(3) {
                            background: url("@/assets/images/mobile/dz-3.png") no-repeat center;
                            background-size: cover;
                        }
                        &:nth-child(4) {
                            background: url("@/assets/images/mobile/dz-4.png") no-repeat center;
                            background-size: cover;
                        }
                        &:nth-child(5) {
                            background: url("@/assets/images/mobile/dz-5.png") no-repeat center;
                            background-size: cover;
                        }
                        &:nth-child(6) {
                            background: url("@/assets/images/mobile/dz-6.png") no-repeat center;
                            background-size: cover;
                        }
                    }
                }
            }
        }
        .section0 {
            background: url("../../assets/images/mobile/bg4-1.png") no-repeat center;
            background-size: 100% 100%;
            justify-content: space-between;
            padding-top: 70px;
            padding-bottom: 30px;
            box-sizing: border-box;
        }
    }
}
</style>

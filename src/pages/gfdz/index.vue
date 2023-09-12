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
    {name:t('installed_area'),amount:'50+'},
    {name:t('partener_company'),amount:'100+'},
    {name:t('amount_machain'),amount:'315'+t('Mwall')},
]
const toDetails = (item)=>{
    router.push('/news-details')
}
const fullpage = ref(null)
onMounted(()=>{
   fullpage.value.api.moveTo(1)
})
</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <fullPage  class="full-page" ref="fullpage"  :options="state.options">
        <div class="section section0">
            <div class="container">
                <div>
                    <p class="title">{{t('guangfu_power')}}</p>
                    <p class="content">{{t('gfdz_intro')}}</p>
                </div>
            </div>
            <div class="bottom_list">
                <div class="content" v-for="(item,index) in introList" :key="index">
                    <p class="title">{{item.amount}}</p>
                    <p class="name">{{item.name}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="news_list">
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                       <p class="title">{{item.title}}</p>
                       <p class="content">{{item.content}}</p>
                    </li>
                </ul>
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
            margin-top: 120px;
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
            gap:124px;
            margin-bottom: 80px;
            .content {
                .title {
                    color: #fff;
                    font-size: 28px;
                    margin-bottom: 20px;
                }
                .name {
                    font-size: 18px;
                    color: #fff;
                }
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
         justify-content: space-between;
         height: 100%;
         ::v-deep {
            .fp-overflow {
               height: 100%;
               display: flex;
               justify-content: space-between;
               flex-direction: column;
            }
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
               .content {
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
            ::v-deep {
                .fp-overflow {
                height: 100%;
                }
            }
        }
    }
}
</style>

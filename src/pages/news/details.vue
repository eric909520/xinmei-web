<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Img from "@/assets/images/pc/news.png"
import {Encrypt,Decrypt} from "@/utils/aes.js"
import dayjs  from "dayjs"
import axios from 'axios'
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
let news = ref({})
let before = ref({})
let after = ref({})
const getDetails = (id)=>{
    let params = {
        langue:localStorage.getItem('lang') == 'zh' ? 0 : 1,
        id:id
    };
    let signParams = {
        sign:'',
        data:Encrypt(params)
    }
    axios.post('/system/news/detail',signParams).then(res=>{
        news.value = res.data.data.detail
        before.value = res.data.data.before
        after.value = res.data.data.after
    })
}
onMounted(async()=>{
   let newsId = localStorage.getItem('newsDetail')
   await getDetails(newsId)
})
const { t } = useI18n()
</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <div class="full-page">
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
                <p class="title">{{news.title}}</p>
                <p class="time">{{$t('Release_time')}}：{{dayjs(news.createTime).format('YYYY-MM-DD')}}</p>
                <div class="content" v-html="news.content"></div>
                <div class="action_box">
                    <p v-if="before && before.title" @click="getDetails(before.id)">{{$t('Previous_article')}}：{{before.title}}</p>
                    <p v-else>{{$t('None')}}</p>
                    <p v-if="after && after.title"  @click="getDetails(after.id)">{{$t('next_article')}}：{{after.title}}</p>
                    <p v-else>{{$t('None')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1" v-if="isMobile">
            <div class="contetn_box">
                <p class="title">{{news.title}}</p>
                <p class="time">{{$t('Release_time')}}：{{dayjs(news.createTime).format('YYYY-MM-DD')}}</p>
                <img :src="Img" alt="">
                <div class="content" v-html="news.content"></div>
                <div class="action_box">
                     <p v-if="before && before.title" @click="getDetails(before.id)">{{$t('Previous_article')}}：{{before.title}}</p>
                    <p v-else>{{$t('None')}}</p>
                    <p v-if="after && after.title"  @click="getDetails(after.id)">{{$t('next_article')}}：{{after.title}}</p>
                    <p v-else>{{$t('None')}}</p>
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
                ::v-deep {
                    img {
                        width: 40%;

                    }
                }
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
         height: 600px !important;
         background: url("../../assets/images/pc/details_title.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
      }
      .section1 {
        padding-top: 50px;
        padding-bottom: 20px;
        justify-content: flex-start;
        background: #F1F3F4;
        height: auto !important;
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
      .section6 {
        height: 340px !important;
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
                    ::v-deep {
                        img {
                            width: 100%;
                        }
                    }
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

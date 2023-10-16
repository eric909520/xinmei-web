<script setup>
import { computed, onMounted, reactive, ref, inject} from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Img from "@/assets/images/pc/news.png"
import{ElPagination} from "element-plus"
import { useRouter } from 'vue-router'
import axios from "axios"
import {Encrypt,Decrypt} from "@/utils/aes.js"
import dayjs  from "dayjs"
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
let pages = ref({
    pageNum:1,
    pageSize:6,
    total:0
})
let lists = ref([])
const toDetails = (item)=>{
    localStorage.setItem('newsDetail',item.id)
    router.push('/news-details')
}
const getList = (type)=>{
    let params = {
        langue:localStorage.getItem('lang') == 'zh' ? 0 : 1,
        ...pages.value
    }
    console.log(params,"===")
    let dataParmas = {
        sign:'',
        data:Encrypt(params)
    }
    axios.post('/system/news/newsList',dataParmas).then(res=>{
        if(type == 'isMobile') {
            lists.value = lists.value.concat(res.data.data.newsList)
            pages.value.total = res.data.data.total
        }else {
            lists.value = res.data.data.newsList
            pages.value.total = res.data.data.total
        }
    })
}
const currentChange =(val)=>{
    pages.value.pageNum = val;
    getList()
}
const addMore =() =>{
    if(lists.value.length < pages.value.total) {
        pages.value.pageNum = pages.value.pageNum + 1;
        getList('isMobile') 
    }
}
onMounted(async()=>{
    await getList()
})
</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <div class="full-page">
        <div class="section section0" data-aos="zoom-out">
            <div class="container">
                <div>
                    <p class="title" data-aos="fade-down">{{t('news_center')}}</p>
                    <p class="content" data-aos="fade-up">{{t('news_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="news_list">
                <ul>
                    <li v-for="(item,index) in lists" :key="index" @click="toDetails(item)">
                        <img :src="item.icon" alt="" data-aos="flip-left">
                        <p class="title" data-aos="fade-up">{{item.title}}</p>
                        <p class="content" data-aos="fade-up">{{item.simpleContent}}</p>
                        <p class="time">{{dayjs(item.createTime).format('YYYY-MM-DD')}}</p>
                    </li>
                </ul>
                <div class="load_more" v-if="isMobile && lists.length < pages.total" @click="addMore">
                    <p>{{t('load_more')}}</p>
                    <img src="@/assets/images/mobile/load_more.svg" alt="">
                </div>
                <el-pagination 
                            layout="prev, pager, next" 
                            v-if="pages.total && !isMobile"
                            :total="pages.total" 
                            :page-size="pages.pageSize"
                            v-model="pages.pageNum"
                            @current-change="currentChange"
                />
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
            }
        }
        .news_list {
            height: 100%;
            width: 1280px;
            margin: auto;
            ul {
                display: flex;
                // justify-content: center;
                flex-wrap: wrap;
                // gap: 25px;
                li {
                    width: 410px;
                    margin-right: 25px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    img {
                        width: 410px;
                        height: 260px;
                    }
                    .title {
                        font-size: 18px;
                        color: #393C41;
                        text-align: left;
                        font-weight: 700;
                        margin: 16px 0;
                    }
                    .content {
                        font-size: 14px;
                        color: #393C41;
                        text-align: left;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:2;
                    }
                    .time {
                        font-size: 14px;
                        color: #999999;
                        margin-top: 15px;
                        text-align: left;
                    }
                    &:nth-child(3n) {
                        margin-right: 0;
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
        box-sizing: border-box;
        // height: 150%;
        height: auto !important;
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
            .news_list {
                width: calc(100% - 48px);
                margin: 0 auto;
                li {
                    width: 100% !important;
                    margin-right: 0 !important;
                    img {
                        width: 100% !important;
                    }
                }
                .load_more {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    p {
                        font-size: 12px;
                        color: #393C41;
                    }
                    img {
                        width: 9px;
                        height: 3px;
                    }
                }
            }
        }
        .section0 {
            background: url("../../assets/images/mobile/news.png") no-repeat center;
            background-size: 100% 100%;
            justify-content: flex-start;
            padding-top: 90px;
            box-sizing: border-box;
        }
    }
}
</style>

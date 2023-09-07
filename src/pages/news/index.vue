<script setup>
import { computed, onMounted, reactive, ref, inject} from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Img from "@/assets/images/pc/news.png"
import{ElPagination} from "element-plus"
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
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    },
     {
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    },
     {
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    },
     {
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    },
     {
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    },
     {
        img:Img,
        title:'鑫美荣获第十一届全国品牌故事大赛（西安赛区）两项荣誉',
        content:'8月15日，由中国质量协会主办，陕西省品牌建设促进中心、陕西省质量技术协会和陕西省品牌建设标准化技术委承办的第十一届陕西省质量技术协陕西省质量技术协',
        time:'2023-09-02'
    }
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
 <div :class="isMobile ? 'big_box m_big_box':'big_box'">
    <fullPage  class="full-page" ref="fullpage"  :options="state.options">
        <div class="section section0">
            <div class="container">
                <div>
                    <p class="title">{{t('news_center')}}</p>
                    <p class="content">{{t('news_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="news_list">
                <ul>
                    <li v-for="(item,index) in lists" :key="index" @click="toDetails(item)">
                        <img :src="item.img" alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="content">{{item.content}}</p>
                        <p class="time">{{item.time}}</p>
                    </li>
                </ul>
                <div class="load_more" v-if="isMobile">
                    <p>{{t('load_more')}}</p>
                    <img src="@/assets/images/mobile/load_more.svg" alt="">
                </div>
                <el-pagination v-else layout="prev, pager, next" :total="50" />
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
            height: 100%;
            width: 1280px;
            margin: auto;
            ul {
                display: flex;
                justify-content: center;
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
        // height: 150%;
         ::v-deep {
            .fp-overflow {
               height: 100%;
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
        }
    }
}
</style>

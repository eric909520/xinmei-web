<template>
    <div class="big_box">
        <div v-if="isMobile" class="m_container_box">
            <div class="top">
                <div class="item">
                    <van-collapse v-model="activeNames" :border="false">
                        <van-collapse-item :title="t('about')" name="1">
                            <p v-for="(item,index) in lists[0].list" :key="index" @click="toUrl(item.url)">{{item.name}}</p>
                        </van-collapse-item>
                    </van-collapse>
                    <van-collapse v-model="activeNames2" :border="false">
                        <van-collapse-item :title="t('product')" name="1">
                            <p v-for="(item,index) in lists[1].list" :key="index" @click="toUrl(item.url)">{{item.name}}</p>
                        </van-collapse-item>
                    </van-collapse>
                    <p v-for="(item,index) in lists.slice(2,6)" class="name" @click="toUrl(item.url)">{{item.name}}</p>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <div class="er_box">
                        <img src="@/assets/images/pc/ercode.jpg" alt="">
                    </div>
                    <p class="follow_us">{{t('follow_us')}}</p>
                </div>
                <div class="right">
                    <ul>
                        <li v-for="(item,index) in informatinos" :key="index">
                            <img :src="item.img" alt="">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="support">{{t('support')}}</p>
            <div class="info">
                <p>sunmae © {{new Date().getFullYear()}} </p>
                <a href="https://beian.miit.gov.cn" target="_Blank">苏ICP备2023032182号-1</a>
            </div>
        </div>
        <div class="norem-container_box" v-else>
            <div class="top">
                <div :class="i18nLanguage == 'en' ? 'left en-left' : 'left'">
                    <div class="left_top">
                        <img src="@/assets/images/pc/footer_logo.png" alt="" v-if="i18nLanguage == 'zh'">
                        <img src="@/assets/images/pc/en_foot_logo.png" alt="" v-else>
                        <div class="top_bot">
                            <div class="bot_left">
                                <div class="er_box">
                                    <img src="@/assets/images/pc/ercode.jpg" alt="">
                                </div>
                                <p class="follow_us">{{t('follow_us')}}</p>
                            </div>
                            <div class="bot_right">
                                <ul>
                                    <li v-for="(item,index) in informatinos" :key="index">
                                        <img :src="item.img" alt="">
                                        <p>{{item.name}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="i18nLanguage == 'en' ? 'right en-right' : 'right'">
                    <ul>
                        <li v-for="(item,index) in lists" :key="index" @click="toUrl(item.url)">
                            <p class="title">{{item.name}}</p>
                            <p class="sub_title" 
                                v-if="item.list && item.list.length" 
                                v-for="(it,inx) in item.list" 
                                :key="'s'+index"
                                @click="toUrl(it.url)"
                            >{{it.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <p>{{t('support')}}</p>
                <div class="info">
                    <p>sunmae © {{new Date().getFullYear()}} </p>
                    <a href="https://beian.miit.gov.cn" target="_Blank">苏ICP备2023032182号-1</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,computed,inject } from 'vue'
import { useI18n } from 'vue-i18n'
import location from "@/assets/images/pc/location.svg"
import phone from "@/assets/images/pc/phone.svg"
import mail from "@/assets/images/pc/mail.svg"
import { useRouter } from "vue-router";
const { t } = useI18n()
const { locale: i18nLanguage } = useI18n()
const isMobile = inject('isMobile')
const activeNames = ref(['1'])
const activeNames2 = ref(['1'])
const informatinos = computed(()=>[
    {name:t('company_address'),img:location},
    {name:'0516-83006977',img:phone},
    {name:'contact@sunmae.cn',img:mail},
])
const lists = computed(()=>[
    {   name:t('about'),
        url:'/',
        list:[
                {name:t('componany_controducation'),url:'/introduce'},
                {name:t('all_world'),url:'/global'},
                {name:t('news_center'),url:'/news'}
            ]
    },
    {   name:t('product'),
        url:'/gfdz',
        list:[
                {name:t('guangfu_power'),url:'/gfdz'},
                {name:t('power_system'),url:'/cnsystem'},
            ]
    },
    {name:t('service'),url:'/service'},
    {name:t('download'),url:'/download'},
    {name:t('concact'),url:'/concact'},
])
const router = useRouter()
const toUrl = (url)=>{
     router.push(url)
}
console.log(i18nLanguage.value,"123")
</script>
<style lang="scss" scoped>
.big_box {
    width: 100%;
    // height: 400px;
    background: #000;
    padding-bottom: 25px;
    box-sizing: border-box;
    .norem-container_box {
        width: 90%;
        margin: 0 auto;
        .top {
            display: flex;
            justify-content: space-between;
            // align-items: center;
            .left {
                // width: 526px;
                margin-top: 25px;
                .left_top {
                    width: 100%;
                    height: 52px;
                    text-align: left;
                    img {
                        margin-bottom: 35px;
                        width: 426px;
                        height: auto;
                        
                    }
                }
                .top_bot {
                    display: flex;
                    .bot_left {
                        margin-right: 20px;
                       .er_box {
                            width: 90px;
                            height: 90px;
                            background: #fff;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                       } 
                       p {
                        font-size: 14px;
                        color: #fff;
                       }
                       .follow_us {
                        margin-top: 15px;
                        text-align: center;
                       }
                    }
                    .bot_right {
                        ul {
                            li {
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                img {
                                    width: 16px;
                                    height: 16px;
                                    margin-bottom: 0;
                                    margin-right: 20px;
                                }
                                p {
                                    font-size: 16px;
                                    color: #FFFFFF;
                                }
                                &:last-child {
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }
            }
            .en-left {
                width: 50%;
            }
            .right {
                margin-top:35px;
                ul {
                    display: flex;
                    gap: 40px;
                    li {
                        color: #fff;
                        p {
                            cursor: pointer;
                        }
                        .title {
                            font-size: 20px;
                            margin-bottom: 16px;
                        }
                        .sub_title {
                            font-size: 16px;
                            margin-bottom: 20px;
                        }
                    }
                }
            }
            .en-right {
                ul {
                    gap: 10px;
                    li {
                        .title {
                            font-size: 16px;
                        }
                        .sub_title {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .bottom {
            margin-top: 57px;
            color: #FFFFFF;
            font-size: 16px;
            .info {
                display: flex;
                justify-content: center;
                margin-top: 5px;
                gap: 10px;
                a {
                    color: #fff;
                }
            }
        }
    }
    .m_container_box {
        ::v-deep {
            .van-cell {
                background: #000;
                color: #fff;
                .van-cell__title {
                    text-align: left;
                    font-size: 14px;
                }
                &:after {
                    content: " ";
                    display:block !important;
                    pointer-events: none;
                    right: 15px;
                    bottom: 0;
                    left: 15px;
                    border-bottom: 1px solid rgba(255,255,255,.8);
                }
            }
            .van-collapse-item__wrapper {
                .van-collapse-item__content {
                    background: #000;
                    color: #fff;
                    p {
                        text-align: left;
                        font-size: 14px;
                        line-height: 44px;
                        width: calc((100% - 20px));
                        border-bottom: 1px solid rgba(255,255,255,.8);
                    }
                }
            }
        }
        .top {
            .item {
                .name {
                    width: calc(100% - 30px);
                    text-align: left;
                    font-size: 14px;
                    line-height: 44px;  
                    color: #fff;
                    margin: 0 auto;
                    border-bottom: 1px solid rgba(255,255,255,.8);
                    // padding-left: 15px;
                }
            }
        }
        .bottom {
            display: flex;
            // justify-content: space-between;
            align-items: center;
            padding:0 20px;
            margin-top: 40px;
            .left {
                .er_box {
                    width: 90px;
                    height: 90px;
                    background: #fff;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                } 
                p {
                    font-size: 14px;
                    color: #fff;
                    
                }
            }
            .right {
                margin-left: 10px;
                margin-bottom: 24px;
                ul {
                    li {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        img {
                            width: 16px;
                            height: 16px;
                            margin-bottom: 0;
                            margin-right: 14px;
                        }
                        p {
                            font-size: 14px;
                            color: #FFFFFF;
                            text-align: left;
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
        .support {
            margin-top: 40px;
            // margin-bottom: 30px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            opacity: 0.8;
        }
        .info {
            font-size: 14px;
            color: #fff;
            opacity: 0.8;
            a {
                font-size: 14px;
                color: #fff;
                opacity: 0.8;
            }
        }
    }
}
</style>
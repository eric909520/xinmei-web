<template>
    <div class="big_box">
        <div class="container_box">
            <div class="top">
                <div class="left">
                    <div class="left_top">
                        <img src="@/assets/images/pc/footer_logo.png" alt="">
                        <div class="top_bot">
                            <div class="bot_left">
                                <div class="er_box"></div>
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
                <div class="right">
                    <ul>
                        <li v-for="(item,index) in lists" :key="index">
                            <p class="title">{{item.name}}</p>
                            <p class="sub_title" 
                                v-if="item.list && item.list.length" 
                                v-for="(it,inx) in item.list" 
                                :key="'s'+index"
                            >{{it.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <p>{{t('support')}}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,computed } from 'vue'
import { useI18n } from 'vue-i18n'
import location from "@/assets/images/pc/location.svg"
import phone from "@/assets/images/pc/phone.svg"
import mail from "@/assets/images/pc/mail.svg"
const { t } = useI18n()
const informatinos = computed(()=>[
    {name:t('company_address'),img:location},
    {name:'010-88886666',img:phone},
    {name:'contact@sunmae.cn',img:mail},
])
const lists = computed(()=>[
    {   name:t('about'),
        url:'/',
        list:[
                {name:t('componany_controducation'),url:'/introduce'},
                {name:t('all_world'),url:'/'},
                {name:t('news_center'),url:'/'}
            ]
    },
    {   name:t('product'),
        url:'/',
        list:[
                {name:t('guangfu_power'),url:'/'},
                {name:t('power_system'),url:'/'},
            ]
    },
    {name:t('service'),url:'/'},
    {name:t('download'),url:'/'},
    {name:t('concact'),url:'/'},
])
</script>
<style lang="scss" scoped>
.big_box {
    width: 100%;
    height: 400px;
    background: #000;
    padding-bottom: 35px;
    box-sizing: border-box;
    .container_box {
        .top {
            display: flex;
            justify-content: space-between;
            // align-items: center;
            .left {
                width: 426px;
                margin-top: 57px;
                .left_top {
                    width: 100%;
                    height: 52px;
                    img {
                        margin-bottom: 35px;
                        width: 100%;
                        height: 100%;
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
                       } 
                       p {
                        font-size: 14px;
                        color: #fff;
                       }
                       .follow_us {
                        margin-top: 15px;
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
            .right {
                margin-top:84px;
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
        }
        .bottom {
            margin-top: 57px;
            color: #FFFFFF;
            font-size: 16px;
        }
    }
}
</style>
<script setup lang="ts">
import { ref,computed } from 'vue'
import {ElPopover} from "element-plus"
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
const { t } = useI18n()
const { locale } = useI18n()
const router = useRouter()
const headerMenu = computed(()=>[
    {name:t('about'),toUrl:'/',child:[{name:t('componany_controducation'),url:'/introduce'},{name:t('all_world'),url:'/'},{name:t('news_center'),url:'/'}]},
    {name:t('product'),toUrl:'/',child:[{name:t('guangfu_power'),url:'/'},{name:t('power_system'),url:'/'}]},
    {name:t('service'),toUrl:'/'},
    {name:t('download'),toUrl:'/'},
    {name:t('concact'),toUrl:'/'}
])
const lang = ref('');
const langList = ref([
    {name:'简体中文',value:'zh'},
    {name:'English',value:'en'}
])
lang.value = localStorage.getItem('lang') || 'zh'
const showLange = ref(false)
const showChose = ()=>{
    showLange.value = !showLange.value
}
const choseLang =(val:string)=>{
    locale.value = val;
    localStorage.setItem('lang', val);
    showLange.value = false
    lang.value = val
}
const toPage = (item:any)=>{
    router.push(item.url)
}
</script>

<template>
  <div class="big_box">
    <div class="container_box">
        <div class="left_logo" @click="router.push('/')">
            <img src="@/assets/images/pc/logo.png" alt="">
        </div>
        <div class="middle_menu">
            <ul>
                <li v-for="(item,index) in headerMenu" :key="index">
                    <el-popover
                        placement="bottom"
                        popper-class="top_popper"
                        :width="200"
                        trigger="hover"
                        :visible="showChils"
                        v-if="item.child && item.child.length"
                    >
                        <template #reference>
                            <p>{{item.name}}</p>
                        </template>
                        <div class="language">
                            <p v-for="(ite,indx) in item.child" 
                                :key="indx+'1'"
                                style="height: 36px;
                                    line-height: 36px;
                                    cursor: pointer;"
                                @click="toPage(ite)"
                            >{{ite.name}}</p>
                        </div>
                    </el-popover>
                    <p v-else>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="right_lang">
             <el-popover
                placement="bottom"
                :width="200"
                trigger="click"
                :visible="showLange"
            >
                <template #reference>
                    <div class="lang_box" @click="showChose">
                        <img src="@/assets/images/pc/lang.png">
                        <p>{{langList.find(item=>item.value == lang).name}}</p>
                    </div>
                </template>
                <div class="language">
                    <p v-for="(item,index) in langList" 
                        :key="index"
                        style="height: 36px;
                                line-height: 36px;
                                cursor: pointer;"
                        @click="choseLang(item.value)"
                    >{{item.name}}</p>
                </div>
            </el-popover>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.big_box {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .container_box {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left_logo {
            cursor: pointer;
            img {
                width: 124px;
                height: 31px;
            }
        }
        .middle_menu {
            height: 100%;
            ul {
                display: flex;
                height: 100%;
                gap: 60px;
                align-items: center;
                li {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    p {
                        font-size: 16px;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
        .right_lang {
            .lang_box {
                display: flex;
                align-items: center;
                height: 100%;
                gap: 20px;
                cursor: pointer;
                img {
                    width: 23px;
                    height: 23px;
                }
                p {
                    color: #fff;
                    font-size: 16px;
                }
            }

        }
    }
}
.top_popper {
    .language {
        p {
            padding-left: 10px;
            font-size: 14px;
            &:hover {
                color: #22AB38;
            }   
        }
    }
}
</style>

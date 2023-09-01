<script setup lang="ts">
import { ref,computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {Popover} from "element-plus"
const { t } = useI18n()
const { locale } = useI18n()
const headerMenu = computed(()=>[
    {name:t('about'),toUrl:'/'},
    {name:t('product'),toUrl:'/'},
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
</script>

<template>
  <div class="big_box">
    <div class="container_box">
        <div class="left_logo">
            <img src="@/assets/images/pc/logo.png" alt="">
        </div>
        <div class="middle_menu">
            <ul>
                <li v-for="(item,index) in headerMenu" :key="index">
                    <p>{{item.name}}</p>
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

</style>

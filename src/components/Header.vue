<script setup lang="ts">
import { ref,computed,inject, watch } from 'vue'
import {ElPopover} from "element-plus"
import { useI18n } from 'vue-i18n'
import { useRouter,useRoute } from "vue-router";
const { t } = useI18n()
const { locale } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const route = useRoute()
let showLang =ref(false)
let menuShow = ref(false)
const headerMenu = computed(()=>[
    {
        name:t('about'),
        url:'/introduce',
        child:[
                {name:t('componany_controducation'),url:'/introduce',id:1},
                {name:t('all_world'),url:'/global',id:2},
                {name:t('news_center'),url:'/news',id:3}
            ],
    },
    {
        name:t('product'),
        url:'/gfdz',
        child:[
                {name:t('guangfu_power'),url:'/gfdz',id:1},
                {name:t('power_system'),url:'/cnsystem',id:2}
            ],
    },
    {name:t('service'),url:'/service'},
    {name:t('download'),url:'/download'},
    {name:t('concact'),url:'/concact'}
])
const lang = ref('');
const activeNames = ref(['1'])
const activeNames2 = ref(['1'])
const langList = ref([
    {name:'简体中文',value:'zh',text:'简体中文'},
    {name:'English',value:'en',text:'English'}
])
const changeList = ['news-details']
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
    router.go(0)
}
const toPage = (item:any)=>{
    router.push(item.url)
}
const showLangePicker = ()=>{
    showLang.value = true
}
const onCancel = () =>{
    showLang.value = false
}
let changeHeader = ref(false)
const onConfirm = (val:any)=>{
    let value = val.selectedValues[0];
    locale.value = value;
    localStorage.setItem('lang', value);
    showLang.value = false
    lang.value = value
    router.go(0)
}
const showMenu = ()=>{
    menuShow.value = true
}
const closeMenu = ()=>{
    menuShow.value = false
}
const menuTourl = (item:any)=>{
    menuShow.value = false
    router.push(item.url)
}
watch(route, (newValue, oldValue) => {
  changeHeader.value = changeList.includes(newValue.name)
});
</script>

<template>
  <div class="big_box" :style="changeHeader ? 'background:#F1F3F4':''">
    <div v-if="isMobile" class="m_container_box">
        <div class="left" @click="router.push('/')">
            <img src="@/assets/images/mobile/logo_top.png" alt="" v-if="changeHeader">
            <img src="@/assets/images/mobile/logo.png" alt="" v-else>
        </div>
        <div class="right">
            <div class="first" @click="showLangePicker">
                <img src="@/assets/images/mobile/menu_lang.png" alt="" v-if="changeHeader">
                <img src="@/assets/images/mobile/language.png" alt="" v-else>
                <p :style="changeHeader ? 'color:#333333':''">{{langList.find(item=>item.value == lang).name}}</p>
            </div>
            <div class="second" @click="showMenu">
                <img src="@/assets/images/mobile/menu_black.png" alt="" v-if="changeHeader">
                <img src="@/assets/images/mobile/menu.png" alt="" v-else>
            </div>
        </div>
    </div>
    <div class="norem-container_box" v-else>
        <div class="left_logo" @click="router.push('/')">
            <img src="@/assets/images/pc/logo.png" alt="">
        </div>
        <div class="middle_menu">
            <ul>
                <li v-for="(item,index) in headerMenu" :key="index">
                    <el-popover
                        placement="bottom"
                        popper-class="norem-top_popper"
                        :width="lang == 'en' && index == 1 ? 250 : 200"
                        trigger="hover"
                        v-if="item.child && item.child.length"
                    >
                        <template #reference>
                            <p @click="toPage(item)">{{item.name}}</p>
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
                    <p v-else @click="toPage(item)">{{item.name}}</p>
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
                                cursor: pointer;
                                font-size:14px
                                "
                        @click="choseLang(item.value)"
                    >{{item.name}}</p>
                </div>
            </el-popover>
        </div>
    </div>
    <van-popup v-model:show="showLang" position="bottom">
        <van-picker
            :title="t('language')"
            :columns="langList"
            :confirm-button-text="t('confirm')"
            :cancel-button-text="t('cancel')"
            @confirm="onConfirm"
            @cancel="onCancel"
        />
    </van-popup>
    <van-popup v-model:show="menuShow" 
                position="right" 
                :style="{ width: '100%', height: '100%' }"
    >
        <div class="menu_box">
            <div class="top">
                <div class="left">
                    <img src="@/assets/images/mobile/logo_top.png" alt="">
                </div>
                <div class="right">
                <div class="first" @click="showLangePicker">
                    <img src="@/assets/images/mobile/menu_lang.png" alt="">
                    <p>{{langList.find(item=>item.value == lang).name}}</p>
                </div>
                <div class="second" @click="closeMenu">
                    <img src="@/assets/images/mobile/menu_cancle.png" alt="">
                </div>
            </div>
            </div>
            <div class="menu_list">
                <div class="item">
                    <van-collapse v-model="activeNames" :border="false">
                        <van-collapse-item :title="t('about')" name="1">
                            <p v-for="(item,index) in headerMenu[0].child" :key="index" @click="menuTourl(item)">{{item.name}}</p>
                        </van-collapse-item>
                    </van-collapse>
                    <van-collapse v-model="activeNames2" :border="false">
                        <van-collapse-item :title="t('product')" name="1">
                            <p v-for="(item,index) in headerMenu[1].child" :key="index" @click="menuTourl(item)">{{item.name}}</p>
                        </van-collapse-item>
                    </van-collapse>
                    <p v-for="(item,index) in headerMenu.slice(2,6)" class="name" @click="menuTourl(item)">{{item.name}}</p>
                </div>
            </div>
        </div>
    </van-popup>
  </div>
</template>

<style scoped lang="scss">
.big_box {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .norem-container_box {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
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
    .m_container_box {
        width: calc(100% - 40px);
        margin: 0 auto;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            img {
                width: 99px;
                height: 25px;
            }
        }
        .right {
            display: flex;
            gap: 21px;
            align-items: center;
            .first {
                display: flex;
                align-items: center;
                gap: 6px;
                img {
                    width: 19px;
                    height: 19px;
                }
                p {
                    color: #fff;
                    font-size: 14px;
                }
            }
            .second {
                img {
                    width: 14px;
                    height: 14px;
                }
            }
        }
        
    }
}
.norem-top_popper {
    .language {
        p {
            padding-left: 10px;
            font-size: 16px;
            &:hover {
                color: #22AB38;
            }   
        }
    }
}
</style>
<style lang="scss" scoped>
.big_box  {
    .menu_box {
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: calc(100% - 40px);
            margin: 0 auto;
            height: 50px;
            .left {
                img {
                    width: 99px;
                    height: 25px;
                }
            }
            .right {
                display: flex;
                gap: 21px;
                align-items: center;
                .first {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    img {
                        width: 19px;
                        height: 19px;
                    }
                    p {
                        color: #333333;
                        font-size: 14px;
                    }
                }
                .second {
                    img {
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        }
    }
    .menu_list {
        .item {
            ::v-deep {
                .van-collapse {
                    margin-bottom: 15px;
                    .van-collapse-item {
                        .van-cell {
                            .van-cell__title {
                                text-align: left;
                                font-size: 15px;
                                color: #171A20;
                                font-weight: 700;
                            }
                            .van-cell__right-icon {
                                color: #171A20;
                            }
                        }
                        .van-collapse-item__wrapper {
                            .van-collapse-item__content {
                                font-size: 14px;
                                color: #171A20;
                                p {
                                    margin-bottom: 30px;
                                }
                            }
                        }
                    }
                    
                }
            }
            .name {
                font-size: 15px;
                color: #171A20;
                padding-left: 15px;
                margin-bottom: 30px;
                font-weight: 700;
            }
        }
        p {
            text-align: left;
        }
    }
}
</style>

<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
const { t } = useI18n()
const fullpage = ref(null)
const isMobile = inject('isMobile')
const router = useRouter()
const getImg = async()=>{
   let res = await getAuth()
}
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
const lists = computed(()=>[
   {title:t('sun_no_limit'),subtitle:t('no_limit_tomorrow'),btnText:t('know_xm'),url:'/introduce'},
   {title:t('sun_with'),subtitle:t('sun_road'),btnText:t('know_gfdz'),url:'/gfdz'},
   {title:t('feture_solution'),subtitle:t('feture_solution_sub'),btnText:t('know_cnxt'),url:'/cnsystem'},
   {title:t('settle_servie'),subtitle:t('settle_servie_sub'),btnText:t('settle_servie_btn'),url:'/service'},
   {title:t('key_feture'),subtitle:t('key_feture_sub'),btnText:t('key_feture_btn'),url:'/download'},
   {title:t('create_way'),subtitle:t('create_way_sub'),btnText:t('create_way_btn'),url:'/concact'}
])
const toUrl = (url)=>{
   router.push(url)
}
onMounted(()=>{
   fullpage.value.api.moveTo(1);
   getImg()
})
</script>

<template>
<div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
  <fullPage  class="full-page" ref="fullpage"  :options="state.options">
   <div v-for="(item,index) in lists" :key="index" :class="'section section'+index">
      <div class="container">
         <div>
            <p class="title">{{item.title}}</p>
            <p class="sub_title">{{item.subtitle}}</p>
         </div>
         <button @click="toUrl(item.url)">{{item.btnText}}</button>
      </div>
   </div>
    <div class="section section7" v-if="isMobile">
      <Footer/>
    </div>
    <div class="section section6" v-else>
      <Footer/>
    </div>
  </fullPage >
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
         width: 1200px;
         margin:0 auto;
         display: flex;
         flex-direction: column;
         // justify-content: center;
         align-items: flex-start;
         .title {
            font-size: 50px;
            color: #fff;
         }
         .sub_title {
            font-size: 16px;
            color: #393C41;
            margin-top: 30px;
            margin-bottom: 195px;
            text-align: left;
         }
         button {
            width: 260px;
            height: 45px;
            opacity: 0.95;
            background: #FFFFFF;
            border-radius: 4px;
            color: #333333;
            font-size: 16px;
            outline: none;
            border: none;
            &:hover {
               background: #22AB38;
               color: #fff;
            }
         }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/bg1.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            margin-bottom: 100px;
         }
      }
      .section1 {
         background: url("../../assets/images/pc/bg2.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section2 {
         background: url("../../assets/images/pc/bg3.png") no-repeat center;
         background-size: 100% 100%;
          .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section3 {
         background: url("../../assets/images/pc/bg4.png") no-repeat center;
         background-size: 100% 100%;
          .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section4 {
         background: url("../../assets/images/pc/bg5.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            .title {
               color: #393C41;
            }

         }
      }
      .section5 {
         background: url("../../assets/images/pc/bg6.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            .sub_title {
               color: #fff;
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
         ::v-deep {
            justify-content: space-between;
            padding-top: 140px;
            padding-bottom: 70px;
            .fp-overflow {
               height: 100%;
               .container {
                  height: 100%;
                  width: 100%;
                  align-items: center;
                  justify-content: space-between;
                  .title {
                     font-size: 30px;
                     width: 300px;
                  }
                  .sub_title {
                     font-size: 12px;
                     color: #fff;
                     width: 276px;
                     margin: 0 auto;
                     margin-top: 25px;
                  }
               }
            }
         }
      }
      .section0 {
         background: url("../../assets/images/mobile/bg1.png") no-repeat center;
         background-size: 100% 100%;
      }
      .section1 {
         background: url("../../assets/images/mobile/bg2.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section2 {
         background: url("../../assets/images/mobile/bg3.png") no-repeat center;
         background-size: 100% 100%;
          .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section3 {
         background: url("../../assets/images/mobile/bg4.png") no-repeat center;
         background-size: 100% 100%;
          .container {
            .sub_title {
               color: #fff;
            }
         }
      }
      .section4 {
         background: url("../../assets/images/mobile/bg5.png") no-repeat center;
         background-size: 100% 100%;
      }
      .section5 {
         background: url("../../assets/images/mobile/bg6.png") no-repeat center;
         background-size: 100% 100%;
         .container {
            .sub_title {
               color: #fff;
            }
         }
      } 
      .section7 {
         padding-top: 50px;
         background: #000;
         justify-content: center;
         padding-bottom: 0;
      }
   }
}
</style>

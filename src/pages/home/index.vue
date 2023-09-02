<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
   {title:t('sun_no_limit'),subtitle:t('no_limit_tomorrow'),btnText:t('know_xm')},
   {title:t('sun_with'),subtitle:t('sun_road'),btnText:t('know_gfdz')},
   {title:t('feture_solution'),subtitle:t('feture_solution_sub'),btnText:t('know_cnxt')},
   {title:t('settle_servie'),subtitle:t('settle_servie_sub'),btnText:t('settle_servie_btn')},
   {title:t('key_feture'),subtitle:t('key_feture_sub'),btnText:t('key_feture_btn')},
   {title:t('create_way'),subtitle:t('create_way_sub'),btnText:t('create_way_btn')}
])
</script>

<template>
<div class="big_box">
  <fullPage  class="full-page" ref="fullpage"  :options="state.options">
   <div v-for="(item,index) in lists" :key="index" :class="'section section'+index">
      <div class="container">
         <p class="title">{{item.title}}</p>
         <p class="sub_title">{{item.subtitle}}</p>
         <button>{{item.btnText}}</button>
      </div>
   </div>   
    <div class="section section6">
      <Footer/>
    </div>
  </fullPage >
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
         width: 1200px;
         margin: auto;
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
         height: 400px !important;
      }
    }
}

</style>

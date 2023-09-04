<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
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
onMounted(()=>{
   fullpage.value.api.moveTo(1)
})
const { t } = useI18n()
</script>

<template>
 <div class="big_box">
    <fullPage  class="full-page" ref="fullpage"  :options="state.options">
        <div class="section section0">
            <div class="container">
                <div>
                    <p class="title">{{t('concact')}}</p>
                    <p class="content">{{t('concact_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            
        </div>
        <div class="section section6">
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
      }
      .section0 {
         background: url("../../assets/images/pc/concact.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 50px;
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
    }
}
</style>

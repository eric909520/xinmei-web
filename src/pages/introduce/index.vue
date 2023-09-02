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
</script>

<template>
<div class="big_box">
  <fullPage  class="full-page" ref="fullpage"  :options="state.options">
   <div class="section section0">
      <div class="container">
         
      </div>
   </div>   
   <div class="section section1">
      <div class="container">
         
      </div>
   </div>   
   <div class="section section2">
      <div class="container">
         
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
        }
      }
      .section0 {
         background: url("../../assets/images/pc/bg2_1.png") no-repeat center;
         background-size: 100% 100%;
      }
      .section1 {
         background: url("../../assets/images/pc/bg2_2.png") no-repeat center;
         background-size: 100% 100%;
      }
      .section2 {
         background: url("../../assets/images/pc/bg2_3.png") no-repeat center;
         background-size: 100% 100%;
      }
    }
}

</style>

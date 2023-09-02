<script setup>
import { onMounted, reactive, ref } from 'vue'
const count = ref(0)
const state = reactive({
  options:{
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
     credits: {
      "enabled": false,
      "label": '',
      "position": 'right'
    },
  }
})
</script>

<template>
<div class="big_box">
  <fullPage e class="full-page" ref="fullpage"  :options="state.options">
    <div class="section section1">
        <div class="one"> 
        </div>          
    </div>   
    <div class="section section2">
        <div class="one">  
        首页（背景图）   1
        </div>          
    </div> 
     <div class="section section3">
        <div class="one">  
        首页（背景图）   
        </div>          
    </div> 
     <div class="section section4">
        <div class="one">  
        首页（背景图）   
        </div>          
    </div> 
     <div class="section section5">
        <div class="one">  
        首页（背景图）   
        </div>          
    </div> 
    <div class="section section6">
        <div class="one">  
        首页（背景图）   
        </div>          
    </div> 
  </fullPage >
</div>

  
</template>

<style scoped lang="scss">
.big_box {
    width: 100%;
    p {
        color: red;
        font-size: 14px;
    }
    .full-page {
      width: 100%;
      .section {
        width: 100%;
        height: 100%;
      }
      .section1 {
         background: url("../../assets/images/pc/bg1.png") no-repeat center;
         background-size: cover;
      }
      .section2 {
         background: url("../../assets/images/pc/bg2.png") no-repeat center;
         background-size: cover;
      }
      .section3 {
         background: url("../../assets/images/pc/bg3.png") no-repeat center;
         background-size: cover;
      }
      .section4 {
         background: url("../../assets/images/pc/bg4.png") no-repeat center;
         background-size: cover;
      }
      .section5 {
         background: url("../../assets/images/pc/bg5.png") no-repeat center;
         background-size: cover;
      }
      .section6 {
         background: url("../../assets/images/pc/bg6.png") no-repeat center;
         background-size: cover;
      } 
    }
}

</style>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import Intro1 from "@/assets/images/pc/intro_1.svg"
import Intro2 from "@/assets/images/pc/intro_2.svg"
import Intro3 from "@/assets/images/pc/intro_3.svg"
import Intro4 from "@/assets/images/pc/intro_4.svg"
import Intro5 from "@/assets/images/pc/intro_5.svg"
const { t } = useI18n()
const fullpage = ref(null)
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
onMounted(()=>{
   fullpage.value.api.moveTo(1)
})
const lists = computed(()=>[
   {Mname:t('forward'),Sname:t('high_product'),img:Intro1},
   {Mname:t('one_body'),Sname:t('poduct_map'),img:Intro2},
   {Mname:t('ten_year'),Sname:t('gf_expreise'),img:Intro3},
   {Mname:t('authority'),Sname:t('responity_sg'),img:Intro4},
   {Mname:t('fast'),Sname:t('recall_service'),img:Intro5}
])
</script>

<template>
<div class="big_box">
  <fullPage  class="full-page" ref="fullpage"  :options="state.options">
   <div class="section section0">
      <div class="container">
         <div class="first">
            <p class="title">{{t('ten_year')}}</p>
            <p>{{t('experise')}}</p>
         </div>
         <div class="first">
            <img src="@/assets/images/pc/wish_logo.svg" alt="">
            <p>{{t('one_wish')}}</p>
         </div>
         <div class="first">
            <p class="title">315 {{t('Mwall')}}</p>
            <p>{{t('amount_machain')}}</p>
         </div>
      </div>
   </div>   
   <div class="section section1">
      <div class="controduce">
         <div>
            <p class="title">{{t('company_intro')}}</p>
            <p class="content">{{t('first_intro')}}</p>
            <p class="content">{{t('second_intro')}}</p>
            <p class="content">{{t('thirs_intro')}}</p>
         </div>
         <div class="list">
            <ul>
               <li v-for="(item,index) in lists" :key="index">
                  <img :src="item.img" alt="">
                  <p>{{item.Mname}}</p>
                  <p>{{item.Sname}}</p>
               </li>
            </ul>
         </div>
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
         display: flex;
         width: 1200px;
         justify-content: center;
         margin: auto;
         height: 100%;
         gap: 120px;
            p{
               color: #fff;
               font-size: 16px;
            }
            .first {
               height: 80px;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: space-between;
               .title {
                  font-size: 28px;
               }
               img {
                  width: 31px;
                  height: 31px;
               }
            }
        }
        .controduce {
         width: 887px;
         margin: 0 auto;
         display: flex;
         height: 100%;
         flex-direction: column;
         justify-content: space-between;
         p {
            text-align: left;
         }
         .title {
            font-size: 50px;
            color: #171A20;
            margin-bottom: 30px;
            text-align: center;
         }
         .content {
            font-size: 16px;
            color:  #393C41;
            text-indent: 2em;
            margin-bottom: 25px;
         }
         .list {
            ul {
               display: flex;
               gap: 100px;
               li {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  img {
                     width: 38px;
                     height: 38px;
                  }
                  p {
                     color: #fff;
                     font-size: 18px;
                  }
               }
            }
         }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/bg2_1.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-end;
         padding-bottom: 90px;
      }
      .section1 {
         background: url("../../assets/images/pc/bg2_2.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 80px;
         padding-bottom: 90px;
         ::v-deep {
            .fp-overflow {
               height: 100%;
            }
         }
      }
      .section2 {
         background: url("../../assets/images/pc/bg2_3.png") no-repeat center;
         background-size: 100% 100%;
      }
    }
}

</style>

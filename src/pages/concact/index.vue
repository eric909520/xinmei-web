<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import { useI18n } from 'vue-i18n'
import companyImg1 from "@/assets/images/pc/concact_1.svg"
import companyImg2 from "@/assets/images/pc/concact_2.svg"
import companyImg3 from "@/assets/images/pc/concact_3.svg"
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
const isMobile = inject('isMobile')
onMounted(()=>{
})
const companyList = computed(()=>[
  {company:t('main_company'),img:companyImg1,name:t('main_company_name'),address:t('main_company_address'),mail:"contact@sunmae.cn",phone:'+86 516 83006977'},
  {company:t('foreign_company'),img:companyImg2,name:t('other_company1_name'),address:t('other_company1_address'),mail:"contact@sunmae.cn"},
  {company:t('other_company2'),img:companyImg3,name:t('other_company2_name'),address:t('other_company2_address'),mail:"contact@sunmae.cn"},
  {company:t('other_company3'),img:companyImg3,name:t('other_company3_name'),address:t('other_company3_address'),mail:"contact@sunmae.cn"}
])
const { t } = useI18n()
</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <div class="full-page">
        <div class="section section0" data-aos="zoom-out">
            <div class="container">
                <div>
                    <p class="title" data-aos="fade-down">{{t('concact')}}</p>
                    <p class="content" data-aos="fade-up">{{t('concact_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="company_list">
              <ul>
                <li v-for="(item,index) in companyList" :key="index">
                  <img :src="item.img" alt="" data-aos="flip-left">
                  <p class="company" data-aos="fade-down">{{item.company}}</p>
                  <p class="name" data-aos="fade-down">{{item.name}}</p>
                  <p class="address" data-aos="fade-up">{{t('address')}}:{{item.address}}</p>
                  <p class="address" data-aos="fade-up">{{t('email')}}:{{item.mail}}</p>
                  <p class="address" data-aos="fade-up" v-if="item.phone">{{t('phone')}}:{{item.phone}}</p>
                </li>
              </ul>
            </div>
        </div>
    </div>
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
        .company_list {
          width: 1200px;
          margin: 0 auto;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            li {
              width: 580px;
              background: #fff;
              border: 1px solid #E1E1E1;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              // align-items: center;
              padding: 64px 50px;
              box-sizing: border-box;
              margin-bottom: 40px;
              height: 442px;
              p {
                text-align: left;
              }
              &:nth-child(1) {
                img {
                  width: 70px;
                  height: 61px;
                }
              }
              &:nth-child(2) {
                img {
                  width: 65px;
                  height: 57px;
                }
              }
              &:nth-child(3) {
                img {
                  width: 58px;
                  height: 60px;
                }
              }
              &:nth-child(4) {
                img {
                  width: 58px;
                  height: 60px;
                }
              }
              .company {
                font-size: 40px;
                color: #393C41;
                margin: 20px 0;
              }
              .name {
                color: #333333;
                font-size: 20px;
                margin-bottom: 10px;
              }
              .address {
                font-size: 16px;
                color: #333333;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
      .section0 {
         background: url("../../assets/images/pc/concact.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
         box-sizing: border-box
      }
      .section1 {
        padding-top: 120px;
        padding-bottom: 20px;
        justify-content: flex-start;
         background: #F1F3F4;
        height: auto !important;
      }
      .section6 {
        height: 340px !important;
      }
    }
}
.m_big_box {
  .full-page {
    .section {
      .container {
        align-items:center;
        width: 100%;
        .title {
            color: #fff;
            font-size: 30px;
        }
        .content {
            width: 315px;
            color: #fff;
            margin-bottom: 15px;
        }
      }
    }
    .section0 {
      background: url("../../assets/images/mobile/concact.png") no-repeat center;
      background-size: 100% 100%;
    }
    .section1 {
      padding-top: 70px;
      box-sizing: border-box;
      .company_list {
        width: calc(100% - 40px);
        ul {
          li {
            padding: 20px;
            &:nth-child(1) {
                img {
                  width: 35px;
                  height: 31px;
                }
            }
            &:nth-child(2) {
              img {
                width: 33px;
                height: 29px;
              }
            }
            &:nth-child(3) {
              img {
                width: 29px;
                height: 30px;
              }
            }
            &:nth-child(4) {
              img {
                width: 29px;
                height: 30px;
              }
            }
            .company {
                font-size: 20px;
                color: #393C41;
                margin: 10px 0;
              }
              .name {
                color: #333333;
                font-size: 14px;
                margin-bottom: 10px;
              }
              .address {
                font-size: 12px;
                color: #333333;
                margin-bottom: 5px;
              }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, onMounted, reactive, ref,inject } from 'vue'
import Footer from "@/components/Footer.vue"
import{ElTable,ElTableColumn} from "element-plus"
import { useI18n } from 'vue-i18n'
import axios from "axios"
import {Encrypt,Decrypt} from "@/utils/aes.js"
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
const { t } = useI18n()
const fullpage = ref(null)
const isMobile = inject('isMobile')
let materialSpanArr = ref([])
let materialpos = ref(null)
let list1 = ref([])
let list2 = ref([])
const getList = (type)=>{
  let params = {
    langue:localStorage.getItem('lang') == 'zh' ? 0 : 1,
    type:type
  }
  let dataParmas = {
    sign:'',
    data:Encrypt(params)
  }
  axios.post('/system/doc/list',dataParmas).then(res=>{
    if(type == 0) {
      list1.value = res.data.data
    }else {
      list2.value = res.data.data
    }
  })
}
onMounted(async()=>{
  //  setTabelRowSpan(tableData.value,['use'],{use:[]});
   await getList(0)
   await getList(1)
})
const setTabelRowSpan=(tableData, fieldArr, effectMerge = {})=> {
      let lastItem = {};
      fieldArr.forEach((field, index) => {
          let judgeArr = fieldArr.slice(0, index + 1);
          if (effectMerge[field]) {
              judgeArr = [...effectMerge[field], field];
          }
          tableData.forEach(item => {
              item.mergeCell = fieldArr;
              const rowSpan = `rowspan_${field}`;
              if (judgeArr.every(e => lastItem[e] === item[e] && item[e] !== '')) {
                  item[rowSpan] = 0;
                  lastItem[rowSpan] += 1;
              } else {
                  item[rowSpan] = 1;
                  lastItem = item;
              }
          });
      });
      tableData.value = tableData
  }

const objectSpanMethod=({ row, column, rowIndex, columnIndex })=> {
    if (row.mergeCell.includes(column.property)) {
        const rowspan = row[`rowspan_${column.property}`];
        if (rowspan) {
            return { rowspan: rowspan, colspan: 1 };
        } else {
            return { rowspan: 0, colspan: 0 };
        }
    }
}


</script>

<template>
 <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    <div class="full-page">
        <div class="section section0" data-aos="zoom-out">
            <div class="container">
                <div>
                    <p class="title" data-aos="fade-down">{{t('download')}}</p>
                    <p class="content" data-aos="fade-up">{{t('download_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="table_box">
              <p class="title">{{$t('gf_components')}}</p>
              <el-table
                :data="list1"
                border
                style="width: 100%"
              >
                <el-table-column prop="number" :label="t('table_number')" type="index" min-width="18%" align="center" v-if="!isMobile"/>
                <el-table-column prop="typeName" :label="t('Classification')"/>
                <el-table-column prop="docName"  :label="t('file_name')" >
                  <template #default="scope">
                    <a :href="scope.row.link">{{scope.row.docName}}</a>
                  </template>
                </el-table-column>
                <el-table-column prop="docType"  :label="t('file_type')" v-if="!isMobile"/>
              </el-table>
            </div>
            <div class="table_box add_margin">
              <p class="title">{{$t('technical_support')}}</p>
              <el-table
                :data="list2"
                border
                style="width: 100%"
              >
                <el-table-column prop="number" :label="t('table_number')" type="index" min-width="18%" align="center" v-if="!isMobile"/>
                <el-table-column prop="typeName" :label="t('Classification')" />
                <el-table-column prop="docName"  :label="t('file_name')" >
                  <template #default="scope">
                    <a :href="scope.row.link">{{scope.row.docName}}</a>
                  </template>
                </el-table-column>
                <el-table-column prop="docType"  :label="t('file_type')" v-if="!isMobile"/>
                <template #empty>
                  <p>{{$t('no_data')}}</p>
                </template>
              </el-table>
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
        .table_box {
          width: 1200px;
          margin: 0 auto;
          .title {
            font-size: 50px;
            color: #393C41;
            margin-bottom: 40px;
          }
        }
        .add_margin {
          margin-top: 110px;
        }
      }
      .section0 {
         background: url("../../assets/images/pc/download.png") no-repeat center;
         background-size: 100% 100%;
         justify-content: flex-start;
         padding-top: 120px;
         box-sizing: border-box;
      }
      .section1 {
        padding-top: 50px;
        padding-bottom: 20px;
        justify-content: flex-start;
         background: #F1F3F4;
         height: auto !important;
         box-sizing: border-box;
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
      .table_box {
          width: calc(100% - 40px);
          margin: 0 auto;
          .title {
            font-size: 30px;
            color: #393C41;
            margin-bottom: 20px;
          }
      }
      .add_margin {
        margin-top: 50px;
      }
    }
    .section0 {
      background: url("../../assets/images/mobile/download.png") no-repeat center;
      background-size: cover;
    }
    .section1 {
      padding-top: 70px;
      padding-bottom: 40px;
    }
  }
}
</style>

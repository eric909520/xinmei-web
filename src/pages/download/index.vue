<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import Footer from "@/components/Footer.vue"
import{ElTable,ElTableColumn} from "element-plus"
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
const { t } = useI18n()
const fullpage = ref(null)
let materialSpanArr = ref([])
let materialpos = ref(null)
const tableData = ref([
 {
   number:1,
   name:'厂区总平面图、安装组件房屋结构图、建筑图',
   type:"电子档图纸",
   use:"评估荷载，最优接入方式和规划容量",
   useType:1
 },
 {
   number:2,
   name:'电气一次接线图',
   type:"电子档图纸",
   use:"评估荷载，最优接入方式和规划容量",
   useType:1
 },
 {
   number:3,
   name:'接入点位置，实际变压器容量及数量',
   type:"配电间位置图纸/变压器照片/厂区开关柜照片",
   use:"评估荷载，最优接入方式和规划容量",
   useType:1
 },
 {
   number:4,
   name:'近一年电费清单',
   type:"清晰照片/清晰扫描件",
   use:"清晰照片/清晰扫描件",
   useType:2
 },
 {
   number:5,
   name:'企业用电曲线',
   type:"描述企业用电情况（生产时间段，24 小时常开设备的功率及数量）",
   use:"评估消纳比例",
   useType:3
 },
 {
   number:6,
   name:'现场照片（屋面、屋顶结构、内部生产）',
   type:"照片",
   use:"屋面情况包括防水现状、屋面设备，内部钢架结构",
   useType:4
 }
])
onMounted(()=>{
   fullpage.value.api.moveTo(1)
   setTabelRowSpan(tableData.value,['use'],{use:[]})
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
 <div class="big_box">
    <fullPage  class="full-page" ref="fullpage"  :options="state.options">
        <div class="section section0">
            <div class="container">
                <div>
                    <p class="title">{{t('download')}}</p>
                    <p class="content">{{t('download_desc')}}</p>
                </div>
            </div>
        </div>
        <div class="section section1">
            <div class="table_box">
              <p class="title">收资清单（技术部分）</p>
              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%"
              >
                <el-table-column prop="number" :label="t('table_number')" width="180" />
                <el-table-column prop="name" :label="t('material_name')" />
                <el-table-column prop="type"  :label="t('material_type')" />
                <el-table-column prop="use"  :label="t('material_use')" />
              </el-table>
            </div>
            <div class="table_box add_margin">
              <p class="title">收资清单（技术部分）</p>
              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%"
              >
                <el-table-column prop="number" :label="t('table_number')" width="180" />
                <el-table-column prop="name" :label="t('material_name')" />
                <el-table-column prop="type"  :label="t('material_type')" />
                <el-table-column prop="use"  :label="t('material_use')" />
              </el-table>
            </div>
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

<template>
  <div>
    <b-card no-block>
      <b-button size="sm" :variant="getAddBtnStatus.variant" @click="(event) => { doEdit({},'add') }"><i :class="getAddBtnStatus.icon"></i> {{getAddBtnStatus.name}}</b-button>
      <b-tabs small card ref="tabs" v-model="tabIndex">
        <b-tab>
           <table id="products-datatable" class="table table-bordered table-hover table-responsive" width="100%">
             <thead>
               <tr>
                 <th>id</th>
                 <th>公司名稱</th>
                 <th>公司地址</th>
                 <th>人員</th>
                 <th>Email</th>
                 <th style="min-width:100px;max-width:100px;width:100px"></th>
               </tr>
             </thead>
             <tbody>
             </tbody>
           </table>
        </b-tab>
        <b-tab>
          <Edit :changeTab="changeTab" :rowData="rowData" :action="action"></Edit>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
// import Test from '@/views/Test.vue'
import $ from 'jquery'
import dataTable from 'datatables.net-bs4'
import configureDataTable from '@/utils/configureDataTable'
import { dfContent } from '@/utils/configureDataTable'
import Edit from './Edit.vue'

configureDataTable($)

$.fn.DataTable = dataTable

const url = '/myweb/api/test/get_data'
// const url = '/fake/posts'

export default {
  name: 'Bps',
  components:{
    Edit
  },
  data(){
    return {
      products: [],
      productsTable: {},
      tabIndex: 0,
      rowData:{},
      action: ''
    }
  },
  computed:{
    getAddBtnStatus(){
      let icon, variant, name;
      if(this.tabIndex == 0){
        icon = 'fa fa-plus';
        variant = 'info';
        name = '新增';
      }else{
        icon = 'fa fa-arrow-left';
        variant = 'secondary';
        name = '返回';
      }
      return {
        icon,
        variant,
        name
      };
    }
  },
  mounted() {
          //this.getProducts();
          var that = this;
          var table = $('#products-datatable').DataTable({
              ajax: {
                  url: url,
                  dataSrc: 'items',
                  dataType: 'json',
                  type : 'post'
              },
              columns: [
                {
                  data: "bp_id" //产品名字
                },
                {
                  data: "bp_display_name"
                },
                {
                  data: "bp_address"
                },
                {
                  data: "bp_contact_man"
                },
                {
                  data: "bp_contact_email"
                },
                null
              ],
              columnDefs : [{
                targets : 5,
                data : null,
                defaultContent : dfContent,
                searchable : false,
                orderable : false,
                width : "5%",
                className : ''
              }, {
                "targets" : 1,
                "orderable" : false
              }, {
                "targets" : 0,
                "orderable" : false
              }],
              drawCallback: function(settings) {
                  //表格每次重绘回调函数，此处可进行相关插件初始化

              },
              fnRowCallback: ( nRow, aData, iDisplayIndex, iDisplayIndexFull ) => {
                  var _rtd = $(nRow).find('td');
                  _rtd = _rtd.not(':last');

                  // row click
                  _rtd.addClass('pointer').on('click', function(){
                    that.doEdit(aData, 'view');
                    // app.doEdit(aData.id);

                    // // remove all highlight first
                    // $(this).parent().parent().find('tr').removeClass('active');

                    // app._lastPk = aData.id;
                    // app._tr = $(this).parent();
                    // setTimeout(function(){
                    //   app._tr.addClass('active');
                    // }, 100);
                  });

                  // edit click
                  $(nRow).find("a").eq(0).click(()=>{
                    that.doEdit(aData, 'edit');
                  });
                  // delete click
              }
              // language: {
              //     "url": "./static/datatable_zh_CN.json"
              // }
          }).api();
          //保存datatables对象，可进行相关的api调用
          that.$set(that, 'productsTable', table);
  },
  methods:{
    doEdit(data, action){
      this.rowData = data;
      console.log(this.rowData)
      this.action = action;
      this.changeTab();
    },
    changeTab(){
      this.tabIndex = this.tabIndex === 0 ? 1 : 0;
      this.reload();
    },
    reload(){
      this.productsTable.ajax.reload()
    }
  }
}
</script>

<style>
.card-header {
    display: none;
}
.pointer {
  cursor: pointer;
}
</style>

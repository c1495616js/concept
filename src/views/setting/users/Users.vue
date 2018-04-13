<template>
  <div>
    <b-button variant="success" @click="changeTab">Button</b-button>
    <b-card no-block>
      <b-tabs small card ref="tabs" v-model="tabIndex">
        <b-tab>
           <table id="products-datatable" class="table table-bordered table-hover">
             <thead>
               <tr>
                 <th>id</th>
                 <th>account</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
             </tbody>
           </table>
        </b-tab>
        <b-tab>
          Tab Contents 2
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

configureDataTable($)

$.fn.DataTable = dataTable

const url = '/myweb/api/members/get_data'
// const url = '/fake/posts'

export default {
  name: 'Users',
  data(){
    return {
      products: [],
      productsTable: {},
      tabIndex: 0
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
                  data: "id" //产品名字
                },
                {
                  data: "account"
                },
                null
              ],
              columnDefs : [{
                targets : 2,
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
                  _rtd.addClass('pointer').on('click', function(){
                    that.changeTab();
                    // app.doEdit(aData.id);

                    // // remove all highlight first
                    // $(this).parent().parent().find('tr').removeClass('active');

                    // app._lastPk = aData.id;
                    // app._tr = $(this).parent();
                    // setTimeout(function(){
                    //   app._tr.addClass('active');
                    // }, 100);
                  });
              }
              // language: {
              //     "url": "./static/datatable_zh_CN.json"
              // }
          }).api();
          //保存datatables对象，可进行相关的api调用
          that.$set(that, 'productsTable', table);
  },
  methods:{
    changeTab(){
      this.tabIndex = this.tabIndex === 0 ? 1 : 0;
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

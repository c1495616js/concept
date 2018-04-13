<template>
  <div>
    <table id="products-datatable" class="table  table-bordered table-hover"></table>
  </div>
</template>

<script>
import $ from 'jquery'
import dataTable from 'datatables.net-bs4'
import configureDataTable from '@/utils/configureDataTable'

$.fn.DataTable = dataTable

configureDataTable($)

// require('datatables.net-bs4')

const url = '/myweb'

export default {
  name: 'Users',
  data(){
    return {
      products: [],
      productsTable: {}
    }
  },
   mounted() {

            //this.getProducts();
            var that = this;
            var table = $('#products-datatable').DataTable({
                processing: true,
                serverSide: true,
                destroy: true,
                ajax: {
                    url: url,
                    dataSrc:'items',
                    dataType : 'json',
				            type : 'post'
                },
                columns: [
                  {
                    data: "id" //产品名字
                  },
                  {
                    data: "account"
                  }
                ],
                drawCallback: function(settings) {
                    //表格每次重绘回调函数，此处可进行相关插件初始化

                }
                // language: {
                //     "url": "./static/datatable_zh_CN.json"
                // }
            }).api();
            //保存datatables对象，可进行相关的api调用
            that.$set(that, 'productsTable', table);
        },
}
</script>

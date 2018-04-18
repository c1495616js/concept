<template>
  <div>
    <b-card no-block>
      <b-button size="sm" :variant="getAddBtnStatus.variant" @click="(event) => { doEdit({}, 'add') }"><i :class="getAddBtnStatus.icon"></i> {{getAddBtnStatus.name}}</b-button>
      <b-tabs small card ref="tabs" v-model="tabIndex">
        <b-tab>
           <table id="dt-table" class="table table-striped table-bordered table-hover" width="100%">
             <thead>
               <tr>
                 <th>id</th>
                 <th>公司名稱</th>
                 <th>統一編號</th>
                 <th>郵遞區號</th>
                 <th>客服</th>
                 <th>電話</th>
                 <th>傳真</th>
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

    <!-- delete modal -->
    <!-- <DeleteModal :show="deleteModalShow" @doDelte="doDelete" @close="closeDeleteModal"></DeleteModal> -->
    <b-modal title="刪除" centered class="modal-danger" v-model="deleteModalShow" @ok="doDelete" cancel-title="取消" ok-title="確認"    ok-variant="danger">
      確認刪除？
    </b-modal>
  </div>
</template>

<script>
// import Test from '@/views/Test.vue'
import $ from 'jquery'
import dataTable from 'datatables.net-bs4'

import configureDataTable from '@/utils/configureDataTable'
import { dfContent } from '@/utils/configureDataTable'
import Edit from './Edit.vue'
import { mapState } from 'vuex'
import DeleteModal from '../../pages/DeleteModal.vue'

configureDataTable($)

$.fn.DataTable = dataTable

const url = '/api/gsm/gas_supplier_dt'
// const url = '/fake/posts'

export default {
  name: 'Bps',
  components:{
    Edit,
    DeleteModal
  },
  data(){
    return {
      dts: [],
      dtTable: {},
      tabIndex: 0,
      rowData:{},
      action: '',
      deleteModalShow: false
    }
  },
  computed:{
    ...mapState(['baseUrl']),
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
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    var table = $('#dt-table').DataTable({
        ajax: {
            url: this.baseUrl + url,
            dataSrc: 'items',
            dataType: 'json',
            type : 'post',
            headers: {
              Authorization: token
            },
        },
        columns: [
          {
            data: "bpId" //产品名字
          },
          {
            data: "bpName"
          },
          {
            data: "bpUnicode"
          },
          {
            data: "bpZipcode"
          },
          {
            data: "bpServiceTel"
          },
          {
            data: "bpTel"
          },
          {
            data: "bpFax"
          },
          null
        ],
        columnDefs : [{
          targets : 7,
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
            $(nRow).find("a").eq(1).click(()=>{
              that.setDeleteModal(aData);
              // that.doDelete(aData);
            })
        }
    }).api();

    //保存datatables对象，可进行相关的api调用
    that.$set(that, 'dtTable', table);
  },
  methods:{
    doEdit(rowData, action){
      this.rowData = rowData;
      this.action = action;
      this.changeTab();
    },
    setDeleteModal(rowData){
      this.rowData = rowData
      this.deleteModalShow = true
    },
    doDelete(){
      this.deleteModalShow = false
      this.$http.delete(`/api/gsm/gas_supplier/${this.rowData.bpId}`).then(res => res.data).then((res) => {
        if(res.status == "success"){
          this.$notify({
              group: 'post',
              title: '系統通知',
              text: '刪除成功',
              type: 'success'
            });
        }else{
          this.$notify({
            group: 'post',
            title: '刪除失敗',
            text: res.errMsg,
            type: 'warn',
          });
        }
        this.reload();
      })

    },
    changeTab(){
      this.tabIndex = this.tabIndex === 0 ? 1 : 0;
      this.reload();
    },
    reload(){
      this.dtTable.ajax.reload()
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

/* table.dt */
table.dataTable {
  border-collapse: collapse !important;
}
</style>

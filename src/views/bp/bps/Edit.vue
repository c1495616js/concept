<template>
<b-card>
          <div slot="header">
            <strong>瓦斯業者編輯</strong>
          </div>
          <b-form-group
            label="統一編號"
            label-for="bpUnicode"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpUnicode" type="text" v-model="data.bpUnicode" :value="data.bpUnicode"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司編號"
            label-for="bpDocno"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpDocno" type="text" v-model="rowData.bpDocno" :value="rowData.bpDocno"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司名稱"
            label-for="bpName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpName" type="text" v-model="data.bpName" :value="data.bpName"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司地址"
            label-for="bpAddress"
            :label-cols="3"
            :horizontal="true">
            <b-container>
              <b-row>
                <b-col cols="3">
                  <b-form-select id="basicSelect"
                    :plain="true"
                    :options="['台北市','Option 1', 'Option 2', 'Option 3']"
                    value="台北市">
                  </b-form-select>
                </b-col>
                <b-col>
                   <b-form-input id="bpAddress" type="text" v-model="data.bpAddress" :value="data.bpAddress"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </b-form-group>


          <b-form-group
            label="Inline radios"
            label-for="basicInlineRadios"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group id="basicInlineRadios"
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              :checked="3">
            </b-form-radio-group>
          </b-form-group>


          <b-form-group
            label="File input"
            label-for="fileInput"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInput" :plain="true"></b-form-file>
          </b-form-group>
          <b-form-group
            label="Multiple file input"
            label-for="fileInputMulti"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInputMulti" :plain="true" :multiple="true"></b-form-file>
          </b-form-group>
          <div slot="footer">
            <b-button @click="changeTab" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i>取消</b-button>
            <b-button @click="doSubmit" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>{{getSubmitBtnName}}</b-button>
          </div>
        </b-card>
</template>


<script>
  import qs from 'qs'

  export default {
    name: 'BPS_Edit',
    data(){
      return {
        data: {}
      }
    },
    props: ['rowData','changeTab','action'],
    computed:{
      getSubmitBtnName(){
        return this.action === 'view' ? '確定' : this.action === 'edit' ? '更新' : '新增';
      }
    },
    watch:{
      rowData: function() {
        this.data = {};
        if(this.rowData && this.rowData.bpId){
          console.log(this.rowData.bpId);
          this.$http.get(`/api/gsm/gas_supplier/${this.rowData.bpId}`).then((res)=>{return res.data.data})
          .then((data) => {
            this.data = data;
          })
        }
      }
    },
    methods:{
      doSubmit(){
        if(this.action === 'view'){
          this.changeTab();
          return;
        }

        this.$http.post('/myweb/api/test/insert',qs.stringify(this.rowData)).then((res)=>{
          console.log(res);
          this.changeTab();
        })
      }
    }
  }
</script>

<style scoped>
.card-header {
    display: block;
}
.pointer {
  cursor: pointer;
}
</style>

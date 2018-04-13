<template>
<b-card>
          <div slot="header">
            <strong>瓦斯業者編輯</strong>
          </div>
          <b-form-group
            label="統一編號"
            label-for="bp_unicode"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bp_unicode" type="text" v-model="rowData.bp_unicode" :value="rowData.bp_unicode"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司編號"
            label-for="bp_docno"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bp_docno" type="text" v-model="rowData.bp_docno" :value="rowData.bp_docno"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司名稱"
            label-for="bp_name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bp_name" type="text" ></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司顯示名稱"
            label-for="bp_display_name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bp_display_name" type="text" v-model="rowData.bp_display_name" :value="rowData.bp_display_name"></b-form-input>
          </b-form-group>
          <b-form-group
            label="公司地址"
            label-for="bp_address"
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
                   <b-form-input id="bp_address" type="text" v-model="rowData.bp_address" :value="rowData.bp_address"></b-form-input>
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
    props: ['changeTab','rowData','action'],
    computed:{
      getSubmitBtnName(){
        return this.action === 'view' ? '確定' : this.action === 'edit' ? '更新' : '新增';
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

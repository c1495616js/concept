<template>
<b-card>
        <form id="edit-form" method="POST" action="" @submit.prevent="doSubmit" @keydown="form.errors.clear($event.target.name)">
          <div slot="header">
            <strong>瓦斯業者編輯</strong>
          </div>
          <!--  -->
          <b-form-group
            label="統一編號"
            label-for="bpUnicode"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpUnicode" type="text" v-model="form.bpUnicode" ></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司編號"
            label-for="bpDocno"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpDocno" type="text" v-model="form.bpDocno"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司名稱"
            label-for="bpName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpName" type="text" v-model="form.bpName"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司顯示名稱"
            label-for="bpDisplayName"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpDisplayName" type="text" v-model="form.bpDisplayName"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司地址"
            label-for="bpAddress"
            :label-cols="3"
            :horizontal="true">
            <b-container>
              <b-row>
                <b-col sm="3">
                  <b-form-select
                    :plain="true"
                    :options="zip.getAllCity()"
                    v-model="zip.city">
                  </b-form-select>
                </b-col>
                <b-col sm="3">
                  <b-form-select
                    :plain="true"
                    :options="zip.getAllDistrict()"
                    v-model="zip.district"
                    >
                  </b-form-select>
                </b-col>
                <b-col sm="6">
                   <b-form-input id="bpAddress" type="text" v-model="form.bpAddress"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="代表人姓名"
            label-for="bpRepresentMan"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpRepresentMan" type="text" v-model="form.bpRepresentMan"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="代表人電話"
            label-for="bpRepresentTel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpRepresentTel" type="text" v-model="form.bpRepresentTel"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="聯絡人姓名"
            label-for="bpContactMan"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpContactMan" type="text" v-model="form.bpContactMan"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="聯絡人電話"
            label-for="bpContactTel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpContactTel" type="text" v-model="form.bpContactTel"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="聯絡人Email"
            label-for="bpContactEmail"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpContactEmail" type="text" v-model="form.bpContactEmail"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司電話"
            label-for="bpTel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpTel" type="text" v-model="form.bpTel"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="服務電話"
            label-for="bpServiceTel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpServiceTel" type="text" v-model="form.bpServiceTel"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="服務信箱"
            label-for="bpServiceEmail"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpServiceEmail" type="text" v-model="form.bpServiceEmail"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="傳真號碼"
            label-for="bpFax"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpFax" type="text" v-model="form.bpFax"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="備註"
            label-for="bpDescription"
            :label-cols="3"
            :horizontal="true">
             <b-form-textarea id="bpDescription"
                     v-model="form.bpDescription"
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="公司Logo_URL"
            label-for="bpLogoUrl"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpLogoUrl" type="text" v-model="form.bpLogoUrl"></b-form-input>
          </b-form-group>
          <!--  -->
          <!-- <FormInput label="公司顯示名稱" :form="form" id="bpDisplayName"></FormInput> -->

          <!--  -->
          <b-form-group
            label="公司狀態"
            label-for="bpStatus"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group id="bpStatus"
              :plain="true"
              :options="[
                {text: 'ENABLE',value: '10'},
                {text: 'DISABLE',value: '01'},
              ]"
              :checked="form.bpStatus"
              v-model="form.bpStatus">
            </b-form-radio-group>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="資本總額(元)"
            label-for="bpCapital"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="bpCapital" type="text" v-model="form.bpCapital"></b-form-input>
          </b-form-group>
          <!--  -->
          <b-form-group
            label="是否系統營運商"
            label-for="bpIsAdmin"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group id="bpIsAdmin"
              :plain="true"
              :options="[
                {text: 'ENABLE',value: '1'},
                {text: 'DISABLE',value: '0'},
              ]"
              :checked="form.bpIsAdmin"
              v-model="form.bpIsAdmin">
            </b-form-radio-group>
          </b-form-group>


          <!-- Footer -->
          <div slot="footer">
            <b-button @click="changeTab" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i>取消</b-button>
            <b-button  type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>{{getSubmitBtnName}}</b-button>
          </div>
           </form>
        </b-card>
</template>


<script>
  import qs from 'qs'
  import Form from '../../../utils/FormClass'
  import ZipClass from '../../../utils/zipClass'
  import FormInput from '../../../utils/FormInput.vue'

  export default {
    name: 'BPS_Edit',
    data(){
      return {
        data: {},
        form: {},
        zip: new ZipClass(),
      }
    },
    props: ['rowData','changeTab','action'],
    computed:{
      getSubmitBtnName(){
        return this.action === 'view' ? '確定' : this.action === 'edit' ? '更新' : '新增';
      },
    },
    components:{
      FormInput,
    },
    watch:{
      rowData() {
        this.data = {};
        this.form = {};
        this.zip = new ZipClass();
        if(this.rowData && this.rowData.bpId){
          console.log(this.rowData.bpId);
          this.$http.get(`/api/gsm/gas_supplier/${this.rowData.bpId}`).then((res)=>{return res.data.data})
          .then((data) => {
            console.log(data)
            this.data = data;
            this.form = new Form(data);
            this.zip = new ZipClass(data.bpZipcode)
          })
        }else{
          this.form = new Form({
            "bpAddress": "",
            "bpCapital": "",
            "bpContactEmail": "",
            "bpContactMan": "",
            "bpContactTel": "",
            "bpDescription": "",
            "bpDisplayName": "",
            "bpDocno": "",
            "bpFax": "",
            "bpIsAdmin": "",
            "bpLogoUrl": "",
            "bpName": "",
            "bpRepresentMan": "",
            "bpRepresentTel": "",
            "bpServiceEmail": "",
            "bpServiceTel": "",
            "bpStatus": "",
            "bpTel": "",
            "bpUnicode": "",
            "bpZipcode": "100"
          })
        }
      },
    },
    methods:{
      doSubmit(event){
        if(this.action === 'view'){
          this.changeTab()
          return
        }

        this.form.bpZipcode = this.zip.zip

        if(this.action === 'edit'){

          this.form.put(`/api/gsm/gas_supplier/${this.data.bpId}`).then((res)=>{
            this.$notify({
              group: 'post',
              title: '系統通知',
              text: '更新成功',
              type: 'success'
            });
            this.changeTab()
          })
          return
        }

      if(this.action === 'add'){
        const payload = (data) => {
          return { gasSupplier: data }
        }

        this.form.post(`/api/gsm/gas_supplier`,payload).then((res)=>{
            this.$notify({
              group: 'post',
              title: '系統通知',
              text: '新增成功',
              type: 'success'
            });
            this.changeTab()
          })
          return
      }

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

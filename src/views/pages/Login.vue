<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>登入</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="icon-globe"></i></span></div>
                  <input type="text" class="form-control" placeholder="統一編號" v-model="unicode">
                </b-input-group>
                <b-input-group class="mb-3">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="icon-user"></i></span></div>
                  <input type="text" class="form-control" placeholder="帳號" v-model="login_id">
                </b-input-group>
                <b-input-group class="mb-4">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="icon-lock"></i></span></div>
                  <input type="password" class="form-control" placeholder="密碼" v-model="login_pwd">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" @click="doLogin">登入</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">忘記密碼?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import sha256 from 'sha256'
import qs from 'qs'
export default {
  name: 'Login',
  data(){
    if(process.env.NODE_ENV == 'production'){
      return {
        unicode: '',
        login_id: '',
        login_pwd: ''
      }
    }
    return {
      unicode: '43147546',
      login_id: '000001@shintaogas.com.tw',
      login_pwd: '778899'
    }
  },
  computed:{
    getParam(){
      let pw = `${this.login_id}/${this.unicode}${this.login_pwd}`;
      pw = sha256(pw).toUpperCase();
      const param = {
        login_id: this.login_id,
        login_pwd: pw
      };
      return param;
    }
  },
  methods: {
    doLogin(){

      console.log(this.getParam.login_pwd == '1A3B6788F8CDC629B776DE78A5BC95C2337E2746C67DD19C56201FC38DE3BB09');
      this.$http.post('/api/login',qs.stringify(this.getParam)).then(res => res.data).then((res) => {
        console.log('res:',res);
        if (res.status === 'success') { // 如果成功
          sessionStorage.setItem('ACCESS_TOKEN', res.data) // 用sessionStorage把token存下来
          this.$notify({
            group: 'post',
            title: '登入成功',
            text: 'Welcome',
            type: 'success',
          });
          setTimeout(()=>{
            this.$router.push('/') // 进入todolist页面，登录成功
          },800)

        } else {
          this.$notify({
            group: 'post',
            title: '登入失敗',
            text: res.errMsg,
            type: 'warn',
          }); // 登录失败，显示提示语
          sessionStorage.setItem('ACCESS_TOKEN', null) // 将token清空
        }
      }, (err) => {
        console.log(err)
        this.$notify({
            group: 'post',
            title: '登入失敗',
            text: err,
            type: 'warn',
          });
        sessionStorage.setItem('ACCESS_TOKEN', null) // 将token清空
      })
    }
  }
}
</script>

<template>
  <div class="login-com">
    <ul class="nav">
      <li
        v-for="item in navList"
        :key="item.id"
        :class="currentId === item.id ? 'current' : ''"
        @click="currentId = item.id"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="form-container">
      <CodeLoginCom v-show="currentId === 1" ref="codeLoginCom" />
      <PWDLoginCom v-show="currentId === 2"  ref="pwdLoginCom"/>
      <div class="options-container">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <p @click="forget">忘记密码</p>
      </div>
    </div>
  </div>
</template>
<script>
import CodeLoginCom from "./CodeLogin";
import PWDLoginCom from "./PwdLoginCom";
import { JSEncrypt } from "jsencrypt";
import qs from 'qs';
export default {
  name: "LoginCom",
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "短信登录"
        },
        {
          id: 2,
          name: "密码登录"
        }
      ],
      currentId: 1
    };
  },
  components: {
    CodeLoginCom,
    PWDLoginCom
  },
  methods: {
    forget() {
      this.$emit("changeMethod", "login");
    },
    encryptedData(publicKey, data) {
      // 新建JSEncrypt对象
      let encryptor = new JSEncrypt();
      // 设置公钥
      encryptor.setPublicKey(publicKey);
      // 加密数据
      return encryptor.encrypt(data);
    },
    async submitForm() {
      if(this.currentId===1){
        // 短信登陆
        console.log(this.$refs.codeLoginCom.codeForm)
      }else{
        // 密码登录
        let {password} = this.$refs.pwdLoginCom.codeForm;
        let publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZUikZamsrfHH1IvmJQxPHYunRJr5/KCc5AD0olGb5Ct0RxHt9iwJEDPgy7+S/o9EPgbqMMPgSOTODIG2bUqfdYjpVRsv/ETHx89RSt+UeZTSH8JA9meTLFudJdHBTgSlYj1J2e2gP3nN7wZVDXRZlTsghSp6qwqJ0GZi0pjqUewIDAQAB'
        let encodePWD=this.encryptedData(publicKey,password);
        let data = {
          mobile:this.$refs.pwdLoginCom.codeForm.phone,
          password:encodePWD
        }
        let res = await this.axios.post('http://192.168.3.120:6001/v4/auth/mobile-password/login',qs.stringify(data));
        console.log(res)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/loginForm/diffMethods.scss";
.login-com {
  @include diffMethodStyle;
}
</style>

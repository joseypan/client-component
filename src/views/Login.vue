<template>
  <div class="login">
    <div class="container">
      <button @click="toHome">跳转到首页</button>
        <LoginFormCom />
    </div>
  </div>
</template>
<script>
import LoginFormCom from "../components/login/LoginFormCom";
export default {
  name: "Login",
  components: {
    LoginFormCom
  },
  methods:{
    toHome(){
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/page.scss";
.login {
  @include pageCommonStyle;
  .container{
      position: fixed;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 30%;
      height: 60%;
  }
}
</style>

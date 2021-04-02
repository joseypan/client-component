<template>
  <div class="login-form">
    <div class="login-header">
      <h1>上午好！</h1>
      <p>xxx——让工程项目更简单</p>
    </div>
    <div class="login-content">
      <LoginCom v-show="isLogin" @changeMethod="changeMethod" />
      <RegisterCom v-show="!isLogin" @changeMethod="changeMethod" />
    </div>
  </div>
</template>
<script>
import RegisterCom from "./RegisterCom";
import LoginCom from "./LoginCom";
export default {
  name: "LoginFormCom",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    RegisterCom,
    LoginCom
  },
  methods: {
    changeMethod(value) {
      switch (value) {
        case "register":
          this.isLogin = true;
          break;
        case "login":
          this.isLogin = false;
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login-form {
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  .login-header {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
    }
  }
  .login-content {
    flex: 5;
  }
}
</style>

<template>
  <div class="pwd-login">
    <el-form ref="form" :model="codeForm" label-width="0">
      <el-form-item>
        <el-input v-model="codeForm.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item class="verification-code">
        <el-input v-model="codeForm.password" placeholder="密码" :type="isPWD?'text':'password'">
          <i class="iconfont el-input__icon" slot="suffix" :class="isPWD?'icon-biyan--':'icon-yanjing'" @click="isPWD=!isPWD"> </i>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "CodeLogin",
  data() {
    return {
      codeForm: {
        phone: "",
        password: ""
      },
      isPWD:true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/loginForm/diffMethods.scss";
.pwd-login {
 @include diffFormStyle;
}
</style>

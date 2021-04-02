<template>
  <div class="code-login">
    <el-form ref="form" :model="codeForm" label-width="0">
      <el-form-item>
        <el-input v-model="codeForm.phone" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item class="verification-code">
        <el-input v-model="codeForm.code" placeholder="验证码"></el-input>
        <el-button>获取验证码</el-button>
      </el-form-item>
    </el-form>
    <p>注册圭土云账号, 表示您已同意 <span>《圭土云用户协议》</span></p>
  </div>
</template>
<script>
export default {
  name: "CodeLogin",
  data() {
    return {
      codeForm: {
        phone: "",
        code: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/loginForm/diffMethods.scss";
.code-login {
  @include diffFormStyle;
}
</style>

<template>
  <div class="register-com">
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
      <RegisterFormCom />
      <div class="options-container">
        <el-button type="primary">确定</el-button>
        <p>已有帐号？<span @click="toLogin">登录</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterFormCom from "./RegisterForm";
export default {
  name: "LoginCom",
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "短信找回"
        }
      ],
      currentId: 1
    };
  },
  components: {
    RegisterFormCom
  },
  methods: {
    toLogin() {
      this.$emit("changeMethod", "register");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/loginForm/diffMethods.scss";
.register-com {
  @include diffMethodStyle;
  .options-container span{
      color: rgb(0, 81, 255);
  }
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/page.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  @include pageCommonStyle;
}
</style>

<template>
  <div class="arrow-com">
    <!-- 自定义箭头 -->
    <div class="arrow-container" :class="isFinished ? 'done' : ''">
      <div class="full-arrow"></div>
      <div class="empty-arrow"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArrowCom",
  props: {
    isFinished: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
$fullArrowColor: rgb(33, 33, 212);
$emptyArrowColor: #ccc;
@mixin arrowStyle {
  position: relative;
  top: 10px;
  left: 0px;
  height: 0;
  width: 48px;
  padding-left: 30px;
  line-height: 40px;
}
@mixin pseudoEleStyle($eleColor) {
  content: "";
  position: absolute;
  top: -9px;
  right: -14px;
  width: 0px;
  height: 0px;
  border: 10px solid;
  border-color: transparent transparent transparent $eleColor;
}
.arrow-com {
  width: 56px;
  height: 20px;
  overflow: hidden;
  .arrow-container {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 200%;
    height: 20px;
    transform: translateX(-50%);
    transition: all 1s;
    .full-arrow {
      @include arrowStyle;
      border-bottom: 2px solid $fullArrowColor;
      &::before {
          @include pseudoEleStyle($fullArrowColor);
      }
    }
    .empty-arrow {
      @include arrowStyle;
      border-bottom: 2px dashed $emptyArrowColor;
      &::before {
        @include pseudoEleStyle($emptyArrowColor);
      }
    }
  }
  .done {
    transform: translateX(0);
  }
}
</style>

<template>
  <div class="progress-com">
    <div class="progress-info">
      <span class="done">{{ doneSize }}M</span>
      <span class="reduce" v-show="reduceSize !== 0">-{{ reduceSize }}M</span>
      <span class="add" v-show="addSize !== 0">+{{ addSize }}M</span>
      <span class="total">/{{ totalSize }}M</span>
    </div>
    <div class="progress-container">
      <div class="progress-done" :style="{ width: doneWidth + '%' }"></div>
      <div
        class="progress-reduce"
        :style="{
          width: reduceWidth + '%',
          left: doneWidth - reduceWidth + '%'
        }"
      ></div>
      <div class="progress-add" :style="{ width: addWidth + '%' }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgressCom",
  props: {
    doneSize: {
      type: Number,
      required: true
    },
    reduceSize: {
      type: Number,
      default: 0
    },
    addSize: {
      type: Number,
      default: 0
    },
    totalSize: {
      type: Number,
      required: true
    }
  },
  computed: {
    doneWidth() {
      return (this.doneSize / this.totalSize) * 100;
    },
    reduceWidth() {
      return (this.reduceSize / this.totalSize) * 100;
    },
    addWidth() {
      return (this.addSize / this.totalSize) * 100;
    }
  }
};
</script>
<style lang="scss" scoped>
$boderColor: #000;
$doneColor: rgb(33, 33, 212);
$addColor: red;
$reduceColor: green;
@mixin progressStyle($color) {
  width: 0;
  height: 100%;
  background-color: $color;
  transition: width 4s;
}
.progress-info {
  width: 100%;
  text-align: center;
  color: #bbb;
  .reduce {
    color: $reduceColor;
  }
  .add {
    color: $addColor;
  }
  .done {
    color: $doneColor;
  }
}
.progress-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 6px;
  border: 1px solid $boderColor;
  border-radius: 3px;
  overflow: hidden;
  .progress-done {
    @include progressStyle($doneColor);
  }
  .progress-add {
    @include progressStyle($addColor);
  }
  .progress-reduce {
    position: absolute;
    left: 25%;
    top: 0;
    @include progressStyle($reduceColor);
  }
}
</style>

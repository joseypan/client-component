<template>
  <div class="count-down">
    <div class="title">提醒倒计时</div>
    <div class="time">{{ hour }}小时{{ minute }}分</div>
    <button @click="start">点击倒计时</button>
  </div>
</template>
<script>
export default {
  name: "CountDownCom",
  props:{
      downTime:Number
  },
  data() {
    return {
      hour: 0,
      minute: 0,
      totalTime: this.downTime,
      timer: ""
    };
  },
  created() {
    this.countDown();
    this.intervalTime();
  },
  methods: {
    countDown() {
      if (this.totalTime < 0) {
        clearInterval(this.timer);
        this.totalTime = this.downTime;
      } else {
        let hour = Math.floor(this.totalTime / 60);
        let minute = Math.floor(this.totalTime % 60);
        this.hour = hour >= 10 ? hour : "0" + hour;
        this.minute = minute >= 10 ? minute : "0" + minute;
        this.totalTime--;
      }
    },
    intervalTime() {
      this.timer = setInterval(() => {
        setTimeout(() => {
          this.countDown();
        }, 0);
      }, 1000);
    },
    start() {
      this.countDown();
      this.intervalTime();
    }
  }
};
</script>
<style lang="scss" scoped></style>

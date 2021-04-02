<template>
  <div class="home">
    <ArrowCom :isFinished="isFinished" />
    <br />
    <hr />
    <br />
    <div class="options">
      <button @click="isFinished = false">上一个</button>
      <button @click="isFinished = true">下一个</button>
    </div>
    <br />
    <hr />
    <br />
    <ProgressCom
      :doneSize="doneSize"
      :reduceSize="reduceSize"
      :addSize="addSize"
      :totalSize="totalSize"
    />
    <br />
    <hr />
    <br />
    <CountDownCom :downTime="downTime" />
    <br />
    <hr />
    <br />
    <button @click="openDir">打开文件夹</button>
    <br />
    <hr />
    <br />
    <button @click="toLogin">跳转到登录页</button>
    <br />
    <hr />
    <br />
    <button @click="add">新增注册表</button>
    <button @click="remove">删除注册表</button>
    <br />
    <hr />
    <br />
    <button @click="option">调用</button>
    <br />
    <hr />
    <br />
    <button>操作数据库</button>
    <br />
    <hr />
    <br />
    <button @click="emitNotification">触发notification</button>
    <div class="name">当前版本:</div>
    <div class="value">{{ appVersion }}</div>
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
import ArrowCom from "../components/common/Arrow";
import ProgressCom from "../components/common/Progress";
import CountDownCom from "../components/common/CountDown";
//有 异步，同步 两种生成方式
// import {machineIdSync} from 'node-machine-id';
// import db from '../utils/sqliteDb'
// console.log('db',db)
// const path = require('path');
// console.log(path)
let invoke;
invoke = Window.edge.func({
  assemblyFile: Window.path.resolve("resources/Demo.dll"),
  typeName: "Demo.DemoMethod",
  methodName: "GetValues",
  references: [ 'System.Net.Http.dll' ]
});
// invoke = Window.edge.func({
//   assemblyFile: Window.path.resolve("resources/electronedge.dll"),
//   typeName: "electronedge.Class1",
//   methodName: "Invoke"
// });
console.dir(invoke);
// invoke('12312312',function(error, result) {
//   if (error) throw error;
//   console.log(result);
// });
invoke('1231231', function(err, val) {
  if (err) throw err;
  console.log(val);
  // this.$message({
  //   message: "dll返回的内容为：" + val,
  //   type: "success"
  // });
});
console.log("结果", invoke);
export default {
  name: "Home",
  data() {
    return {
      isFinished: false,
      doneSize: 200,
      reduceSize: 0,
      addSize: 30,
      totalSize: 500,
      downTime: 20,
      appVersion: require("/package.json").version,
      imgSrc: require("../assets/1.jpg")
    };
  },
  components: {
    ArrowCom,
    ProgressCom,
    CountDownCom
  },
  created() {
    let { ipcRenderer } = this.$electron;
    ipcRenderer.on("message", e => {
      console.log(e);
    });
    console.log("os", Window.os.networkInterfaces());
    console.log("os", Window.getMac);
    console.log("os", Window.getMac.default());
    // this.getMachineId()
  },
  methods: {
    openDir() {
      this.$electron.shell.showItemInFolder(
        window.path.resolve("D:/electron/vuecli-electron-builder")
      );
    },
    toLogin() {
      this.$router.push("/login");
    },
    emitNotification() {
      // 利用h5的notification
      // const path = Window.path;
      const notification = {
        title: "这是标题栏",
        body: "这是body呀",
        icon:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1818808112,3129527573&fm=26&gp=0.jpg"
      };
      const myNotification = new window.Notification(
        notification.title,
        notification
      );
      myNotification.onclick = () => {
        console.log("点击了");
      };
      myNotification.onclose = () => {
        console.log("关闭了");
      };
      // const imgPath = this.imgSrc;
      // const appId = "electron-windows-notifications";

      // let notification = new ToastNotification({
      //   appId: appId,
      //   template: `<toast><visual><binding template="ToastText01"><text id="1">%s</text></binding></visual></toast>`,
      //   strings: ["Hi!"]
      // });

      // notification.on("activated", () => console.log("Activated!"));
      // notification.show();
      // console.log(this.$electron);
      //       const { Notification } = this.$electron.remote;
      //       // const n = new Notification({
      //       // toastXml: 'not xml'
      //       // });
      //       // n.show();
      //       // console.dir(Notification);
      //       // const imgPath = Window.path.resolve('E:/electron/client-component/src/assets/1.jpg')
      //       // console.log(imgPath)
      //       const notification = new Notification({
      //         // title:'标题1',
      //         // body:'body1',
      //         // icon:imgPath
      //         toastXml: `<toast launch= 'clicked'>
      //     <visual version="1">
      //         <binding template="ToastImageAndText02">
      //             <image id="1" src="${require('../assets/lena.jpg')}" alt="image1" addImageQuery="true" />
      //             <text id="1">123</text>
      //             <text id="2">234</text>
      //         </binding>
      //        <binding template="ToastText01">
      //             <text id="1">text</text>
      //         </binding>
      //     </visual>
      //     <commands scenario = "reminding" >
      //   <command id= "dismiss" arguments = "确定" />
      //   <command id= "dismiss" arguments = "取消" />
      //   <command id= "dismiss" arguments = "取消" />
      // </commands>
      // </toast>`
      //       });
      //       notification.show();
      //       notification.on("click", e => {
      //         console.log(e);
      //       });
      // const { dialog } = this.$electron.remote;
      // const { BrowserWindow } = this.$electron.remote;
      // const win = BrowserWindow.getFocusedWindow();
      // dialog.showMessageBoxSync(win, {
      //   title: "更新提醒",
      //   message: "您是否希望现在检测文件或文件夹的更新并同步至服务器?",
      //   noLink: true,
      //   buttons: ["重置计时", "检测"],
      //   defaultId:1
      // });
    },
    add() {},
    remove() {
      console.log("移除");
    },
    option() {
      // invoke = Window.edge.func({
      //   assemblyFile: path.resolve("resources/dll/electronedge.dll"),
      //   typeName: "electronedge.Class1",
      //   methodName: "Invoke"
      // });
    }
    // getMachineId() {
    //   console.log(machineIdSync);
    //   let id = machineIdSync({ original: true });
    //   console.log(id);
    // }
    // querySqlite () {
    //   db.all('select * from test', function (err, res) {
    //     if (!err) {
    //       console.log(JSON.stringify(res))
    //     } else {
    //       console.log(err)
    //     }
    //   })
    // },
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/page.scss";
.home {
  @include pageCommonStyle;
}
</style>

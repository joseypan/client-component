module.exports = {
  // configureWebpack: {
  //   externals:{    
  //     libraryTarget: 'commonjs2',
  //     sqlite3: 'sqlite3'
  //   }
  // },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      builderOptions: {
        appId: "com.example.app",
        productName: "Gtu.app",
        copyright: "Copyright © 2021",
        directories: {
          output: "./dist"
        },
        win: {
          icon: "./public/icon.ico",
          target: "nsis"
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          perMachine: false,
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        },
        publish: [
          {
            provider: "generic",
            url: "http://192.168.18.160:80"
          }
        ]
      },
      externals:['electron-edge-js']
    }
  }
};

// src/renderer/utils/db.js
// 建表脚本，导出db对象供之后使用
const sq3 =require('sqlite3')
console.log(sq3)
// import { docDir } from './settings';
// 将数据存至系统用户目录，防止用户误删程序
export const dbPath = Window.path.join(Window.electron.remote.app.getPath('userData'), 'db/data.sqlite1')

const sqlite3 = sq3.verbose()
const db = new sqlite3.Database(dbPath);
console.log(db)
db.serialize(() => {
  db.run('create table test(name varchar(15))', function () {
    db.run("insert into test values('hello,word')", function () {
      db.all('select * from test', function (err, res) {
        if (!err) {
          console.log(JSON.stringify(res))
        } else {
          console.log(err)
        }
      })
    })
  })
})

export default db
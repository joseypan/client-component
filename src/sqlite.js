const path = require('path');
const sqlite3 = require('sqlite3').verbose()
const dbPath = path.resolve('src/db/spectral.db');
let db

export const conn = () => {
  if (!db || !db.open) {
    db = new sqlite3.Database(dbPath)
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
  }
  return db
}
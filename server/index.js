const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localost',
  user: 'root',
  password: "password",
  database:"CRUDDb"
});


app.get('/', (req, res)=>{
  const sqlInsert = "INSERT INTO Tasks (taskName, finished) VALUES ('clean room', 'study');"
  db.query(sqlInsert, (err, result)=>{
    res.send(" hi there")
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
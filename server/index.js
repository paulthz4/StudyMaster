const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "password",
  database:"studymaster",
  port: '3306'
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'studymaster',
//   post: '3306'
// });

// const sqlInsert = "INSERT INTO tasks (taskName, completed) VALUES ('clean room', true);";

// connection.query(sqlInsert, (err, rows)=>{
//   if(err) throw err
//   else{
//     console.log(rows);
//   }
// })
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post('/api/insert', (req, res)=>{
  const task = req.body.task;

  const sqlInsert = "INSERT INTO tasks (taskName, completed) VALUES (?,false);";
  db.query(sqlInsert, [task],(err, result)=>{
    res.send("Go walk your dog")
  });
});



app.listen(3001, () => {
  console.log("running on port 3001");
});
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = 3001;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "password",
  database:"studymaster",
  port: '3306'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res)=>{
  const sqlSelect = "SELECT * FROM tasks;";
  db.query(sqlSelect, (err, result)=>{
    console.log(result);
    res.send(result);
  });
});

app.post('/api/insert', (req, res)=>{
  const tasks = [[req.body.firstTask.name, false], [req.body.secondTask.name, false],[req.body.thirdTask.name, false]];

  const sqlInsert = "INSERT INTO tasks (taskName, completed) VALUES ?;";
  db.query(sqlInsert, [tasks],(err, result)=>{
    res.send("Go walk your dog")
  });
});

app.delete("/api/delete", (req,res)=>{
  const sqlDelete = "DELETE FROM tasks;";
  
  db.query(sqlDelete, (err,result)=>{
    console.log(err);
  })
});

app.listen(process.env.PORT || PORT, () => {
  console.log("running on port 3001");
});
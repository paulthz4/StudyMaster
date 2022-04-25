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
  const tasks = [[req.body.newTasks.task1.name], [req.body.newTasks.task2.name],[req.body.newTasks.task3.name]];

  const sqlInsert = "INSERT INTO tasks (taskName) VALUES ?;";
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

app.delete("/api/deleteTask/:id", (req,res)=>{
  const taskId = req.params.id;
  const sqlDelete = "DELETE FROM tasks WHERE idtasks = ?;";
  db.query(sqlDelete, taskId,(err, result)=>{
    if(err) console.log(err);
  });
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});
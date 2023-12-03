const mysql = require("mysql");
const express = require("express");
const app = express();

const cors = require("cors");
app.use (cors());
app.use(express.json());

var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"crud4"
})

connection.connect((error)=>{
  if(error){
    console.log("error")
  }else{
    console.log("connected to db ");
  }
})

 app.get("/students",(req,res)=>{
     const q = "select * from students" ;
     
     connection.query(q,(error,data) =>{
         if(error){
            console.log("error");
            return res.status(500).send({error:"error in data fetching"});
         }
           return res.json(data);
     })
     
 })

 app.post("/students",(req,res)=>{
    const q = "insert into students (`name`,`gender`,`city`,`password`,`shift`) values (?,?,?,?,?) " ;

    const  values = [
        req.body.name,
        req.body.gender,
        req.body.city,
        req.body.password,
        req.body.shift,
    ]
    
    connection.query(q,values,(error,data) =>{
        if(error){
           console.log("error");
           return res.status(500).send({error:"error in data fetching"});
        }
          return res.json(data);
    })
    
})

app.get("/students/get/:id",(req,res)=>{
   const studentId = req.params.id;
    const q = "select * from students where id = ? " ;
    
    connection.query(q,[studentId],(error,data) =>{
        if(error){
           console.log("error");
           return res.status(500).send({error:"error in data fetching"});
        }
          return res.json(data);
    })
    
})

app.put("/students/update/:id",(req,res)=>{
    const studentId = req.params.id;
    const q = "update students set  `name`=? , `gender`=? , `city`=? , `password`=? , `shift`=? where id = ? " ;

    const  values = [
        req.body.name,
        req.body.gender,
        req.body.city,
        req.body.password,
        req.body.shift,
        studentId
    ]
    
    connection.query(q,values,(error,data) =>{
        if(error){
           console.log("error");
           return res.status(500).send({error:"error in data fetching"});
        }
          return res.json(data);
    })
    
})

app.delete("/students/delete/:id",(req,res)=>{
  const studentId = req.params.id;
   const q = "delete  from students where id = ? " ;
   
   connection.query(q,[studentId],(error,data) =>{
       if(error){
          console.log("error");
          return res.status(500).send({error:"error in data fetching"});
       }
         return res.json(data);
   })
   
})


app.listen(8000,()=>{
   console.log("run on 8000");
})


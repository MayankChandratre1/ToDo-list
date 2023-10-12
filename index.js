import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const tasks = [];
const workTasks = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    taskList : tasks,
  });
});

app.get("/work",(req,res)=>{
  res.render("work.ejs",{
    taskList:workTasks,
  })
})

app.post("/",(req,res)=>{
  
  tasks.push(req.body.taskfield);
  res.redirect("/")
})
app.post("/work",(req,res)=>{
  workTasks.push(req.body.taskfield);
  res.redirect("/work")
})

app.listen(port, (req, res) => {
  console.log("listening to 3000");
});

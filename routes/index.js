const router=require("express").Router();
const tasks = require("../models/tasks.js");
const Task=require("../models/tasks.js");
//routes
router.get("/", async (req,res)=>{
    const allTasks=await Task.find();
    res.render("index",{task:allTasks});
})

router.post("/",(req,res)=>
{
  const tasks=req.body.task;
  const newTask= new Task({task:tasks});

  newTask.save()
  .then(()=>{
    console.log("Task Added Successfully");
    res.redirect("/");
  })
  .catch((err)=>console.log(err));
})

router.get("/delete/task/:_id",(req,res)=>{
    const id=req.params._id;
    Task.deleteOne({_id:id})
    .then(()=>{
        console.log("Task Deleted Successfully");
        res.redirect("/");
    })
    .catch((err)=>{
        console.log(err);
    })
})
module.exports=router;
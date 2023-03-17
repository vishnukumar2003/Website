//library dec
const express=require('express');
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
//HTTP Request specs
app.get("/",(req,res)=>{
    res.render("dash_board");
})
//port specification
app.listen(3000,()=>{
    console.log("Server connected!");
})
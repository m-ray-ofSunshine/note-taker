const express = require("express");
const path = require("path");
const db = require("./db/db.json")
const uniqid = require('uniqid');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});
app.get("/api/notes", (req,res)=>{
    res.json(db)
    
});
app.delete("/api/notes/:id", (req,res)=>{
    console.log(req.params.id);
    db.forEach((item, idx)=> {
        if (item.id === req.params.id){
            db.splice(idx,1)
        }else{
            
        }
    })
    res.json(db)
    
});
app.post("/api/notes", (req,res)=>{
    let newItem = req.body;
    newItem.id = uniqid()
    db.push(newItem)
    res.redirect("/notes")
});
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
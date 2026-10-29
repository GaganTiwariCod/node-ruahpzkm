const express = require('express');
const NoteModel = require('./module/note.module.js');
const app = express();

app.post('/note',(req,res)=>{
    const data = req.body;
    NoteModel.create({
        title:data.title,
        description:data.description
    })
})



module.exports = app;

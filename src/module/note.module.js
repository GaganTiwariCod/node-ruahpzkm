const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: String,
    description: String 
});

// Use mongoose.model instead of mongoose.module
const NoteModel = mongoose.model('note', NoteSchema);

module.exports = NoteModel;
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true,
        maxLength: 255,
    },
    content : {
        type: String,
        required: true,
        maxLength: 2000,
    },
    autor : {
        type: String,
        required: true,
        maxLength: 255,
    },   
},{timestamps: true}); //add date format

//export modele
module.exports = mongoose.model('post', postSchema);
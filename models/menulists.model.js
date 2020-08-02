const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menulistsSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    itemname:{
        type:String,
        required: true,
        unique:true,
        minlength: 3
    },
    itemdesc:{
        type:String,
        required: true,
        minlength: 3
    },
    price:{
        type:String,
        required: true,
        minlength: 3
    }
},{
    timestamps: true
});

const Menulists = mongoose.model('Menulists',menulistsSchema);

module.exports=Menulists;
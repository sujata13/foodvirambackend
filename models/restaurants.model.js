const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    address:{
        type:String,
        required: true,
        minlength: 3
    },
    onroute:{
        type:String,
        required: true,
        minlength: 3
    },
    distance:{
        type:String,
        required: true,
        minlength: 3
    },
    description:{
        type:String,
        required: true,
        minlength: 3
    },
    washroomrat:{
        type:Number,
        required:true
    },
    restrat:{
        type:Number,
        required:true
    }
},{
    timestamps: true
});

const Restaurants = mongoose.model('Restaurants',restaurantsSchema);

module.exports=Restaurants;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});
const connection =mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

const restaurantRouter = require('./routes/restaurants');
const menulistsRouter = require('./routes/menulists');

app.use('/restaurants',restaurantRouter);
app.use('/menulists',menulistsRouter);

app.get('/',(req,res)=>{res.send('It is working')})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
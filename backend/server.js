const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// MiddleWare :
app.use(express.json());

// CORS :
app.use(cors());

// Cookie Parser :
app.use(cookieParser());

// Server Listening :
app.listen(PORT, ()=>{ 
    console.log('Server Running On PORT' , PORT);
})

// Router :
app.use('/user' , require('./Routes/userRouter'));
app.use('/api' , require('./Routes/categoryRouter'));
app.use('/api' , require('./Routes/productRouter'));

// Connection to MongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI).then(()=>{
    console.log('MongoDB Connected...');
}).catch(err => {
    console.log('error',err);
})
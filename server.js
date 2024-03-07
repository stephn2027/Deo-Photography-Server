const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const {json} =require('body-parser');
const axios = require("axios");


const app = express();

const allowedOrigins = ['https://deo-palculan-photography.vercel.app/'];

app.use(cors({
  origin: function(origin, callback) {
    // Check if the request origin is allowed
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(json());

const {parsed: config } = dotenv.config();

const BASE_URL_GROUP = `https://api.cloudinary.com/v1_1/dx0mu7i2f/resources/search?expression=folder:group&max_results=10&next_cursor`;
const BASE_URL_ETC = `https://api.cloudinary.com/v1_1/dx0mu7i2f/resources/search?expression=folder:etc&max_results=10&next_cursor`;

const BASE_URL_COUPLES = `https://api.cloudinary.com/v1_1/dx0mu7i2f/resources/search?expression=folder:couples&max_results=10&next_cursor`;

const BASE_URL_PORTRAITS = `https://api.cloudinary.com/v1_1/dx0mu7i2f/resources/search?expression=folder:portraits&max_results=10&next_cursor`;
const auth = {
    username:config.API_KEY,
    password:config.API_SECRET,
}

app.get('/group',async (req,res)=>{
    const response = await axios.get(BASE_URL_GROUP,{
        auth,
        params:{
            next_cursor: req.query.next_cursor
        },
    });
   return res.send(response.data);
});

app.get('/etc',async (req,res)=>{
    const response = await axios.get(BASE_URL_ETC,{
        auth,
        params:{
            next_cursor: req.query.next_cursor
        },
    });
   return res.send(response.data);
});

app.get('/couples',async (req,res)=>{
    const response = await axios.get(BASE_URL_COUPLES,{
        auth,
        params:{
            next_cursor: req.query.next_cursor
        },
    });
   return res.send(response.data);
});

app.get('/portraits',async (req,res)=>{
    const response = await axios.get(BASE_URL_PORTRAITS,{
        auth,
        params:{
            next_cursor: req.query.next_cursor
        },
    });
   return res.send(response.data);
});

const PORT = process.env.PORT;

app.listen(PORT,console.log(`Server running on ${PORT}`));
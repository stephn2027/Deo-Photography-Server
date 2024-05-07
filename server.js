const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const {json} =require('body-parser');
const axios = require("axios");
dotenv.config();

const app = express();

app.use(json());

app.use(cors({
    origin: 'https://deo-palculan-photography.vercel.app' 
  }));



const CLOUD_NAME = process.env.CLOUD_NAME; 

const BASE_URL_GROUP = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=folder:group&max_results=10&next_cursor`;
const BASE_URL_ETC = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=folder:etc&max_results=10&next_cursor`;

const BASE_URL_COUPLES = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=folder:couples&max_results=10&next_cursor`;

const BASE_URL_PORTRAITS = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=folder:portraits&max_results=10&next_cursor`;
const auth = {
    username:process.env.API_KEY,
    password:process.env.API_SECRET,
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
const hostname = "0.0.0.0";
const PORT = process.env.PORT || 7001;

app.listen(PORT,hostname,console.log(`Server running on ${PORT}`));
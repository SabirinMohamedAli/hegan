const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

//db connection

const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

dbConnection();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/product', require('./routes/productRoutes'))

app.get('/', (req, res)=>{
    res.send('Hello from Node Server');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
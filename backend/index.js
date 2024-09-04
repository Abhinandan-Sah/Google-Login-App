const express= require("express")
const app= express();
const cors = require("cors")
const authRouter= require("./routers/authRouter.js")
require("dotenv").config();
const PORT = process.env.PORT||8080;
require('./models/dbConnection.js')

app.use(cors());

app.use('/auth', authRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at Port ${PORT}`);
})
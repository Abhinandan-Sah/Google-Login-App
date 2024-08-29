const express= require("express")
const app= express();
const authRouter= require("./routers/authRouter.js")
require("dotenv").config();
const PORT = process.env.PORT||8080;

app.use('/auth', authRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at Port ${PORT}`);
})
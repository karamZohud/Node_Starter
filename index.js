import express from 'express';
import { initApp } from './src/module/app.router.js';
//import userRouter  from "./src/module/users/users.router.js";

const app=express();


initApp(app,express);
app.listen(3500,()=>{
    console.log("server is run ");
    
})



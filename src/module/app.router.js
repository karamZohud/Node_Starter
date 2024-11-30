import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.route.js';
import BlogRouter from "./blog/blog.router.js";
import UserRouter from "./users/users.router.js";

export const initApp=(app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('',(req,res)=>{
        res.json({message:"Home Page"});
    });
    app.use("/api/auth",authRouter);
    app.use("/api/blog",BlogRouter);
    app.use("/api/users",UserRouter);
    app.use("*",(req,res)=>{
        return res.json({message:"Page Not Found"});
    })
}


import express from "express";
import prisma from "./db/prisma.js"
import userRoutes from "./src/routes/user.js"
import postRoutes from './src/routes/post.js'
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500;
app.get('/',(_req,res)=>{
 return res.send(`<h1 style="text-align:center;color:blue; text-transform:capitalize; font-size:50px;">Blog post API IS LiVe</h1>`)
});
app.use('/',userRoutes);
app.use('/',postRoutes);
async function startServer() {
  // try {
    
  //   await prisma.$connect();
  //   console.log("Database connected successfully");
  // }
  // catch(e){
  //   console.log("Failed to connect to the database");
  //     console.log("Something went Wrong . Please try Again !")
  //      process.exit(1);

  // }


  
app.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`);
})}

startServer();
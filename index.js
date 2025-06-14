import express from "express";
import prisma from "./db/prisma.js"
import userRoutes from "./src/routes/user.js"
import postRoutes from './src/routes/post.js'
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use('/api',userRoutes);
app.use('/api',postRoutes);
async function startServer() {
  try {
    
    await prisma.$connect();
    console.log("Database connected successfully");
  }
  catch(e){
    console.log("Failed to connect to the database",e);

  }


  
app.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`);
})}

startServer();
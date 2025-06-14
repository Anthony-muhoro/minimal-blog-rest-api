import prisma from "../../db/prisma.js"

export const addUser = async (req, res) => {
  try {
    const { firstName, lastName, emailAdress, userName } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { emailAdress },
          { userName }
        ]
      }
    });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        emailAdress,
        userName
      }
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    console.error("Something went wrong", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Try again."
    });
  }
};

export const getUsers = async(req,res)=>{
    try {
        const users = await prisma.user.findMany();
    if(!users){
        res.status(404).json({
            success:true,
            message:"No users found"
        })
    }
    return res.status(200).json({
        success:true,
        data:users
    })
    } catch (error) {
        console.log("Something went wrong",error);
        res.status(500).json("Something went wronG try Again")
    }

}
export const getUser = async(req,res)=>{
    try {
        const {id}= req.params;
        
        const user = await prisma.user.findFirst({
            where:{id}
        })
        if(!user){
            res.status(404).json({
                message:"User Not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
         console.log("Something went wrong",error);
        res.status(500).json("Something went wronG try Again")
    }
    
}

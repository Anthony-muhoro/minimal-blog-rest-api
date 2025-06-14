import prisma from "../../db/prisma.js";

export const addPost = async (req, res) => {
  try {
    const { authorId, title, content } = req.body;

    if (!authorId) {
      return res.status(403).json({
        success: false,
        message: "User is required"
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: authorId }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Can't create post"
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId }
        }
      }
    });

    return res.status(201).json({
      success: true,
      message:"Post created Successfully",
      data: post
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};
export const userPosts = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const posts = await prisma.post.findMany({
      where: { authorId: id ,isDeleted:false},
      include: {
        author: true
      }
    });

    if (!posts || posts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts yet created"
      });
    }

    return res.status(200).json({
      success: true,
      posts
    });

  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};
export const userPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.findFirst({
      where: {
        id, isDeleted: false
      },
      include: {
        author: true,
      },
    });

    return res.status(200).json({
      success: true,
       data:post,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


export const usersPosts = async (_req,res) => {
    try {
        const posts = await prisma.post.findMany({
            where:{isDeleted:false},
            include:{
                author:true
            }
        })
        if (!posts || posts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No posts yet created"
      });
    }
        return res.status(200).json({
            success:true,
            data:posts
        })
    } catch (error) {
        
    }

    
}
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorId, title, content, } = req.body;

    if (!id || !authorId) {
      return res.status(400).json({
        success: false,
        message: "Post ID and author ID are required",
      });
    }

    const post = await prisma.post.findUnique({ where: { id } });

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.authorId !== authorId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this post because it's not yours.",
      });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title: title || post.title,
        content: content || post.content,
        
      },
    });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: postID } = req.params;
    // TODO: i'll update this part to be using A middleware when the instructor tackles them in large.
    const { authorId } = req.body; 

    if (!authorId) {
      return res.status(400).json({
        success: false,
        message: "Author ID is required"
      });
    }

    const post = await prisma.post.findUnique({
      where: { id: postID },
    });

    if (!post || post.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.authorId !== authorId) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to delete this post because this is not your post",
      });
    }

    await prisma.post.update({
      where: { id: postID },
      data: { isDeleted: true },
    });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


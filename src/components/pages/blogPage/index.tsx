import React, { useState } from "react";
import BlogForm from "../../organisms/blogForm/index";
import DeleteButton from "../../atoms/deleteButton/index";
import NewPostForm from "../../molecules/form/index";
import { Box } from "@mui/material";

interface IBlogItem {
    key: number;
    id: number;
    text: string;
    comments: string[];
  }

interface IBlogPage {
  posts: IBlogItem[];
  fieldValue: string;
  handleDeletePost: (key: number) => void;
  handleSetPost: (value: string) => void;
  setNewPost: (value: string) => void;
}

const BlogPage: React.FC<IBlogPage> = ({
  fieldValue,
  handleSetPost,
  handleDeletePost,
  setNewPost,
  posts
}) => {
  return (
    <Box className="Blog-Container">
        {posts.map((i) =>(<BlogForm handleDeletePost={handleDeletePost} text={i.text} id={i.id}/>))}
 
      <NewPostForm
        label="New Post"
        fieldValue={fieldValue}
        handleSetPost={handleSetPost}
        setNewPost={setNewPost}
      />
    </Box>
  );
};

export default BlogPage;

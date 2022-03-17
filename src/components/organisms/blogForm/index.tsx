import React from "react";
import { Box } from "@mui/material";
import TextField from "../../atoms/textField/index";
import AddButton from "../../atoms/addButton/index";
import BlogItem from "../../molecules/blogItem/index";

interface IBlogForm {
  handleDeletePost: (key: number) => void;
  id: number;
  text: string;
}

const BlogForm: React.FC<IBlogForm> = ({ text, id, handleDeletePost }) => {
    console.log(text);
    console.log(id)
  return (
    <Box>
      <BlogItem handleDeletePost={handleDeletePost} text={text} id={id} />
    </Box>
  );
};

export default BlogForm;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import DeleteButton from "../../atoms/deleteButton";
import { Box } from "@mui/system";

interface IBlogItem {
  id: number;
  text: string;
  handleDeletePost: (key: number) => void;
}

const BlogItem: React.FC<IBlogItem> = ({ text, handleDeletePost, id }) => {
  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        {text}
        <DeleteButton handler={handleDeletePost} id={id} />
      </Typography>
    </Box>
  );
};

export default BlogItem;

import React, { useState } from "react";
import { Box, List } from "@mui/material";
import AddButton from "../../atoms/addButton/index";
import BlogTextField from "../../atoms/textField/index";

interface INewPostForm {
  fieldValue: string;
  handleSetPost: (value: string) => void;
  setNewPost: (value: string) => void;
  label: string;
}

const NewPostForm: React.FC<INewPostForm> = ({
  label,
  fieldValue,
  handleSetPost,
  setNewPost,
}) => {
  return (
    <Box>
      <BlogTextField
        label={label}
        fieldValue={fieldValue}
        handler={setNewPost}
      />
      <AddButton handler={handleSetPost} value={fieldValue} />
    </Box>
  );
};

export default NewPostForm;

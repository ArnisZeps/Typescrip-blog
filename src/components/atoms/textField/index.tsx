import * as React from "react";
import TextField from "@mui/material/TextField";

interface IBlogTextField {
  label: string;
  fieldValue: string;
  handler: (value: string) => void
}

const BlogTextField: React.FC<IBlogTextField> = ({ label, fieldValue ,handler }) => {
  return (
    <TextField
      className="Blog-Form"
      id="standard-textarea"
      label={label}
      multiline
      variant="standard"
      value={fieldValue}
      onChange={(e) => handler(e.target.value)}
    />
  );
};

export default BlogTextField;

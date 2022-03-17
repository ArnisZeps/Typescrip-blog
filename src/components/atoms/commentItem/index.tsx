import React, { useState } from "react";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
interface CommentItemProps {
    text: string;
    handleSetReply: (newReply: string) => void;
    setReply: () => void;
}
 

const CommentItem : React.FC <CommentItemProps> = ({text, handleSetReply, setReply}) => {
    return (
        <ListItem
          secondaryAction={
            <IconButton
              id="check"
              edge="end"
              aria-label="add"
              onClick={(e) => handleSetReply(text)}
            >
              <AddIcon />
            </IconButton>
          }
        >
          <TextField
            className="Reply-Form"
            id="filled-multiline-flexible"
            label="Write your reply"
            multiline
            maxRows={4}
            value={text}
            onChange={setReply}
            variant="filled"
          />
        </ListItem>
 );
}
 
export default CommentItem ;
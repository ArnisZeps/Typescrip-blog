import React, { useState } from "react";
import { Box, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
interface ICommentItem {
    commentText: string;
}
 

const CommentItem : React.FC <ICommentItem> = ({commentText}) => {
    return (
        <Box>
            <div>{commentText}</div>
        </Box>
 );
}
 
export default CommentItem ;
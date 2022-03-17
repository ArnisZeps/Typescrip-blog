import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

interface IDeleteButton{
    handler: (id: number) => void
    id: number
}

const DeleteButton : React.FC <IDeleteButton> = ({handler, id}) => {
    return (
        <IconButton onClick={(e) => handler(id)}>
            <DeleteIcon />
        </IconButton>
 );
}
 
export default DeleteButton ;
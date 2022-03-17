import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

interface IAddButton{
    value: string;
    handler: (value: string) => void;
}

const AddButton : React.FC <IAddButton> = ({value, handler}) => {
    return (
        <IconButton onClick={(e) => handler(value)}>
            <AddIcon />
        </IconButton>
 );
}
 
export default AddButton ;
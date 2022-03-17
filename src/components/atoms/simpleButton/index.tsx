import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ISimpleButton{
    label: string;
}

const SimpleButton : React.FC <ISimpleButton> = (label) => {
    return (
        <Button variant="outlined">{label}</Button>
 );
}
 
export default SimpleButton ;
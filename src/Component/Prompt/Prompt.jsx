//import * as React from 'react';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import RoundedButton from '../RoundedButton/RoundedButton';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Prompt=({onAttachFileClick})=> {
  return (
  
      <Grid container spacing={2}>
        <Grid size={10}>
          <Item>size=8 
          <IconButton aria-label="attachment" onClick={onAttachFileClick}>
          <AttachFileIcon/>
            </IconButton>  
       </Item>
        </Grid>
        <RoundedButton/>
       
      </Grid>

  );
}
export default Prompt;

//import * as React from 'react';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import  { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Prompt=({onAttachFileClick})=> {
  const [msg,setMsg] = useState();

  const promptHandler=(e)=>{
      setMsg(e.target.value)
  }

  const submitMessage=()=>{
    console.log(msg);
    
  }
  
  
  return (
  
      <Grid container spacing={2}>
        <Grid size={10} color={'#fff'}>
         
        <TextField  fullWidth placeholder="type here"  onChange={(e)=>promptHandler(e)}/> 
     
        </Grid>
        <IconButton aria-label="attachment" onClick={onAttachFileClick}>
          <AttachFileIcon/>
         
            </IconButton> 
            <IconButton aria-label="send" onClick={submitMessage}>
          < SendIcon  color="success" fontSize="large"/>

            </IconButton> 
      </Grid>

  );
}
export default Prompt;

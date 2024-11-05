
//import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Prompt from '../Component/Prompt/Prompt';
import Attachment from '../Component/Attachment/Attachment';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height:'100%',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const MainLayout=()=> {

  const [visible,setVisible] = useState(false)

  const toggleAttachment = () => {
      if(visible)setVisible(false)
        else setVisible(true)
  }
  return (

    <Grid  backgroundColor={'#000'} container spacing={2}  columnSpacing={4} rowSpacing={4} >
        <Grid container size={10} direction={'column'}>
            <Grid  item>
            <Item>
             
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' , height: 450}}>
      This Box renders as an HTML section element.
    </Box>
          {visible?<Attachment/>:<></>}
            </Item>
     
        </Grid>
        <Grid size={12}>
         <Item><Prompt onAttachFileClick={toggleAttachment}/></Item>
        </Grid>
    </Grid>
      <Grid container size={2} spacing={2}>
        <Grid size={12}>
            <Item>side bar
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' , height:450 ,width:100}}>
      This Box renders as an HTML section element.
    </Box>

            </Item>
</Grid>

</Grid>
      </Grid>


  );
}
export default MainLayout;


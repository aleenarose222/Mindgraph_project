
//import React from 'react';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Prompt from '../Component/Prompt/Prompt';

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
  return (

    <Grid container spacing={2}  columnSpacing={4} rowSpacing={4} >
        <Grid container size={10} direction={'column'}>
            <Grid  item>
            <Item>graph view</Item>
        </Grid>
        <Grid item>
         <Item><Prompt/></Item>
        </Grid>
    </Grid>
      <Grid container size={2} spacing={2}>
        <Grid Item size={8}>
            <Item>side bar</Item>
</Grid>

</Grid>
      </Grid>


  );
}
export default MainLayout;


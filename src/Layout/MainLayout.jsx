
//import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

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
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}  >
        <Grid container size={10} direction={'column'}>
            <Grid  item>
            <Item>graph view</Item>
        </Grid>
        <Grid item>
            <Item>prompt</Item>
        </Grid>
    </Grid>
      <Grid container size={2} spacing={2}>
        <Grid Item>
            <Item>side bar</Item>
</Grid>

</Grid>
      </Grid>
      </Box>

  );
}
export default MainLayout;


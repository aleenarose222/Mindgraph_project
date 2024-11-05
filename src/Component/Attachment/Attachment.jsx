//import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Attachment=()=> {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="image">
        <InsertPhotoIcon  fontSize="small"/>
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
        </Fab>
        <Fab color="info" aria-label="edit">
        < UploadFileIcon/>
      </Fab>
      </Box>
  );
}
export default Attachment;

//import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';

const Attachment=()=> {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
    {(popupState) => (
      <div>
        <Button variant="contained" {...bindToggle(popupState)}>
          Toggle Popper
        </Button>
        <Popper {...bindPopper(popupState)} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    )}
  </PopupState>
  );
}
export default Attachment;

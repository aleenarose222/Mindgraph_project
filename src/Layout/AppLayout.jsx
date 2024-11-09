
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, CssBaseline, Typography, TextField, Button, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AppLayout = () => {
  const [openUpload, setOpenUpload] = useState(false);

  const handleUploadClick = () => {
    setOpenUpload(true);
  };

  const handleCloseUpload = () => {
    setOpenUpload(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#101010' }}>
      <CssBaseline />

{/* Sidebar */}
<Grid item sx={{
  width: 350,
  bgcolor: 'linear-gradient(135deg, #E91E63, #2196F3)',
  color: '#fff',
  p: 3,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateX(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  },
}}>
  <Typography variant="h5" sx={{
    fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: 1, color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }}>
  </Typography>
  <Box sx={{ mt: 'auto', textAlign: 'center' }}>  {/* Move items to the bottom */}
    <Box sx={{ mb: 2 }}>  {/* Add margin-bottom to space out from button */}
      <IconButton color="primary" onClick={handleUploadClick} sx={{
        transition: 'all 0.3s ease', ':hover': { bgcolor: '#E91E63', transform: 'scale(1.2)' },
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <AttachFileIcon sx={{ fontSize: '1.5rem', mr: 1 }} />
        <Box sx={{
          display: 'inline-block',
          bgcolor: '#fff',
          color: '#E91E63',
          padding: '4px 8px',
          borderRadius: 12,
          ml: 5,
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          ':hover': {
            borderRadius: 4, // Change to curved rectangle
            padding: '6px 12px',
          }
        }}>
          <Typography variant="body1" sx={{ fontSize: '0.875rem', fontWeight: 'bold', alignContent: 'center' }}>Upload Document</Typography>
        </Box>
      </IconButton>
    </Box>
    <Button variant="contained" sx={{
      bgcolor: '#fff', color: '#E91E63', fontWeight: 'bold', borderRadius: 50, padding: '12px 24px', transition: 'all 0.3s ease',
      '&:hover': { bgcolor: '#E91E63', color: '#fff', transform: 'scale(1.05)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }
    }}>
      Create Knowledge Graph
    </Button>
  </Box>
</Grid>



{/* Main container (main content + prompt) */}
<Grid container direction="column" sx={{
  flexGrow: 1, color: '#fff', overflow: 'hidden', p: 3, position: 'relative', zIndex: 1
}}>

  {/* Main Content Area */}
  <Grid item sx={{
    flexGrow: 1, bgcolor: '#222', p: 3, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', 
    transition: 'background 0.3s ease, transform 0.3s ease', ml: 4, mb: 14,  // Adjust margin-bottom
    ':hover': {
      bgcolor: '#333', transform: 'scale(1.02)'
    }
  }}>
    <Typography variant="h4" sx={{
      fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)'
    }}>
      
    </Typography>
  </Grid>

{/* Prompt Section */}
<Grid item sx={{
  position: 'fixed',  // Fix the position
  bottom: 0,  // Align to the bottom of the page
  left: 50,  // Align to the left edge with a margin
  right: 0,
  ml:43,  // Align to the right edge of the page
  bgcolor: '#121212', p: 3, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)', transition: 'all 0.3s ease', ':hover': {
    bgcolor: '#333', transform: 'scale(1.02)'
  }
}}>
  <TextField
    variant="outlined"
    placeholder="Type your message..."
    sx={{
      width: '90%',  // Set a specific width
      '& .MuiInputBase-root': {  // Apply to the root input base
        height: '50px',  // Match the height of the Send button
        bgcolor: '#333', color: '#fff', borderRadius: 20, padding: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease', fontSize: '1.2rem' 
      },
      '& fieldset': { border: 'none' },
      ':focus-within': { boxShadow: '0 0 10px #E91E63' }
    }}
  />
  <Button variant="contained" color="primary" sx={{
    height: '40px',  // Ensure Send button height is specified for reference
    bgcolor: '#1976d2', ':hover': { bgcolor: '#1565c0' }, ml: 2, padding: '8px 24px', borderRadius: 50, fontSize: '1rem',
    transition: 'all 0.3s ease', ':active': { transform: 'scale(0.98)', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)' }
  }}>
    Send
  </Button>
</Grid>


        {/* Upload Dialog */}
        <Dialog
          open={openUpload}
          onClose={handleCloseUpload}
          PaperProps={{
            sx: {
              backdropFilter: 'blur(12px)',
              bgcolor: '#333',
              color: '#fff',
              width: '460px',
              p: 3,
              borderRadius: 8,
              boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease'
            },
          }}
        >
          <DialogTitle sx={{
            textAlign: 'center', color: '#E91E63', fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            Upload File
          </DialogTitle>
          <DialogContent sx={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2, padding: '20px'
          }}>
            <Button
              variant="contained"
              component="label"
              sx={{
                bgcolor: '#E91E63',
                color: '#fff',
                '&:hover': { bgcolor: '#C2185B' },
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: '8px',
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                transition: 'all 0.3s ease'
              }}
            >
              <AttachFileIcon sx={{ fontSize: '1.25rem' }} />
              Choose File
              <input type="file" hidden />
            </Button>
            <Button
              variant="outlined"
              onClick={handleCloseUpload}
              sx={{
                color: '#fff',
                borderColor: '#E91E63',
                '&:hover': { borderColor: '#C2185B', backgroundColor: '#E91E63', color: '#fff' },
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                transition: 'all 0.3s ease'
              }}
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </Grid>
    </Box>
  );
};

export default AppLayout;

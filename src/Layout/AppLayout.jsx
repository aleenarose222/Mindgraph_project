
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
        width: 260,
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
          Sidebar
        </Typography>
        <Button variant="contained" sx={{
          bgcolor: '#fff', color: '#E91E63', fontWeight: 'bold', borderRadius: 50, padding: '12px 24px', transition: 'all 0.3s ease',
          '&:hover': { bgcolor: '#E91E63', color: '#fff', transform: 'scale(1.05)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }
        }}>
          Action
        </Button>
      </Grid>

      {/* Main container (main content + prompt) */}
      <Grid container direction="column" sx={{
        flexGrow: 1, color: '#fff', overflow: 'hidden', p: 3, position: 'relative', zIndex: 1
      }}>

        {/* Main Content Area */}
        <Grid item sx={{
          flexGrow: 1, bgcolor: '#222', p: 3, borderRadius: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', 
          transition: 'background 0.3s ease, transform 0.3s ease', ':hover': {
            bgcolor: '#333', transform: 'scale(1.02)'
          }
        }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)'
          }}>
            Main Window
          </Typography>
        </Grid>

        {/* Prompt Section */}
        <Grid item sx={{
          bgcolor: '#121212', p: 3, display: 'flex', alignItems: 'center', gap: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)', transition: 'all 0.3s ease', ':hover': {
            bgcolor: '#333', transform: 'scale(1.02)'
          }
        }}>
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            sx={{
              input: { bgcolor: '#333', color: '#fff', borderRadius: 3, border: 'none', padding: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease' },
              '& fieldset': { border: 'none' },
              ':focus-within': { boxShadow: '0 0 10px #E91E63' }
            }}
          />
          <IconButton color="primary" onClick={handleUploadClick} sx={{
            transition: 'all 0.3s ease', ':hover': { bgcolor: '#E91E63', transform: 'scale(1.2)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }
          }}>
            <AttachFileIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <Button variant="contained" color="primary" sx={{
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

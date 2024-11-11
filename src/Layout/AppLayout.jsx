
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, CssBaseline, Typography, TextField, Button, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from "three-spritetext";
import * as THREE from 'three';

const AppLayout = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(''); 
  const [prompt, setPrompt] = useState('');

  const handleUploadClick = () => {
    setOpenUpload(true);
  };

  const handleCloseUpload = () => {
    setOpenUpload(false);
  };
  const handlePromptChange = (event) => { 
    setPrompt(event.target.value);
  };
  const handleSendClick = () => { 
    const output = processPrompt(prompt);
     setSidebarContent(output);
 };
 const processPrompt = (prompt) => {
  return `Processed output for prompt: ${prompt}`; 
  };
  
  const graphData = {
    "nodes": [
      {
        "id": "c672d14a-e46a-4060-a051-cda693672ca1",
        "name": "hemaraj",
        "val": "Hemraj was the cook cum household help of Aarushi Talwar's family. He was considered to be a suspect and eventually found dead on an adjacent terrace with his door locked."
      },
      {
        "id": "bd60b2f7-959d-41d0-8e85-f6c0195df41d",
        "name": "aarushi",
        "val": "A 14-year-old girl who was a student and daughter of Dr. Rajesh Talwar, a physician. She had a bed room that was locked from outside by her father, but it could only be opened from inside by herself. Her room was cleaned recently, with the evidence of a thorough wash-up noted in the bed cover at the site of the pelvic region."
      },
      {
        "id": "cc926f08-83ba-423d-931b-8df7784f79f1",
        "name": "talwarsr\u00e2",
        "val": "Dr. Rajesh Talwar \n\n* A doctor\n* Father of Aarushi and Nupur\n* Husband of Nupur Talwar\n* Suspected to be involved in his daughter's murder due to allegations of honor-killing\n* Initially suspected the cook cum house help, Hemraj, as the murderer but later found dead\n* Involved in a decade-long trial related to Aarushi's murder\n* Convicted and sentenced to life imprisonment\n* Later acquitted on appeal"
      },
      {
        "id": "fd92adc7-823b-4b68-8ed9-aa756d60dfe0",
        "name": "arushi\u00e2",
        "val": "Female victim who was 14 years old at the time of her murder, discovered to have been murdered and raped by unknown assailants, with evidence of a sharp-cut injury on her throat and cleaning of her buttock area suggesting sexual activity recently, later found that she had a secret relationship which led to her death, her family members including her father Dr. Rajesh Talwar and mother Nupur Talwar were initially suspected and later convicted for her murder due to alleged honor killing."
      },
      {
        "id": "f0fbc609-9b6f-4c1e-9a68-580cf0b2e771",
        "name": "hemraj",
        "val": "Hemraj was the cook cum household help of Dr. Rajesh Talwar. He had a close relationship with Aarushi, the victim. On the night of the incidence, he went missing and his bed room showed evidence that he had escaped out. His body was later found on an adjacent terrace, dead."
      }
    ],
    "links": [
      {
        "source": "bd60b2f7-959d-41d0-8e85-f6c0195df41d",
        "target": "fd92adc7-823b-4b68-8ed9-aa756d60dfe0",
        "linkLabel": "Same Person"
      },
      {
        "source": "bd60b2f7-959d-41d0-8e85-f6c0195df41d",
        "target": "c672d14a-e46a-4060-a051-cda693672ca1",
        "linkLabel": "Victim and Killer"
      },
      {
        "source": "bd60b2f7-959d-41d0-8e85-f6c0195df41d",
        "target": "f0fbc609-9b6f-4c1e-9a68-580cf0b2e771",
        "linkLabel": " Housekeeper/Cook and Servant"
      },
      {
        "source": "bd60b2f7-959d-41d0-8e85-f6c0195df41d",
        "target": "cc926f08-83ba-423d-931b-8df7784f79f1",
        "linkLabel": "Father-Child"
      },
      {
        "source": "fd92adc7-823b-4b68-8ed9-aa756d60dfe0",
        "target": "c672d14a-e46a-4060-a051-cda693672ca1",
        "linkLabel": "Accomplices"
      },
      {
        "source": "fd92adc7-823b-4b68-8ed9-aa756d60dfe0",
        "target": "f0fbc609-9b6f-4c1e-9a68-580cf0b2e771",
        "linkLabel": "Victim and killer."
      },
      {
        "source": "fd92adc7-823b-4b68-8ed9-aa756d60dfe0",
        "target": "cc926f08-83ba-423d-931b-8df7784f79f1",
        "linkLabel": "Father-Daughter"
      },
      {
        "source": "c672d14a-e46a-4060-a051-cda693672ca1",
        "target": "f0fbc609-9b6f-4c1e-9a68-580cf0b2e771",
        "linkLabel": "Murderer and Victim"
      },
      {
        "source": "c672d14a-e46a-4060-a051-cda693672ca1",
        "target": "cc926f08-83ba-423d-931b-8df7784f79f1",
        "linkLabel": "Employed servant and Household help."
      },
      {
        "source": "f0fbc609-9b6f-4c1e-9a68-580cf0b2e771",
        "target": "cc926f08-83ba-423d-931b-8df7784f79f1",
        "linkLabel": "Employed"
      }
    ]
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#101010' }}>
      <CssBaseline />

{/* Sidebar */}
<Grid item sx={{
  width: 400,
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
    ml:3
  },
}}>
  <Typography variant="h5" sx={{
    fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: 1, color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }}>
  </Typography>
  <Box sx={{ mt: 'auto', textAlign: 'center' }}>  {/* Move items to the bottom */}
    <Box sx={{ mb: 2 }}>  {/* Add margin-bottom to space out from button */}
      <IconButton color="#00838F" onClick={handleUploadClick} sx={{
        transition: 'all 0.3s ease', ':hover': {  transform: 'scale(1)' },
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <AttachFileIcon sx={{ fontSize: '1.5rem', mr: 2 }} />
        <Box sx={{
          display: 'inline-block',
          bgcolor: '#fff',
          color: '#E91E63',
          padding: '4px 8px',
          borderRadius: 12,
          ml: 3,
          mr:2,
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          ':hover': {
            borderRadius: 4, // Change to curved rectangle
            padding: '6px 12px',
          }
        }}>
          <Typography variant="body1" sx={{ mr:2,ml:0,bgcolor: '#fff',color:"#00838F",borderRadius:50,fontSize: '0.875rem', fontWeight: 'bold', alignContent: 'center' }}>Upload Document</Typography>
        </Box>
      </IconButton>
    </Box>
    <Button variant="contained" sx={{
      bgcolor: '#fff', color: '#00838F', fontWeight: 'bold', borderRadius: 50, padding: '12px 24px', transition: 'all 0.3s ease',
      '&:hover': { bgcolor: '#263238', color: '#fff', transform: 'scale(1.05)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }
    }}>
      Create Knowledge Graph
    </Button>
  </Box>
</Grid>


 {/* Main container (main content + prompt) */}
<Grid container direction="column" sx={{
  flexGrow: 1, color: '#fff', overflow: 'hidden', p: 3, position: 'relative', zIndex: 1, pb: '150px',
}}>

  {/* Main Content Area */}
  <Grid item sx={{
    flexGrow: 1, bgcolor: '#222', p: 3, borderRadius: '30px 10px 30px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    transition: 'background 0.3s ease, transform 0.3s ease', ml: 2, mr: 10, height: 'calc(100vh - 250px)', overflow: 'hidden',
    ':hover': {
      bgcolor: '#333', transform: 'scale(1)'
    }
  }}>
    <Box sx={{ width: '100%', height: '100%' }}>
      <ForceGraph3D
        graphData={graphData}
        width={window.innerWidth-500} 
        height={window.innerHeight-100}
        nodeAutoColorBy="group"
        nodeLabel="val"
        linkThreeObjectExtend={true}
        nodeThreeObject={(node) => {
          const group = new THREE.Group();

          const sphereGeometry = new THREE.SphereGeometry(3); // Adjust node size as needed
          const sphereMaterial = new THREE.MeshBasicMaterial({ color: node.color || '#F1F8E9' });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

          const label = new SpriteText(node.name);
          label.color = '#A1887F';
          label.textHeight = 2; // Adjust text height for visibility
          label.position.set(0, 5, 0); // Position label slightly above the node

          group.add(sphere);
          group.add(label);

          return group;
        }}
        linkThreeObject={(link) => {
          const sprite = new SpriteText(link.linkLabel);
          sprite.color = 'lightgrey';
          sprite.textHeight = 1;
          return sprite;
        }}
        linkPositionUpdate={(sprite, { start, end }) => {
          const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
            [c]: start[c] + (end[c] - start[c]) / 2 // Calculate middle point
          })));

          // Position sprite
          Object.assign(sprite.position, middlePos);
        }}
      />
    </Box>
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
        bgcolor: '#333', color: '#fff', borderRadius: 25, padding: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease', fontSize: '1.2rem' 
      },
      '& fieldset': { border: 'none' },
      ':focus-within': { boxShadow: '0 0 10px #006064' }
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
              bgcolor: '#00838F',
              color: '#9E9E9E',
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
            textAlign: 'center', color: '#9E9E9E', fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
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

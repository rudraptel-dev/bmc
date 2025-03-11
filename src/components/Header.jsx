import React from 'react';
import {  
  Box,
  Typography, 
  Button,
   Grid,
  TextField,
} from '@mui/material';

export const Header = ({ designedFor, setDesignedFor, designedby, setDesignedBy, version, setVersion, date, setDate, handleDownloadImage, handleDownloadPDF }) => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: { xs: 2, sm: 2, md: 0 },
          justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
          alignItems: { xs: 'stretch', sm: 'stretch', md: 'center' },
          mb: 4 
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            mb: { xs: 2, sm: 2, md: 0 }
          }}
        >
          Business Model Canvas
        </Typography>
        
        <Grid 
          container 
          spacing={1} 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
            alignItems: 'center',
            width: { xs: '100%', sm: '100%', md: 'auto' },
            gap: { xs: 1, sm: 1, md: 0 }
          }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              id="Designed for:"
              label="Designed for:"
              variant="outlined"
              value={designedFor}
              onChange={(e) => setDesignedFor(e.target.value)}
              fullWidth
              sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField 
              fullWidth
              variant="outlined"
              id="Designed by::"
              label="Designed by:"
              value={designedby}
              onChange={(e) => setDesignedBy(e.target.value)}
              sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.2}>
          <TextField 
              fullWidth 
              variant="outlined" 
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              label="Date"
              sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField 
              fullWidth 
              variant="outlined" 
              label="Version" 
              id='Version'
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
            />
          </Grid>
        </Grid>
        
        <Button 
          id="download-image-button"
          variant="contained" 
          color="primary" 
          onClick={handleDownloadImage} 
          sx={{
            margin: { xs: '10px auto', sm: '10px auto', md: '2px' },
            width: { xs: '100%', sm: 'auto', md: 'auto' },
          }}
        >
          Download Image
        </Button>
        <Button 
          id="download-pdf-button"
          variant="contained" 
          color="primary" 
          onClick={handleDownloadPDF} 
          sx={{
            margin: { xs: '10px auto', sm: '10px auto', md: '2px' },
            width: { xs: '100%', sm: 'auto', md: 'auto' },
          }}
        >
          Download Pdf
        </Button>
      </Box>
    );
  };
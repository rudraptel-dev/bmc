import { 
    Box,
    Typography, 
    Grid as Grid2,
  } from '@mui/material';

export const CanvasSection = ({ title, icon: Icon, children }) => (
    <Box 
      sx={{ 
        height: '100%', 
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ mr: 1 }} />
        {title}
      </Typography>
      <Box>
        {children}
      </Box>
    </Box>
  );
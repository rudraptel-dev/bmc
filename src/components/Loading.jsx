import { Box, CircularProgress, Typography } from "@mui/material";

export const Loading = () => (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6">Loading Business Model Canvas...</Typography>
    </Box>
  );
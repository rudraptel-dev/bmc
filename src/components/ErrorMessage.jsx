import { Box, Button, Typography } from "@mui/material";

export const ErrorMessage = ({ error }) => (
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
      <Typography variant="h6" color="error">{error}</Typography>
      <Button
        variant="contained" 
        color="primary" 
        onClick={() => window.location.reload()}
      >
        Retry
      </Button>
    </Box>
  );
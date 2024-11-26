import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
interface LayoutProtectedProps {
  children: React.ReactNode;
}

export const FormWrapper = ({ children }: LayoutProtectedProps): JSX.Element => {
  return (
    <Container
      maxWidth='sm'
      sx={{ marginTop: 4, marginBottom: 5, display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

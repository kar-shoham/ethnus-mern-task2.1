import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box height={'100vh'} width={'100vw'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h3' fontWeight={600}>404 Not Found</Typography>
    </Box>
  )
}

export default NotFound
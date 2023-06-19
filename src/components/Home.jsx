import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}} width={'100vw'} paddingTop={15}>
    <Stack p={10} gap={2} fontSize={30}>
        <Link to={'/task-1'} replace >Task - 1</Link>
        <Link to={'/task-2'} >Task - 2</Link>
        <Link to={'/task-3'}>Task - 3</Link>
        <Link to={'/task-4'}>Task - 4</Link>
        <Link to={'/task-5'}>Task - 5</Link>
    </Stack>
    </Box>
  )
}

export default Home
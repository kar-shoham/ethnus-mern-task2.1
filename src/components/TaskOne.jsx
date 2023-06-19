import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TaskOne = () => {
  let [paragraph, updatePara] = useState('')
  let [numWords, updateNumWords] = useState(0)
  return (
    <Box height={'100vh'} width={'100vw'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Stack gap={2} p={5} sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '5px'}}>
            <Typography variant='h5'>Responsive Paragraph Word Counter</Typography>
            <TextField multiline rows={4} value={paragraph} onChange={(e) => {
                updatePara(e.target.value)
                let arr = paragraph.split(' ')
                updateNumWords(arr.length)
            }}/>
            <Typography variant='p'>Word Count: {numWords}</Typography>
        </Stack>
    </Box>
  )
}

export default TaskOne
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const TaskFive = () => {
  let [startDate, setStartDate] = useState(new Date());
  let [age, updateAge] = useState('')
  let findAgeHandler = () => {
    let nowDate = new Date(Date.now())
    let ageInMs = nowDate - startDate
    updateAge(Math.floor(ageInMs/(365*24*60*60*1000)))
  }
  return (
    <Box height={'100vh'} width={'100vw'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Stack gap={2} p={5} sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '5px', alignItems: 'center'}}>
            <Typography variant='h3'>Age Calculator</Typography>
            <Typography variant='p'>Enter your date of birth</Typography>
            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <Button size='medium' variant='contained' onClick={() => findAgeHandler()}>Calculate Age</Button>
            <Typography fontWeight={600} visibility={age === '' ? 'hidden': 'inherit'} variant='h5'>You are {age} years old</Typography>
        </Stack>
    </Box>
  )
}

export default TaskFive
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Avatar, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const TaskFour = () => {
    let url = 'https://dummyjson.com/users'
    let [users, updateUsers] = useState([])
    let getData = async() => {
        let {data} = await axios.get(url)
        updateUsers(data.users)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Box maxWidth={'100vw'} p={5} gap={3}>
            <Typography variant='h4' >Users Data</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Birth Date</TableCell>
                            <TableCell align="right">Blood Group</TableCell>
                            <TableCell align="right">Domain</TableCell>
                            <TableCell align="right">Avtar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.birthDate}</TableCell>
                                <TableCell align="right">{row.bloodGroup}</TableCell>
                                <TableCell align="right">{row.domain}</TableCell>
                                <TableCell align="right" sx={{display: 'flex'}}>
                                    <Box>
                                        <Avatar alt="!" src={row.image} sx={{ width: 60, height: 60 }}/>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TaskFour
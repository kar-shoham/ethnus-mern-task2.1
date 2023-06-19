import { Box, Typography, Stack, Button, styled } from '@mui/material'
import React, { useState } from 'react'

const ColorBox = styled(Box)({
    width: '50px',
    height: '50px',
    '&:hover': {
        cursor: 'pointer'
    }
})
const TaskThree = () => {
    let [show, toggleShow] = useState(false)
    let [color, changeColor] = useState('1975D1')
    let handler = (e) => {
        changeColor(e.target.id)
        toggleShow(false)
    }
    return (
        <Box width={'100vw'} sx={{ display: 'flex', justifyContent: 'center' }} paddingTop={20}>
            <Stack gap={3}>
                <Stack gap={3} sx={{alignItems: 'center'}}>
                    <Typography variant='h3' fontWeight={600}>Color Picker</Typography>
                    <Button variant='contained' sx={
                        { backgroundColor: `#${color}`, "&:hover": { backgroundColor: `#${color}` }, }}
                        onClick={() => toggleShow(!show)} size='large'>Pick a color</Button>
                </Stack>

                <Stack direction={'row'} visibility={show ? 'initial' : 'hidden'} gap={1}>
                    <ColorBox backgroundColor={'#800000'} id={'800000'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#FF0000'} id={'FF0000'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#0000FF'} id={'0000FF'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#008000'} id={'008000'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#7fff00'} id={'7fff00'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#00ffff'} id={'00ffff'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#006400'} id={'006400'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#ff8c00'} id={'ff8c00'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#7cfc00'} id={'7cfc00'} onClick={(e) => handler(e)}></ColorBox>
                    <ColorBox backgroundColor={'#b0c4de'} id={'b0c4de'} onClick={(e) => handler(e)}></ColorBox>

                </Stack>
            </Stack>
        </Box>
    )
}

export default TaskThree
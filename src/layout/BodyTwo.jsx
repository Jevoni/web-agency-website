import React from 'react'
import { Box, Typography } from '@mui/material'

import AboutMePic from '../media/AboutMe.JPG'

const BodyTwo = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '92vh'
        }}>
            <Typography variant='h1' sx={{ marginTop: '30px' }}>Who are we?</Typography>
            <Typography fontSize='25px'>ProtiveLLC is small team of 2 developers, who's main goal is to provide full-stack responsive websites to businesses</Typography>
            <Box sx={{ margin: '50px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box component='img' src={AboutMePic} sx={{
                        height: '260px',
                        width: '250px',
                        border: '2px solid black',
                        margin: { xs: '3px', md: '3px' },
                    }} />
                    <Typography>Jalen Johnson</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>Front-End Developer</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default BodyTwo
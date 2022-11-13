import React from 'react'
import { Box, Typography } from '@mui/material'

const Body = () => {
    return (
        <Box sx={{
            height: '92vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box height='60%' textAlign='center'>
                <Typography variant='h1'>Hello,</Typography>
                <Typography variant='h2'>Nice to meet you</Typography>
            </Box>
        </Box>
    )
}

export default Body
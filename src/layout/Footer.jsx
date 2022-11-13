import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '8vh',
            backgroundColor: 'lightgray',
            padding: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography sx={{ fontSize: '17px' }}>Copyright of ProtiveLLC</Typography>
        </Box>
    )
}

export default Footer
import React from 'react'
import { Box, Typography } from '@mui/material'

const Header = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '8vh',
            backgroundColor: 'lightgray',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Typography variant='h4'>Protive LLC</Typography>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none', margin: '0px', padding: '0px' }}>
                <li style={{ paddingRight: '10px' }}>Work</li>
                <li style={{ paddingRight: '10px' }}>Services</li>
                <li style={{ paddingRight: '10px' }}>About Us</li>
                <li style={{ paddingRight: '10px' }}>Contact</li>
            </ul>
        </Box>
    )
}

export default Header
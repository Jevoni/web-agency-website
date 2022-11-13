import React from 'react'
import { Box } from '@mui/material'

import Header from '../layout/Header'
import Body from '../layout/Body'
import BodyTwo from '../layout/BodyTwo'
import Footer from '../layout/Footer'

const HomePage = () => {
    return (
        <Box>
            <Header />
            <Body />
            <BodyTwo />
            <Footer />
        </Box>
    )
}

export default HomePage
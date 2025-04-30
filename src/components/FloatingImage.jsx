import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FloatingImage = ({
    children, left, right, top, bottom, zi = 1000, w, h,
    src
}) => {

    return (
        <Box component={src ? Image : 'div'}
            src={src}
            sx={{
                left,
                right,
                top,
                bottom,
                position: 'absolute',
                zIndex: zi,
                width: w,
                height: h
            }}>
            {children}
        </Box>
    )
}

export default FloatingImage
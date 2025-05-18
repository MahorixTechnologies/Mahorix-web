'use client'
import React from 'react'
import { Paper } from '@mui/material'

const MPaper = ({
    height,
    width,
    radius,
    elevation,
    square = false,
    padding,
    row = false,
    center,
    justifyContent = 'normal',
    alignItems = 'normal',
    gap = 'auto',
    bgcolor = 'white',
    children,
    shadow,
    sx
}) => {
    return (
        <Paper
            elevation={elevation}
            square={square}
            sx={{
                display: 'flex',
                flexDirection: row ? 'row' : 'column',
                justifyContent: center ? 'center' : justifyContent,
                alignItems: center ? 'center' : alignItems,
                height,
                width,
                borderRadius: radius,
                padding,
                gap,
                // backgroundColor: bgcolor,
                background:bgcolor,
                boxShadow:shadow,
                ...sx
            }}>
            {children}
        </Paper>
    )
}

export default MPaper
import { Typography } from '@mui/material'
import React from 'react'
import styles from './text.module.scss'
import styled from 'styled-components'
import Link from 'next/link'

export const Text = ({ children, type = 'body', block, align = 'left', isLink = false, href = '', color = 'black', w, size='auto',weight, lh }) => {
    // const style
    // const weights = {
    //     bolder:700,
    //     bold: 600,
    //     normal: 400,
    // }
    return (
        <Typography
            component={href ? Link : 'p'}
            href={href}
            sx={{
                display: block ? "block" : 'inline',
                textAlign: align,
                cursor: isLink ? 'pointer' : 'auto',
                color,
                width: w || 'auto',
                fontSize:`${size} !important`,
                fontWeight:`${weight} !important`,
                lineHeight:`${lh} !important`,
            }}
            className={styles.text + " " + styles?.[type]} >
            {
                children
            }
        </Typography >
    )
}


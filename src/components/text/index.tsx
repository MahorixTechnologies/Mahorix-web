import { SxProps, Typography, TypographyProps } from '@mui/material'
import React, { ReactNode } from 'react'
import styles from './text.module.scss'
import Link from 'next/link'
import { useDeviceSize } from '@/hooks'

type type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "subtitle2" | "body" | "body2";


interface TextProps extends TypographyProps {
    children?: ReactNode;
    type?: type;
    block?: string;
    // align?: string;
    isLink?: boolean;
    href?: string;
    color?: string;
    w?: string;
    size?: string | number;
    weight?: string | number;
    lh?: string;
    className?: string;
    sx?: SxProps;
}
export const Text = ({ children, type = 'body', block, align = 'left', isLink = false, href = '', color = 'black', w, size = 'auto', weight, lh, className, sx, ...props }: TextProps) => {

    const componentProp = href ? { href, component: href ? Link : 'p' } : {}
    const { isMobile } = useDeviceSize()
    return (
        <Typography
            {...componentProp}
            sx={{
                display: block ? "block" : 'inline',
                textAlign: align,
                cursor: isLink ? 'pointer' : 'auto',
                color,
                width: w || 'auto',
                fontSize: `${isMobile ? `${(parseInt(size as string) * .77)}px` : size} !important`,
                fontWeight: `${weight} !important`,
                lineHeight: `${lh} !important`,
                ...sx
            }}
            className={styles.text + " " + styles?.[type] + " " + className}
            {...props}
        >
            {
                children
            }
        </Typography >
    )
}


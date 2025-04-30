import React, { useEffect, useState } from 'react'
import styles from './button.module.scss'
import { colors } from '@/assets'

export const Button = ({
    r = '10px',
    contained = true,
    outlined = false,
    btnColor = colors.secondary1,
    width = 'fit-content',
    height = 'auto',
    children,
    iconLeft = <></>,
    iconRight = <></>,
    disabled = false
}) => {
    const [bgColor, setBgColor] = useState(btnColor)
    const [textColor, setTextColor] = useState(colors.white)
    useEffect(() => {
        setBgColor(btnColor)
        if (disabled) {
            setBgColor(colors.disabledLight)
            if (outlined) setBgColor(colors.white)
            setTextColor(colors.disabledDark)
        }
        if (contained) {
            setBgColor(btnColor)
            setTextColor(colors.white)
        }
        if (outlined) {
            setBgColor(colors.white)
            setTextColor(btnColor)
        }
    }, [btnColor, disabled, outlined, contained])
    return (
        <button
            disabled={disabled}
            style={{
                borderRadius: r,
                backgroundColor: bgColor,
                color: textColor,
                // border: `1px soild red !important`,
                borderWidth: outlined?'1px':0,
                borderColor: outlined ? btnColor : 'white',
                fontWeight: '500',
                fontSize: '14px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                alignItems:'center',
                padding: '10px',
                outline: 'none',
                cursor: 'pointer',
                width,height
            }}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    )
}

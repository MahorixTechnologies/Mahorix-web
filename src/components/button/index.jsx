'use client'
import { useEffect, useState } from 'react'
import { colors } from '@/assets'
import { useRouter } from 'next/navigation'

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
    disabled = false,
    onClick = () => null,
    className = '',
    to = ''
}) => {
    const router = useRouter()
    const [bgColor, setBgColor] = useState(btnColor)
    const [textColor, setTextColor] = useState(colors.white)
    useEffect(() => {
        setBgColor(btnColor)
        if (disabled) {
            setBgColor(colors.disabledDark)
            if (outlined) setBgColor(colors.white)
            setTextColor(colors.disabledDark)
        } else {
            if (contained) {
                setBgColor(btnColor)
                setTextColor(colors.white)
            }
            if (outlined) {
                setBgColor(colors.white)
                setTextColor(btnColor)
            }
        }
        console.log(disabled)
    }, [btnColor, disabled, outlined, contained])
    const click = () => {
        onClick()
        if (to) router.push(to)
    }


    return (
        <button
            disabled={disabled}
            onClick={click}
            className={className}
            style={{
                borderRadius: r,
                backgroundColor: bgColor,
                color: textColor,
                borderWidth: outlined ? '1px' : 0,
                borderColor: outlined ? btnColor : 'white',
                fontWeight: '500',
                fontSize: '14px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                outline: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                width, height,
                opacity: disabled ? .4 : 1
            }}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    )
}

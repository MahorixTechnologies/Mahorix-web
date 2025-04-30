import React from 'react'
import styles from './home.module.scss'
import { Button, Text } from '@/components'
import Image from 'next/image'
import { images } from '@/assets'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-5'>
                    <Text size='60px' weight={300}>MAHORIX</Text>
                    <Text type='h2'>
                        Innovate. Educate. Elevate.
                    </Text>
                </div>
                <Text type='h3'>
                    Innovating Tomorrow's Solutions, Today. <br />
                    MAHORIX – Your Trusted IT Partner
                </Text>
                <Button width='142px' height='52px'>
                    Get Started
                </Button>
            </div>
            <div>
                <Image src={images.header} width={'50%'} height={500} />
            </div>
        </div>
    )
}
export default Header
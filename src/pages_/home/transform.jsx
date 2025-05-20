import React from 'react'
import { Button, Text } from '@/components'
import styles from './home.module.scss'
import { colors } from '@/assets'

const Transform = () => {
    return (
        <div className={styles.transform}>
            <Text color={colors.secondary1} size={'60px'} weight={'300'} lh={'65px'} type='h5' block align='center' >
                Ready to Transform Your Ideas into <br /> Results? Let's Get Started!
            </Text>
            <Button >
                Schedule a Call
            </Button>
        </div>
    )
}

export default Transform
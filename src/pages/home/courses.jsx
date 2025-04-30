import React from 'react'
import styles from './home.module.scss'
import { MPaper, Text } from '@/components'
import { colors } from '@/assets'
import { Brush, DocumentCode, Mobile, Setting5 } from 'iconsax-react'
import Image from 'next/image'

const Train = require('@/assets/images/train.svg').default
const courses = [
    {
        name: 'Cybersecurity',
        logo: <DocumentCode color='#66B066' size={50} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
    {
        name: 'Cloud Computing',
        logo: <Setting5 color='#704AF2' size={50} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
    {
        name: 'Career Consultation',
        logo: <DocumentCode color='#66B066' size={50} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
    {
        name: 'Infrastructure',
        logo: <Brush color='#E27244' size={50} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
    {
        name: 'Mobile App Development',
        logo: <Mobile color='#5E5DEF' size={50} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
    {
        name: 'Training',
        logo: <Image src={Train} />,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et'
    },
   
]

const Courses = () => {

    return (
        <div className={styles.courses}>
            <Text type='h2' color={colors.secondary1} align='center' >
                Simplify Tech. Amplify Learning: <br />
                Your Partner in Innovation And Education
            </Text>
            <div className={styles.courseCardContainer}>
                
                {courses.map(course => (
                    <MPaper
                        elevation={3}
                        radius={'35.39px'}
                        height={321}
                        width={'30%'}
                        alignItems='flex-start'
                        justifyContent='center'
                        padding={'0 30px'}
                        gap={'20px'}
                    >
                        <Text > {course?.logo}</Text>
                        <Text color={colors.secondary1} type='h3'> {course?.name}</Text>
                        <Text color={colors.secondary1} type='body2'> {course.description}</Text>
                    </MPaper>
                ))}
            </div>

        </div>
    )
}



export default Courses
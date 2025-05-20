"use client"
import React from 'react'
import styles from './home.module.scss'
import { MPaper, Text } from '@/components'
import { colors } from '@/assets'
import { useDeviceSize } from '@/hooks'
import { Brush, DocumentCode, Mobile, Setting5 } from 'iconsax-react'
import Image from 'next/image'

const Train = require('@/assets/images/train.svg').default
const courses = [
    {
        name: 'Frontend Development',
        logo: <DocumentCode color='#66B066' size={50} />,
        description: 'Create interactive, engaging user-friendly websites and applications. Master HTML, CSS, and JavaScript to bring your designs to life.'
    },
    {
        name: 'Backend Development',
        logo: <DocumentCode color='#66B066' size={50} />,
        description: 'Build robust, scalable server-side solutions. Learn how to create APIs, manage databases, and build the foundation of modern web applications.'
    },
    {
        name: 'Business Analysis',
        logo: <Setting5 color='#704AF2' size={50} />,
        description: 'Bridge the gap between business and technology. Learn to analyze and improve processes, gather requirements, and drive strategic decisions.'
    },
    {
        name: 'Mobile Development',
        logo: <Mobile color='#5E5DEF' size={50} />,
        description: 'Create mobile applications that captivate users. Learn to design, develop, and deploy apps for iOS and Android platforms.'
    },
    {
        name: 'Quality Assurance',
        logo: <Brush color='#E27244' size={50} />,
        description: 'Ensure software quality at every stage. Learn testing methodologies, automation tools, and how to guarantee seamless user experiences.'
    },
    {
        name: 'Training',
        logo: <Image src={Train} />,
        description: 'Empower yourself with the skills they need to succeed. Learn through hands-on sessions, expert guidance, and tailored training programs.'
    },
]

const Courses = () => {
    const sizes = useDeviceSize()
    const isMobile = sizes.width < 768

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
                        width={isMobile ? '100%' : '30%'}
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
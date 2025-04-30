import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Text } from './text'
import { Button } from './button'
import { BsChevronRight } from 'react-icons/bs'

const CourseCard = () => {
    // const width: 360;
    // height: 413;
    // padding-top: 10px;
    // padding-right: 10px;
    // padding-bottom: 20px;
    // padding-left: 10px;
    // border-radius: 12px;
    // border-width: 1px;

    return (
        <Card sx={{ borderRadius: "12px", height: "430px", p: "10px", maxWidth: "360px", border: "1px solid #F1F1F1", backgroundColor: '#FAFAFA',  }}className='flex flex-col justify-evenly shadow' >
            <Image src={require('@/assets/images/cardimage.png')} className='rounded-[12px]' />
            <div className='my-3' >
                <Text type='h5'>Learn Figma - UI/UX Design Essential Training</Text>
            </div>
            <div className='flex my-4 justify-between'>
                <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/lesson.svg')} />
                    <Text type='h6'>Lesson : 6</Text>
                </div>
                <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/student.svg')} />
                    <Text type='h6'>Student : 198</Text>
                </div>
                <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/beginner.svg')} />
                    <Text type='h6'>Beginner : 6</Text>
                </div>
            </div>
            <Button btnColor='black' width='143px'>
                Start course <BsChevronRight fontWeight={600} />
            </Button>
        </Card>
    )
}

export default CourseCard
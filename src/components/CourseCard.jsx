import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Text } from './text'
import { Button } from './button'
import { BsChevronRight } from 'react-icons/bs'

const CourseCard = ({
    name,
    lessons,
    students,
    tools,
    image
}) => {
    return (
        <Card sx={{ borderRadius: "12px", height: "430px", p: "10px", width: "360px", border: "1px solid #F1F1F1", backgroundColor: '#FAFAFA', }} className='flex flex-col justify-evenly shadow' >
            <Image src={image} className='rounded-[12px] !h-[250px] w-[100%]' />
            <div className='my-3' >
                <Text type='h5'>{name}</Text>
            </div>
            <div className='mb-3' >
                <Text type='body2'>{tools}</Text>
            </div>
            <div className='flex my-4 gap-[20px]'>
                <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/lesson.svg')} />
                    <Text type='h6'>Lesson : {lessons}</Text>
                </div>
                <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/student.svg')} />
                    <Text type='h6'>Student : {students}</Text>
                </div>
                {/* <div className='flex gap-3'>
                    <Image src={require('@/assets/svgs/beginner.svg')} />
                    <Text type='h6'>Beginner : 6</Text>
                </div> */}
            </div>
            {/* <Button disabled btnColor='black' width='143px'>
                Start course <BsChevronRight fontWeight={600} />
            </Button> */}
        </Card>
    )
}

export default CourseCard
import { colors, images } from '@/assets'
import { Button, CourseCard, Text } from '@/components'
import { Layout } from '@/partials'
import { Box, Card, Container } from '@mui/material'
import { Flex } from 'antd'
import Image from 'next/image'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import styles from './edutech.module.scss'

const TestimonyCard = ({
  text, person, position
}) => {
  return (<Box sx={{ maxWidth: '30%' }}>
    <Box sx={{ bgcolor: '#F5F7FA', height: '280px' }} className='flex flex-col gap-[20px] justify-center p-[40px]'>
      <div className='flex '>
        <ImQuotesLeft color={colors.secondary1} size={40} />
      </div>
      <Text type='h4' weight={400} align='center'>
        {text}
      </Text>
      <div className='flex justify-end'>
        <ImQuotesRight color={colors.secondary1} size={"40px"} className='self-right block' />
      </div>
    </Box>
    <div className='flex flex-col w-100 gap-2 my-[30px]'>
      <Text align='center' type='h6'>{person}</Text>
      <Text align='center' type='body2'> {position}</Text>
    </div>
  </Box>
  )
}

const Edutech = () => {
  return (
    <Layout>
      <Container maxWidth='xl' justify='space-between' component={Flex} align='center' className='min-h-[300px]'>
        <div>
          <Text type='h1' lh='60px' className='max-w-[500px]'>
            Hello friends, <br />
            I am Faysal and we want to <br /> start a <span className='text-[#00AEEF]'>web design</span> course <br /> together. Do you like it too ?
          </Text>
          <Button >
            Start Course Now
          </Button>
        </div>
        <Image src={require('@/assets/images/eduheader.png')} />
      </Container>
      <Box className='flex justify-center text-center my-5 '>
        <Text type='h1' className='capitalize' align='center' lh='50px'>
          Search Among <span className='text-[#00AEEF]'>5000</span> courses and <br />find your favorite course
        </Text>
      </Box>

      <Container maxWidth='xl' className='flex flex-col'>
        <Flex justify='space-between' className='!my-[60px]'>
          <Text className='uppercase' type='h4'>New courses</Text>
        </Flex>
        <Flex component={Container} maxWidth='lg' gap={'30px'} className='mx-auto' wrap>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Flex>
      </Container>

      <Container maxWidth='xl' className='flex flex-col my-[100px]'>
        <Flex justify={'space-evenly'} className='mx-auto' wrap>
          <TestimonyCard person={'Faysal Bakre'} position={'Chief Chairman of Google'} text={'Mahorix fit us like a glove. Their team curates fresh, up-to-date Content from their marketplace and makes them available to customers.'} />
          <TestimonyCard person={'James Daniel'} position={'CEO of Microsoft'} text={'Mahorix responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.'} />
          <TestimonyCard person={'Steves Harvey'} position={'Chief Executive Officer of Netflix'} text={'In total, it was a big success, I would get emails about what a fantastic resource it was.'} />
        </Flex>
      </Container>
      <Container maxWidth='xl' className='my-[100px]'>
        <Flex gap={"40px"} align='center'>
          <div className='flex flex-col gap-[80px]  w-[30%]'>
            <div className='flex flex-col gap-[10px]'>
              <Text type='h1'>
                <span className='text-[#00AEEF]'>
                  Best</span> Instructors
              </Text>
              <Text>
                At the Academy, we strive to bring together the best <br /> professors for the best courses
              </Text>
            </div>
            <Button btnColor='black'>
              All Instructors <BsChevronRight />
            </Button>
          </div>
          <Flex className=' w-[70%]' wrap gap={'30px'}>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px] !w-[30%]'>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>

          </Flex>
        </Flex>
      </Container>
      <Box className={styles.findout}>
        <Text type='h1' lh='65px' className='capitalize'>
          Find out about the latest courses with the <br />
          <span className='text-[#5A69F2]'>
            Academy</span> newsletter
        </Text>
        <div className=' bg-white py-3 w-[430px] rounded-[20px] px-[20px] flex items-center'>
          <input placeholder='Email Address...' className='outline-none w-100' />
          <Button width='140px' btnColor='black'>
            SUBMIT
          </Button>
        </div>
      </Box>
    </Layout>
  )
}

export default Edutech
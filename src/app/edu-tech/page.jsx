"use client"
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
  return (<Box sx={{ width: { xs: '100%', lg: '30%' } }}>
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
    <div className='flex flex-col  gap-2 my-[30px]'>
      <Text align='center' type='h6'>{person}</Text>
      <Text align='center' type='body2'> {position}</Text>
    </div>
  </Box>
  )
}

const Edutech = () => {
  const scrollToRef = React.useRef(null)
  return (
    <Layout >
      <Container maxWidth='xl' justify='space-between' wrap component={Flex} align='center' sx={{ my: { xs: '100px', lg: 0 }, gap: { xs: "50px" } }} className='min-h-[300px]'>
        <div className='flex flex-col gap-[60px] mx-auto'>
          <Text type='h1' lh='60px' className='max-w-[600px]'>
            Welcome to Mahorix EduTech, <br />
            Your gateway to <span className='text-[#00AEEF]'>learning</span> and <br /> professional growth.
          </Text>
          <Button onClick={() => window.scrollTo({ top: scrollToRef.current?.offsetTop, behavior: 'smooth' })}>
            Start Learning Now
          </Button>
        </div>
        <Image src={require('@/assets/images/edutechheader.png')} />
      </Container>
      {/* <Box className='flex justify-center text-center my-5 '>
        <Text type='h1' className='capitalize' align='center' lh='50px'>
          Search Among <span className='text-[#00AEEF]'>6</span> courses and <br />find your favorite course
        </Text>
      </Box> */}

      <Container maxWidth='xl' className='flex flex-col' >
        <Flex justify='space-between' className='!my-[60px]'>
          <Text className='uppercase' type='h4'>Avaliable courses</Text>
        </Flex>
        <Flex ref={scrollToRef} gap={'30px'} className='mx-auto w-fit m justify-evenly  p-0'  wrap>
          <CourseCard
            image={require('@/assets/images/backendcourse.png')}
            name='Backend development'
            tools='Java/Springboot, Python/Django, Node/NestJs, C#/.Net.'
            lessons='6'
            students='20'
          />
          <CourseCard
            name='Frontend development'
            tools='React, Angular, Vue.js, Svelte'
            lessons='8'
            students='25'
            image={require('@/assets/images/frontendcourse.webp')}
          />
          <CourseCard
            name='Data Science'
            tools='Python, R, SQL, TensorFlow'
            lessons='10'
            students='30'
            image={require('@/assets/images/datascience.jpeg')}
          />
          <CourseCard
            name='Mobile Development'
            tools='Flutter, React Native '
            lessons='7'
            students='15'
            image={require('@/assets/images/mobiledevelopment.jpg')}
          />
          <CourseCard
            name='UI/UX Design'
            tools='Figma, Adobe XD, Sketch'
            lessons='5'
            students='18'
            image={require('@/assets/images/figma.png')}
          />
          <CourseCard
            name='Database Management'
            tools='MySQL, PostgreSQL, MongoDB, Oracle'
            lessons='9'
            students='22'
            image={require('@/assets/images/dbsm.webp')}
          />
        </Flex>
      </Container>

      <Container maxWidth='xl' className='flex flex-col my-[100px] '>
        <Flex justify={'space-evenly'} className='mx-auto' wrap>
          <TestimonyCard person={'Faysal Bakre'} position={'Chief Chairman of Google'} text={'Mahorix fit us like a glove. Their team curates fresh, up-to-date Content from their marketplace and makes them available to customers.'} />
          <TestimonyCard person={'James Daniel'} position={'CEO of Microsoft'} text={'Mahorix responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.'} />
          <TestimonyCard person={'Steves Harvey'} position={'Chief Executive Officer of Netflix'} text={'In total, it was a big success, I would get emails about what a fantastic resource it was.'} />
        </Flex>
      </Container>
      {/* <Container maxWidth='xl' className='my-[100px] '>
        <Flex gap={"40px"} align='center' wrap>
          <div className='flex flex-col gap-[80px]  flex-1'>
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
          <Flex component={Box} sx={{ width: { xs: '100%', lg: '70%' } }} wrap gap={'30px'}>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
            <Card className='border border-[#F1F1F1] bg-[#FAFAFA] !rounded-[12px] p-[10px] flex flex-col !h-[252px]' sx={{ width: { xs: '100%', lg: '30%' } }}>
              <Image src={require('@/assets/images/instructor.png')} className='!h-[161px] !w-[100%] rounded object-cover' />
              <div className='flex justify-between mt-5'>
                <Text type='h6'> Jon Kantner </Text>
                <Text color='#3E3232BF' type='body2'>Designer</Text>
              </div>
            </Card>
          </Flex>
        </Flex>
      </Container> */}
      <Box className={styles.findout}>
        <Text type='h1' lh='65px' className='capitalize'>
          Find out about the latest courses with the <br />
          <span className='text-[#5A69F2]'>
            Academy</span> newsletter
        </Text>
        <div className=' bg-white py-3 w-[min(430px,100%)] rounded-[20px] px-[20px] flex items-center'>
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
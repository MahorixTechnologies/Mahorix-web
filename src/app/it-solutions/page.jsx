'use client'

import { Box, Container } from '@mui/material'
import { Flex } from 'antd/lib'
import Image from 'next/image'
import { BsDashLg } from 'react-icons/bs'
import { colors, images } from '@/assets'
import { Button, FloatingImage, MPaper, Text } from '@/components'
import { Layout } from '@/partials'
import styles from './itsolutions.module.scss'
import ArrowRight from '@/assets/svgs/arrowright.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from 'react-icons/fa6'
import Transform from '../home/transform'
import { useDeviceSize } from '@/hooks'

// Import images at the top of the file:
import itHeaderImg from '@/assets/images/itheader.png'
import galleryImg from '@/assets/images/gallery.png'
import googleImg from '@/assets/images/google.png'
import amazonShoppingImg from '@/assets/images/amazon-shopping-app.png'
import nikonImg from '@/assets/images/nikon.png'
import fedexImg from '@/assets/images/fedex.png'

// const circleImages = [
//     { text: <>  Front-End <br />   Developer </>, img: require("../../assets/images/Organization.png") },
//     { text: <>   Back-End <br />Developer </>, img: require("../../assets/images/Organization (1).png") },
//     { text: <>  QA <br /> Engineers </>, img: require("../../assets/images/Organization (2).png") },
//     { text: <>  UX  <br /> Designers </>, img: require("../../assets/images/Organization (3).png") },
//     { text: <> Project <br /> Managers </>, img: require("../../assets/images/Organization (4).png") }
// ]
const ItSolutions = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
    };
    const { isMobile } = useDeviceSize()


    return (
        <Layout>
            <Container component={Box} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} margin={0} maxWidth="xl" className='min-h-[700px] py-[100px] items-center  flex flex-wrap' >
                <Box component={'div'} sx={{ flex: '55%' }} className='block'>
                    <Text type='h1' block textAlign={'justify'} className='text-justify !mt-[100px]'>
                        "We drive innovation with tailored tech solutions,
                        empowering businesses to navigate and thrive
                        in the evolving digital landscape."
                    </Text>
                </Box>

                <Image src={itHeaderImg} className='mx-auto !h-[640px]' style={{ flex: '36%', width: 'min(400px,100%)' }} />

            </Container>
            <Box component={Flex} wrap margin={0} sx={{ flexDirection: { xs: 'column', md: 'row' }, py: { xs: '100px', lg: '20px' }, gap: { xs: '150px', lg: 0 } }} className={styles.whatwedo} >
                <Image src={galleryImg} className=' !h-[640px]' style={{ flex: 1 }} />
                <div className=' flex flex-col gap-3 ' style={{ flex: 1 }}>
                    <Text type='h3' color={colors.secondary1} block textAlign={'justify'} className='text-justify !flex'>
                        <BsDashLg width={'50px'} />     What We Do<BsDashLg />
                    </Text>
                    <Text type='h2' block textAlign={'justify'} className='text-justify'>
                        Empowering Innovation, <br />
                        One Solution at a Time.
                    </Text>
                    <Text type='body' block textAlign={'justify'} w={{ xs: '100%', lg: '70%' }} className='text-justify'>
                        At Mahorix, we provide tailored IT solutions that help individuals, startups, and established businesses optimize operations, boost productivity, and stay secure in the ever-evolving digital world. From infrastructure setup to ongoing support, our services are designed to meet the dynamic needs of today’s technology-driven enterprises.
                    </Text>
                </div>
            </Box>
            <Container maxWidth="xl" component={Box} mt={'100px'} >
                <Flex justify='space-evenly' wrap gap={'100px'} align='center'>
                    <Text w='' size={'75px'}>
                        Services
                    </Text >
                    <Text w={{ xs: '100%', lg: '60%' }} sx={{ textAlign: { xs: 'justify', lg: 'right' } }} weight={500} type='body'>
                        At Mahorix, our services are crafted to empower your business and fuel success. We prioritize efficiency, innovation, and customer satisfaction in a comprehensive suite that spans crucial business functions, ensuring your journey towards success is seamless and effective
                    </Text>
                </Flex>
                <Box sx={{ p: "1.5px", my: '80px', borderRadius: "4px", width: '100%', backgroundColor: '#CAEDFC80' }} />
            </Container>
            <Container maxWidth="xl" justify='center' component={Flex} wrap gap={30} sx={{ pb: "60px" }}>
                <Flex className={styles.services} gap={"20px"} vertical>
                    <Text type='h2' color={colors.secondary1} block=''>
                        Cybersecurity
                    </Text>
                    <Text type='body'>
                        Security audits, firewall configuration, endpoint protection, and threat monitoring. Our cybersecurity services are designed to protect your business from evolving threats, ensuring data integrity and operational continuity.
                    </Text>
                    <Image src={ArrowRight} className='self-end mt-[80px]' />
                </Flex>
                <Flex className={styles.services} gap={"20px"} vertical>
                    <Text type='h2' color={colors.secondary1} block=''>
                        Cloud Services
                    </Text>
                    <Text type='body'>
                        Our cloud services include scalable storage solutions, virtual servers, and seamless migration support. We ensure your business leverages the full potential of cloud technology, enhancing flexibility, collaboration, and cost-efficiency.
                    </Text>
                    <Image src={ArrowRight} className='self-end mt-[80px]' />
                </Flex>
                <Flex className={styles.services} gap={"20px"} vertical>
                    <Text type='h2' color={colors.secondary1} block=''>
                        Custom IT Solutions
                    </Text>
                    <Text type='body'>
                        Remote and on-site technical support, system upgrades, and troubleshooting At Mahorix, we offer remote and on-site technical support, system upgrades, and troubleshooting services.
                    </Text>
                    <Image src={ArrowRight} className='self-end mt-[80px]' />
                </Flex>
            </Container>
            <Box className={styles.ourwork}>
                <Flex vertical gap={"30px"} style={{ flex: 1 }}>
                    <Text type='h1' color={colors.secondary1}>
                        Our Work
                    </Text>
                    <Text type='body'>
                        As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable services.
                    </Text>
                    <Button height='50px' >
                        View Projects</Button>
                </Flex>
                <Flex component={Box} style={{ backgroundColor: "white", flex: 1 }} className='shadow  max-w-[530px] rounded-[24px] !p-[50px] flex flex-col justify-center ' vertical gap={"30px"}>
                    <Text type='h2' color={colors.secondary1} block>
                        Technology
                    </Text>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                        <Text type='body'>
                            "We drive innovation with tailored solutions, empowering businesses to excel in the evolving tech landscape."
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <MPaper elevation={6} radius={"35px"} width={"90%"} center height={{ xs: 400, lg: 270 }} sx={{ m: '80px auto', position: 'relative', }} >
                <Box position={"absolute"} height={"100%"} width={"100%"} display={'flex'} justifyContent={'center'} alignItems={"center"}>
                    {!isMobile && <Text weight={600} color={colors.tetiary1} size={"150px"}> M I L E S T O N E S</Text>}
                </Box>
                <Flex component={Box} className="relative z-[100] w-full px-5" sx={{ gap: { xs: "50px" } }} wrap justify="space-evenly">
                    <Flex vertical gap={isMobile ? 20 : 40} align="center" >
                        <Text color={colors.secondary1} size={'64px'}>
                            +3
                        </Text>
                        <Text color={colors.secondary1} type="h2">
                            Years of experience
                        </Text>
                    </Flex>
                    <Flex vertical gap={isMobile ? 20 : 40} align="center">
                        <Text color={colors.secondary1} size={'64px'}>
                            +69
                        </Text>
                        <Text color={colors.secondary1} type="h2">
                            Projects Completed
                        </Text>
                    </Flex>
                    <Flex vertical gap={isMobile ? 20 : 40} align="center">
                        <Text color={colors.secondary1} size={'64px'}>
                            100%
                        </Text>
                        <Text color={colors.secondary1} type="h2">
                            Customer Satisfaction
                        </Text>
                    </Flex>
                </Flex>
            </MPaper>
            <Box className={styles.expertise}>
                <Box className='flex flex-wrap justify-between my-4 gap-4 ' component={'div'}>
                    <Text type='h1' color={colors.secondary1}>
                        Expertise
                    </Text>
                    <Text className='max-w-[499px]' align={isMobile ? 'justify' : 'right'} block>
                        Our clients range from medium-sized businesses to internationally
                        traded corporations, encompassing hospitals and care facilities
                    </Text>
                </Box>

                <div className="slider-container mx-auto !relative">
                    <FloatingImage src={images.hex1} right={"10%"} top={10} />
                    <FloatingImage src={images.hex1} left={"10%"} bottom={-10} />
                    <Slider {...settings}
                        slidesToShow={isMobile ? 1 : 6}
                        slidesToScroll={isMobile ? 1 : 3} >
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={googleImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={amazonShoppingImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={nikonImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={fedexImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={amazonShoppingImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={nikonImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={fedexImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={amazonShoppingImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={nikonImg} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={fedexImg} className='h-[150px] ' />
                        </div>
                    </Slider>
                </div>
            </Box>
            <Box className={styles.personalize}>
                <Text w={{ xs: '100%', lg: '50%' }} weight={400} type='h1' lh='50px' color={colors.white}>
                    Personalized learning with us. <br />
                    Dedicated to your goals and success.
                </Text>

                <div className={styles.circle}>
                    <FaArrowRightLong color={colors.white} size={30} />
                </div>
            </Box>
            <Transform />
        </Layout >
    )
}

export default ItSolutions
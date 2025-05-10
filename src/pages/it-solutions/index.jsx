import { Box, Container } from '@mui/material'
import { Flex } from 'antd'
import Image from 'next/image'
import React from 'react'
import { BsDashLg } from 'react-icons/bs'
import { colors, images } from '@/assets'
import { Button, FloatingImage, MPaper, Text } from '@/components'
import { Layout } from '@/partials'
import styles from './itsolutions.module.scss'
import ArrowRight from '@/assets/svgs/arrowright.svg'
// import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from 'react-icons/fa6'
import Transform from '../home/transform'
const circleImages = [
    { text: <>  Front-End <br />   Developer </>, img: require("../../assets/images/Organization.png") },
    { text: <>   Back-End <br />Developer </>, img: require("../../assets/images/Organization (1).png") },
    { text: <>  QA <br /> Engineers </>, img: require("../../assets/images/Organization (2).png") },
    { text: <>  UX  <br /> Designers </>, img: require("../../assets/images/Organization (3).png") },
    { text: <> Project <br /> Managers </>, img: require("../../assets/images/Organization (4).png") }
]
const ItSolutions = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <Layout>
            <Container component={Box} margin={0} maxWidth="xl" className='h-[700px] items-center !justify-evenly flex' >
                <div className='w-[60%] block '>
                    <Text type='h1' block textAlign={'justify'} className='text-justify'>
                        " At Mahorix, we provide tailored IT solutions that help individuals, startups, and established businesses optimize operations, boost productivity, and stay secure in the ever-evolving digital world. From infrastructure setup to ongoing support, our services are designed to meet the dynamic needs of today’s technology-driven enterprises."
                    </Text>
                </div>
                <Image src={require('@/assets/images/itheader.png')} className='w-[40%] !h-[640px]' />
            </Container>
            <Box component={Flex} margin={0} className={styles.whatwedo} >
                <Image src={require('@/assets/images/gallery.png')} className='w-[50%] !h-[640px]' />
                <div className='w-[45%] flex flex-col gap-3 '>
                    <Text type='h3' color={colors.secondary1} block textAlign={'justify'} className='text-justify !flex'>
                        <BsDashLg width={'50px'} />     What We Do<BsDashLg />
                    </Text>
                    <Text type='h2' block textAlign={'justify'} className='text-justify'>
                        Empowering Innovation, <br />
                        One Solution at a Time.
                    </Text>
                    <Text type='body' block textAlign={'justify'} w='70%' className='text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and
                        industry. Lorem Ipsum has been the industry's standard
                        text ever since the 1500s, when an unknown printer took
                        of type and scrambled it to make a type specimen book.


                    </Text>
                </div>
            </Box>
            <Container maxWidth="xl" component={Box} my={'50px'} >
                <Flex justify='space-evenly' align='center'>
                    <Text w='' size={'75px'}>
                        Services
                    </Text >
                    <Text w='60%' sx={{ textAlign: 'right' }} weight={500} type='body'>
                        At Mahorix, our services are crafted to empower your business and fuel success. We prioritize efficiency, innovation, and customer satisfaction in a comprehensive suite that spans crucial business functions, ensuring your journey towards success is seamless and effective
                    </Text>
                </Flex>
                <Box sx={{ p: "1.5px", my: '80px', borderRadius: "4px", width: '100%', backgroundColor: '#CAEDFC80' }} />
            </Container>
            <Container maxWidth="xl" justify='center' component={Flex} gap={30} sx={{ py: "100px" }}>
                <Flex className={styles.services} gap={"20px"} vertical>
                    <Text type='h2' color={colors.secondary1} block=''>
                        Cybersecurity
                    </Text>
                    <Text type='body'>
                        {/* Boost efficiency with our cutting-edge ERP solutions. Elevate decision-making and productivity with tailored insights, perfectly aligned with your industry and organizational needs. */}
                        Security audits, firewall configuration, endpoint protection, and threat monitoring. Our cybersecurity services are designed to protect your business from evolving threats, ensuring data integrity and operational continuity.
                    </Text>
                    <Image src={ArrowRight} className='self-end mt-[80px]' />
                </Flex>
                <Flex className={styles.services} gap={"20px"} vertical>
                    <Text type='h2' color={colors.secondary1} block=''>
                        Cloud Services
                    </Text>
                    <Text type='body'>
                        {/* Nurture connections with our CRM. Understand behavior, personalize interactions, and boost sales. Our tools empower exceptional customer experiences for business success */}
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
                         {/* Our team ensures your IT infrastructure remains robust, up-to-date, and seamlessly operational, minimizing downtime and maximizing efficiency. */}
                    </Text>
                    <Image src={ArrowRight} className='self-end mt-[80px]' />
                </Flex>
            </Container>
            <Box className={styles.ourwork}>
                <Flex vertical gap={"30px"} className='w-[50%]'>
                    <Text type='h1' color={colors.secondary1}>
                        Our Work
                    </Text>
                    <Text type='body'>
                        As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable services.
                    </Text>
                    <Button height='50px' >
                        View Projects</Button>
                </Flex>
                <Flex component={Box} style={{ backgroundColor: "white", }} className='shadow  max-w-[530px] rounded-[24px] !p-[50px] flex flex-col justify-center ' vertical gap={"30px"}>
                    <Text type='h2' color={colors.secondary1} block>
                        Technology
                    </Text>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                        <Text type='body'>
                            "We drive innovation with tailored solutions, empowering businesses to excel in the evolving tech landscape."
                        </Text> <Image src={ArrowRight} />
                    </Box>
                </Flex>
            </Box>
            <MPaper elevation={6} radius={"35px"} width={"90%"} center height={270} sx={{ m: '80px auto', position: 'relative' }} >
                <Box position={"absolute"} height={"100%"} width={"100%"} display={'flex'} justifyContent={'center'} alignItems={"center"}>
                    <Text weight={600} color={colors.tetiary1} size={"150px"}> M I L E S T O N E S</Text>
                </Box>
                <Flex className="relative z-[100] w-full px-5" justify="space-evenly">
                    <Flex vertical gap={40} align="center" >
                        <Text color={colors.secondary1} size={'64px'}>
                            +3
                        </Text>
                        <Text color={colors.secondary1} type="h2">
                            Years of experience
                        </Text>
                    </Flex>
                    <Flex vertical gap={40} align="center">
                        <Text color={colors.secondary1} size={'64px'}>
                            +69
                        </Text>
                        <Text color={colors.secondary1} type="h2">
                            Projects Completed
                        </Text>
                    </Flex>
                    <Flex vertical gap={40} align="center">
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
                <Box className='flex justify-between my-4' component={'div'}>
                    <Text type='h1' color={colors.secondary1}>
                        Expertise
                    </Text>
                    <Text className='max-w-[499px]' align='right' block>
                        Our clients range from medium-sized businesses to internationally
                        traded corporations, encompassing hospitals and care facilities
                    </Text>
                </Box>

                <div className="slider-container mx-auto !relative">
                    <FloatingImage src={images.hex1} right={"10%"} top={10} />
                    <FloatingImage src={images.hex1} left={"10%"} bottom={-10} />
                    <Slider {...settings} >
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/google.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/amazon-shopping-app.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/nikon.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/fedex.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/amazon-shopping-app.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/nikon.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/fedex.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/amazon-shopping-app.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/nikon.png")} className='h-[150px] ' />
                        </div>
                        <div className='h-[300px] !flex !items-center !justify-center'>
                            <Image src={require("@/assets/images/fedex.png")} className='h-[150px] ' />
                        </div>

                    </Slider>
                </div>
            </Box>

            <div style={{ height: '600px' }} className="justify-center !relative">

                <FloatingImage src={images.hex1} left={"23%"} top={"250px"} zi={-10} />
                <FloatingImage src={images.hex1} right={"20%"} top={"250px"} zi={-10} />
                {
                    circleImages.map((img, i) => {
                        return (
                            <div className="text-center" style={{
                                position: 'absolute', left: `${30 + (i * 11)}%`,
                                top: "50%", zIndex: 100,
                                transform: `translate(-${30 + (i * 11)}%, -50%)`
                            }}>
                                <Image
                                    src={img.img}
                                    style={{
                                        height: '209px',
                                        width: '209px',
                                    }} />
                                <Text>
                                    {img.text}
                                </Text>
                            </div>
                        )
                    })
                }
                <Text type="h1" color={colors.secondary1}
                    sx={{ transform: `translate(-50%, 0%)` }}
                    className=" translate-[-50%,-50%] !absolute !bottom-20 left-[50%]"
                >Meet the team</Text>
            </div>
            <Box className={styles.personalize}>
                <Text w='50%' weight={400} type='h1' lh='50px' color={colors.white}>
                    Personalized learning with us. <br />
                    Dedicated to your goals and success.
                </Text>

                <div className={styles.circle}>
                    {/* <Image src={ArrowRight} /> */}

                              <FaArrowRightLong color={colors.white} size={30} />
                </div>
            </Box>
            <Transform />
        </Layout >
    )
}

export default ItSolutions
import React from 'react'
import styles from './contactus.module.scss'
import { Card } from '@mui/material'
import { Button, Input, Text, TextArea } from '@/components'
import { LuPhoneCall } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'

import { Flex } from 'antd'
import { colors } from '@/assets'
import { Layout } from '@/partials';
// import TextArea from 'antd/es/input/TextArea'

const ContactUs = () => {
  return (
    <Layout className={'flex flex-col'} >
      <div className={styles.contactus}>
        <Text type='h1' color={colors.secondary1}>
          Contact Us
        </Text>
        <Text type='h2' color={colors.tetiary1}>
          Any question or remarks? Just write us a message!
        </Text>
      </div>
      <Card
        className={styles.card}
        elevation={3}>
        <div className={styles.left}  >
          <div className='flex flex-col gap-4'>
            <Text weight={600} type='h4' color='white'>
              CONTACT INFORMATION
            </Text>
            <Text type='subtitle'>
              Say something to start a live chat!
            </Text>
            <Text className={'!flex items-center '} weight={500} type='subtitle' color='white' >
              <LuPhoneCall fill='white' className=' mr-4' size={17} />  <span className='block'> 08144660073, 08085503290, <br />
                07051441713</span>
            </Text>
            <Text weight={500} type='subtitle' color='white'>
              <IoMail className='inline mr-4' size={17} /> mahorixtechnologies@gmail.com
            </Text>
            <Text weight={500} type='subtitle' color='white'>
              <FaMapMarkerAlt className='inline mr-4' size={17} /> 371 borno way, Alagomeji, Yaba, lagos
            </Text>

            <div className='flex gap-2'>
              <div className={styles.circle}><FaLinkedinIn color='white' /></div>
              <div className={styles.circle}><FaFacebookF color='white' /></div>
              <div className={styles.circle}><FaTwitter color='white' /></div>
            </div>
          </div>
        </div>
        <Flex vertical gap={'60px'} className={' ' + styles.right} >
          <Flex wrap gap={'40px'} className='w-full'>
            <Input rootClass={"w-[45%]"} label='First Name' />
            <Input rootClass={"w-[45%]"} label='Last Name' />
          </Flex>
          <Flex wrap gap={'40px'} className='w-full'>
            <Input rootClass={"w-[45%]"} label='Email' />
            <Input rootClass={"w-[45%]"} label='Phone Number' />
          </Flex>

          <TextArea rootClass={"w-[100%]"}
            label='Message'
            placeholder='Write a message... ' />


          <Flex justify='end'>
            <Button width='100px' height='50px'>
              Send
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Layout>
  )
}

export default ContactUs
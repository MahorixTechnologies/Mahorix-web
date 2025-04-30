// 'use client'
import React from 'react'
import styles from './navbar.module.scss'
import { Button, Text } from '@/components'
import { colors, images } from '@/assets'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import { Container } from '@mui/material'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { pathname } = useRouter()
  const routes = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'I.T Solutions', href: '/it-solutions' },
    { name: 'EduTech', href: '/edu-tech' },
    { name: 'Contact Us', href: '/contact-us' },
  ]
  return (
    <Container maxWidth="xl" className={styles.navbar}>
      <Image src={images.logo} alt="company-logo" width={140} />

      <div className={styles.nav}>
        {
          routes.map(route => {
            return <Text key={route.href} className={pathname===route.href?styles.selected:''} isLink type='h5' href={route.href}>
              {route.name}
            </Text>
          })
        }
      </div>
      <div className='!flex gap-3 items-center'>
        <div>
          EN <BsChevronDown className='inline' />
        </div>
        <Button outlined btnColor={colors.main1} width='162px' >
          Schedule a Call
        </Button>

      </div>
    </Container>
  )
}

export default Navbar
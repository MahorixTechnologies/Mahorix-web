// 'use client'
import React, { use, useEffect } from 'react'
import styles from './navbar.module.scss'
import { Button, Text } from '@/components'
import { colors, images } from '@/assets'
import Image from 'next/image'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useDeviceSize } from '@/hooks'
import { Sidebar } from './sidebar'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { pathname } = useRouter()
  const size = useDeviceSize()

  const routes = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'I.T Solutions', href: '/it-solutions' },
    { name: 'EduTech', href: '/edu-tech' },
    { name: 'Contact Us', href: '/contact-us' },
  ]
  const [showSidebar, setShowSidebar] = React.useState(false)
  const hideSidebar = () => { setShowSidebar(false) }
  useEffect(() => {
    if (size.width > 900) hideSidebar()
    window.addEventListener('scroll', hideSidebar)
    return () => { window.removeEventListener('scroll', hideSidebar) }
  }
    , [size.width])
  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <Box className={styles.navbar}>
      <Image src={images.logo} alt="company-logo"  />
      {size.width < 1000 &&<div className={styles.hamburger} onClick={handleSidebar}>
        <MenuIcon />
      </div>}
      {size.width > 1000 ?
        <>
          <div className={styles.nav}>
            {
              routes.map(route => {
                return <Text key={route.href} className={pathname === route.href ? styles.selected : ''} isLink type='h5' href={route.href}>
                  {route.name}
                </Text>
              })
            }
          </div>
          <div className={styles.btns + ' !flex gap-3 items-center'}>
            {/* <div>
          EN <BsChevronDown className='inline' />
        </div> */}
            <Button outlined btnColor={colors.main1} width='162px' to='/contact-us'  >
              Schedule a Call
            </Button>


          </div>
        </> :
        (showSidebar && <Sidebar />)
      }
    </Box>
  )
}

export default Navbar
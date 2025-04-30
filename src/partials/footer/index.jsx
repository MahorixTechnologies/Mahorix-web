import React from 'react';
import styles from "./footer.module.scss";
import { Container, Divider } from '@mui/material';
import Image from 'next/image';
import { colors, images } from '@/assets';
import { Button, Text } from '@/components';
import { ArrowForward } from '@mui/icons-material';

import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return <Container maxWidth='xl' component={'footer'} className={styles.footer}>
        <div className={styles.footerTop}>
            <div className={styles.logoAndcontact}>
                <Image src={images.logo} alt='mahorix-logo' />

                <Text>
                    mahorixtechnologies@gmail.com
                </Text>
                <Text>
                    08144660073, 08085503290, <br />
                    07051441713
                </Text>
                <Text>
                    371 borno way, <br /> Alagomeji, Yaba, lagos.
                </Text>


            </div>
            <div className={styles.company}>
                <Text type='h5' color={colors.secondary1}>
                    Company
                </Text>
                <Text isLink color={colors.main2}>
                    About us
                </Text>
                <Text isLink color={colors.main2}>
                    Edu Tech
                </Text>
                <Text isLink color={colors.main2}>
                    Conact us
                </Text>


            </div>
            <div className={styles.information}>
                <Text type='h5' color={colors.secondary1}>
                    Information
                </Text>
                <Text isLink color={colors.main2}>
                    FAQ
                </Text>
                <Text isLink color={colors.main2}>
                    Support
                </Text>


            </div>
            <div className={styles.subscribe}>
                <div className='w-[80%] flex flex-col gap-3 h-[85%] items-start justify-center'>
                    <Text color={colors.secondary1} type='h5'>
                        Subscribe
                    </Text>
                    <div className={styles.subscribeEmail}>
                        <input type='email' placeholder='Email address' />
                        <Button r='30px' btnColor={colors.secondary1}>
                            <ArrowForward />
                        </Button>
                    </div>
                    <Text type='body2' color={colors.grey} >
                        Hello, we are MAHORIX Technologies. Our <br />
                        goal is to translate the positive effects <br />
                        from revolutionizing how companies engage with their clients & their team.
                    </Text>
                </div>
            </div>
        </div>
        <Divider   />
        <div className={styles.footerBottom}>
            <div className={styles.copyright}>
                <Text type='body2' color={colors.grey}>
                    Copyright 2025. MAHORIX TECHNOLOGIES. All Rights Reserved.
                </Text>
            </div>
            <div className={styles.termsPrivacyCookie}>
                <Text isLink color={colors.secondary1}>
                    Terms
                </Text>
                <Text isLink color={colors.secondary1}>
                    Privacy
                </Text>
                <Text isLink color={colors.secondary1}>
                    Cookies
                </Text>
            </div>
            <div className={styles.socials}>
                <div className={styles.circle}><FaLinkedinIn /></div>
                <div className={styles.circle}><FaFacebookF /></div>
                <div className={styles.circle}><FaTwitter /></div>
            </div>
        </div>
    </Container>

}

export default Footer
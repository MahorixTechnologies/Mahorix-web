"use client";
import React from "react";
import styles from "./footer.module.scss";
import { Box, Container, Divider } from "@mui/material";
import Image from "next/image";
import { colors, images } from "@/assets";
import { Button, Text } from "@/components";
import { ArrowForward } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();
  return (
    <Container maxWidth='xl' component={"footer"} className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoAndcontact}>
          <Image src={images.logo} width={200} alt='mahorix-logo' />

          <Text><a href="mailto:mahorixtechnologies@gmail.com"></a></Text>
          <Text>
            <a href="tel:+2348144660073">+2348144660073</a>, <a href="tel:+2348085503290">+2348085503290</a>, <br />
            <a href="tel:+2347051441713"> +2347051441713</a>
          </Text>
          <Text>
            371 borno way, <br /> Alagomeji, Yaba, lagos.
          </Text>
        </div>
        <div className=' flex items-start gap-[50px] mt-6 '>
          <div className={styles.company}>
            <Text type='h5' color={colors.secondary1}>
              Company
            </Text>
            <Text
              isLink
              color={colors.main2}
              onClick={() => router.push("/about-us")}
            >
              About us
            </Text>
            <Text
              isLink
              color={colors.main2}
              onClick={() => router.push("/edu-tech")}
            >
              Edu Tech
            </Text>
            <Text
              isLink
              color={colors.main2}
              onClick={() => router.push("/it-solutions")}
            >
              IT Solutions
            </Text>
            <Text
              isLink
              color={colors.main2}
              onClick={() => router.push("/contact-us")}
            >
              Contact us
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
        </div>
        <div className={styles.subscribe}>
          <div className='w-[80%] flex flex-col gap-[40px] h-[85%] items-start justify-center'>
            <Text color={colors.secondary1} type='h5'>
              Why Mahorix?
            </Text>
            {/* <div className={styles.subscribeEmail}>
              <input type='email' placeholder='Email address' />
              <Button r='30px' btnColor={colors.secondary1}>
                <ArrowForward />
              </Button>
            </div> */}
            <Text type='body2' color={colors.grey}>
              Hello, we are MAHORIX Technologies. Our <br />
              goal is to translate the positive effects <br />
              from revolutionizing how companies engage with their clients &
              their team.
            </Text>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <Text type='body2' color={colors.grey} className='text-center'>
            <span >©</span> 2025. MAHORIX TECHNOLOGIES. <br /> All Rights Reserved.
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
          <Box component={'a'} href="https://www.linkedin.com/company/mahorix-technologies" className={styles.circle}>
            <FaLinkedinIn  />
          </Box>
          <Box component={'a'} href="https://www.linkedin.com/company/mahorix-technologies" className={styles.circle}>
            <FaFacebookF />
          </Box>
          <Box component={'a'} href="https://x.com/mahorix_tech" className={styles.circle}>
            <FaXTwitter />
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

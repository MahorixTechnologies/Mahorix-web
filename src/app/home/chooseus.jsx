"use client";
import React from "react";
import styles from "./home.module.scss";
import {Button, MPaper, Text} from "@/components";
import {colors} from "@/assets";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {useDeviceSize} from "@/hooks";

const Chooseus = () => {
  const {isMobile, isTablet} = useDeviceSize();
  //    const isMobile = sizes.width < 768
  return (
    <div className={styles.chooseus}>
      <Text block type='h2' color={colors.secondary1} align='center'>
        Choose Us: Your Path to Innovation and Success
      </Text>
      <div className='flex justify-center flex-wrap gap-5 xl:px-[50px] sm:px-0'>
        <MPaper
          width={isMobile ? "100%" : isTablet ? "80%" : "45%"}
          justifyContent='center'
          gap='20px'
          padding={"10px 20px"}
          radius={"35px"}
          height={isMobile || isTablet ? 300 : 229}
        >
          <Text type='h3' color='#3D3D3D'>
            Collaborative Approach, <br /> Transparent Communication:
          </Text>
          <Text type='body' color='#525252'>
            We work side-by-side with our clients, building trust through open
            communication and shared vision every step of the way.
          </Text>
        </MPaper>
        <MPaper
          width={isMobile ? "100%" : isTablet ? "80%" : "45%"}
          bgcolor='linear-gradient(232.88deg, #0072BC 28.46%, #8ED8F8 162.02%)'
          justifyContent='center'
          gap='20px'
          padding={"0 20px"}
          radius={"35px"}
          height={isMobile || isTablet ? 300 : 229}
        >
          <Text color='#FFFFFF' type='h3'>
            Proven Track Record of <br /> Success:
          </Text>
          <Text color='#FFFFFF' type='body'>
            Our portfolio is a testament to our ability to deliver impactful
            results.
          </Text>
        </MPaper>
        <MPaper
          width={isMobile ? "100%" : isTablet ? "80%" : "45%"}
          justifyContent='center'
          bgcolor='#E1F4FD'
          gap='20px'
          padding={"0 20px"}
          radius={"35px"}
          height={isMobile || isTablet ? 300 : 229}
        >
          <Text type='h3'>
            Expertise Across the Tech <br /> Spectrum
          </Text>
          <Text type='body'>
            {/* Our team consists of seasoned developers, designers, and experts who excel in various areas of technology. */}
            From development to design, our diverse team brings deep expertise
            across the tech landscape to bring your ideas to life.
          </Text>
        </MPaper>
      </div>
      {/* <div className='mx-auto w-fit my-5 flex gap-3'>
        <Button>
          <BsChevronLeft />
        </Button>
        <Button>
          <BsChevronRight />
        </Button>
      </div> */}
    </div>
  );
};

export default Chooseus;

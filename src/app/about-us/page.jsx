"use client";
import { Layout } from "@/partials";
import styles from "./aboutus.module.scss";
import { Flex } from "antd";
import Image from "next/image";
import { colors, images } from "@/assets";
import { FloatingImage, MPaper, Text } from "@/components";
import { BsDashLg } from "react-icons/bs";
import { Box } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDeviceSize } from "@/hooks";

const circleImages = [
  {
    text: (
      <>
        {" "}
        Front-End <br /> Developer{" "}
      </>
    ),
    img: require("../../assets/images/Organization.png"),
  },
  {
    text: (
      <>
        {" "}
        Back-End <br />
        Developer{" "}
      </>
    ),
    img: require("../../assets/images/Organization (1).png"),
  },
  {
    text: (
      <>
        {" "}
        QA <br /> Engineers{" "}
      </>
    ),
    img: require("../../assets/images/Organization (2).png"),
  },
  {
    text: (
      <>
        {" "}
        UX <br /> Designers{" "}
      </>
    ),
    img: require("../../assets/images/Organization (3).png"),
  },
  {
    text: (
      <>
        {" "}
        Project <br /> Managers{" "}
      </>
    ),
    img: require("../../assets/images/Organization (4).png"),
  },
];

const AboutCard = ({
  src = "",
  title,
  subtext,
  width = 600,
  height = 400,
  padding = "30px",
}) => {
  const { isMobile } = useDeviceSize();
  return (
    <MPaper
      elevation={6}
      // minHeight={height}
      width={width}
      radius={"25px"}
      padding={padding}
      sx={{
        minHeight: height
      }}
    >
      <Flex
        vertical
        className='h-full'
        gap={30}
        align='center'
        justify='center'
      >
        <Image height={100} width={100} src={src} />
        <Text type='h2'>{title}</Text>
        <Text className='!text-center max-w-[400px]' type='subtitle2'>
          {subtext}
        </Text>
      </Flex>
    </MPaper>
  );
};

function AboutUs() {
  const { isMobile } = useDeviceSize();

  return (
    <Layout className={styles.aboutus}>
      <Flex wrap className={styles.header} gap={80} align='center'>
        <div className='relative'>
          <Image src={images.aboutusheader} />
          <FloatingImage
            bottom={-100}
            right={isMobile ? 0 : -300}
            hiddenOnMobile
          >
            <div className={styles.message}>
              <Text className='!text-justify' color='#00000080'>
                We want to build a world where great ideas, products, and
                companies come to fruition quickly whilst achieving the required
                impact. Our work is to facilitate the process.
              </Text>
              <Text type='h6'>Kehinde Salaudeen</Text>
              <Text type='h6'>Mahorix</Text>
            </div>
          </FloatingImage>
        </div>

        <div className={styles.whoarewe}>
          <Text className='flex' type='h1' color={colors.secondary1}>
            <BsDashLg className='inline' /> WHO ARE WE{" "}
            <BsDashLg className='inline' />
          </Text>
          <Text color='#22282D' type='h3'>
            Unleashing Potential Through IT and Education
          </Text>
          <Text
            type='body'
            className='max-w-[400px] !text-justify'
            style={{ zIndex: -1 }}
          >
            We are educators and tech innovators empowering individuals and
            businesses with digital skills and solutions. From learning to
            deployment, we help you thrive, compete, and lead in Africa’s
            growing digital economy.
          </Text>
        </div>
      </Flex>

      <Flex
        align='center'
        wrap
        justify='center'
        gap={50}
        component={Box}
        sx={{ py: { xs: "100px", lg: "10px" }, px: "10px" }}
        style={{ minHeight: "500px", paddingTop: "100px" }}
      >
        <AboutCard
          src={images.vision}
          title={"Vision Statement"}
          subtext={"To be a leading brand in providing learning solutions."}
        />
        <AboutCard
          src={images.missionstatement}
          title={"Mission Statement"}
          subtext={
            "To provide learning solutions, Deploying professional expertise and innovations."
          }
        />
      </Flex>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        my={"40px"}
        py={"50px"}
        position={"relative"}
      >
        <FloatingImage src={images.hex1} left={"5%"} top={"-50px"} />
        <Text color={colors.secondary1} className='!text-center' type='h1'>
          Our Core Values
        </Text>
        <Flex
          wrap
          align='center'
          justify='center'
          gap={50}
          style={{
            minHeight: "500px",
            width: "100%",
            margin: "auto",
            marginTop: "40px",
            padding: "1em",
          }}
        >
          <AboutCard
            src={images.vision}
            title={"Excellence"}
            width={"min(100%,600px)"}
            subtext={
              "Deliver Exceptional Solutions: Craft innovative, effective and efficient ICT solutions. \n Continuous Improvement: Stay up-to-date with industry trends and best practices. \n	Striving for the highest quality and standards in everything."
            }
          />
          <AboutCard
            src={images.missionstatement}
            title={"INNOVATION"}
            width={"min(100%,600px)"}
            subtext={
              "Tech for All: Democratize access to technology and its benefits. \n Creative Problem-Solving: Encourage innovative thinking and solutions. \n Stay Curious: Foster a culture of experimentation and exploration. \n Encouraging creativity, new ideas, and continuous improvement."
            }
          />
          <AboutCard
            src={images.vision}
            title={"Empowerment"}
            width={"min(100%,600px)"}
            subtext={
              "Encouraging and enabling employees to take initiative and 	grow. \n ⁠Learn, Unlearn, Relearn: Embrace lifelong learning and continuous improvement. \n Mentorship Matters: Guide and support individuals to achieve their tech career goals. \n Inclusive Access: Provide equal opportunities for everyone 	to acquire tech skills."
            }
          />
          <AboutCard
            src={images.missionstatement}
            title={"INTEGRITY "}
            width={"min(100%,600px)"}
            subtext={
              "⁠Authenticity: Be genuine, transparent, and honest in all interactions. \n	Accountability: Take ownership of actions and outcomes. \n Respect: Value diversity, individuality, and uniqueness. \n Acting with honesty, fairness, and transparency."
            }
          />
          <AboutCard
            src={images.missionstatement}
            title={"Community "}
            width={"min(100%,600px)"}
            subtext={
              "Supportive Network: Build a community that uplifts and motivates each other. \n Collaborative Learning: Encourage peer-to-peer learning and knowledge sharing. \n Celebrate Success: Recognize and celebrate milestones and achievements."
            }
          />

          {/* <FloatingImage src={images.hex1} left={"20%"} /> */}
        </Flex>
        <FloatingImage src={images.hex1} left={"20%"} bottom={-100} />
        <FloatingImage src={images.hex1} right={"14%"} bottom={200} zi={-1} />
      </Box>

      <MPaper
        elevation={6}
        radius={"35px"}
        width={"90%"}
        center
        height={{ xs: "auto", lg: 270 }}
        sx={{ m: "80px auto", position: "relative", display: "block", py: 10 }}
      >
        <Box
          position={"absolute"}
          height={"100%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {!isMobile && (
            <Text weight={600} color={colors.tetiary1} size={"150px"}>
              {" "}
              M I L E S T O N E S
            </Text>
          )}
        </Box>
        <Flex
          wrap
          className='relative z-[100] w-full px-5'
          gap={50}
          justify='space-evenly'
        >
          <Flex vertical gap={isMobile ? 25 : 40} align='center'>
            <Text color={colors.secondary1} size={"64px"}>
              +3
            </Text>
            <Text color={colors.secondary1} type='h2'>
              Years of experience
            </Text>
          </Flex>
          <Flex vertical gap={isMobile ? 25 : 40} align='center'>
            <Text color={colors.secondary1} size={"64px"}>
              +9
            </Text>
            <Text color={colors.secondary1} type='h2'>
              Projects Completed
            </Text>
          </Flex>
          <Flex vertical gap={isMobile ? 25 : 40} align='center'>
            <Text color={colors.secondary1} size={"64px"}>
              +20
            </Text>
            <Text color={colors.secondary1} type='h2'>
              Total Trained
            </Text>
          </Flex>
          <Flex vertical gap={isMobile ? 25 : 40} align='center'>
            <Text color={colors.secondary1} size={"64px"}>
              100%
            </Text>
            <Text color={colors.secondary1} type='h2'>
              Customer Satisfaction
            </Text>
          </Flex>
        </Flex>
      </MPaper>

      {/* <div style={{ height: '600px' }} className="justify-center !relative">

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
          className=" translate-[-50%,-50%] !absolute !bottom-20 left-[50%]">Meet the team</Text>
      </div> */}

      <div className={styles.aboutBottom}>
        <Text type='h1' color={colors.white} className='!w-[50%] '>
          Secure the future of your company <br />
          with MAHORIX
        </Text>
        <div className={styles.circle}>
          <FaArrowRightLong color={colors.white} size={30} />
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;

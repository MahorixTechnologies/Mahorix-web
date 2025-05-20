import * as React from 'react';
import { Text } from '@/components';
import { colors, images } from '@/assets';
import styles from './home.module.scss'
import { Card } from '@mui/material';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
};
const Hexagon = (color = '#9747FF') => <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M1.26383 18.974L0.650102 28.3577C0.493287 30.7554 2.30985 32.8262 4.7075 32.983L14.9767 33.6547C16.082 33.727 17.1733 33.3749 18.0281 32.6703L35.1299 18.572C36.0559 17.8086 36.6255 16.6966 36.7038 15.499L37.4076 4.73699C37.572 2.22287 35.5731 0.0951704 33.0537 0.102479L22.8492 0.13208C21.8158 0.135078 20.8173 0.505817 20.0323 1.17792L2.77561 15.9532C1.88538 16.7154 1.34032 17.8045 1.26383 18.974Z" fill="url(#paint0_linear_8_2369)" />
    <defs>
        <linearGradient id="paint0_linear_8_2369" x1="18.855" y1="0.163838" x2="19.2354" y2="33.7385" gradientUnits="userSpaceOnUse">
            <stop stopColor={color} />
        </linearGradient>
    </defs>
</svg>


const KnowledgeCenterCard = (
    { name, country, img, iconColor }
) => <Card sx={{ boxShadow: 'none', display: 'flex', flexDirection: 'column', gap: 3, mx: '60px' }}>

        <Image src={img} height={'236'} style={{ width: '100%' }} />
        {/* <CardContent sx={{ p: 0 }}> */}
        <Text gutterBottom type="h3" component="div" color='#212121' block>
            {name}
        </Text>
        <Text lh={'24px'} type="body" color={'#3D3D3D'} block w={'70%'}>
            Dive into the principles of agile development and how it enhances project management, collaboration.
        </Text>

        <div className='flex gap-4 items-center'>
            {Hexagon(iconColor)}
            <Text type='h6'>
                Author: Alex Bingham
            </Text>
        </div>
        {/* </CardContent> */}
    </Card>

const testimonies = [
    { name: 'Agile Development: The Key to Flexibility ', country: 'South Africa', img: images.agile, iconColor: '#9747FF' },
    { name: 'Mobile App Development Trends to Watch in 2025', country: 'USA', img: images.mobileapp, iconColor: '#F9C107' },
    { name: 'Agile Development: The Key to Flexibility ', country: 'South Africa', img: images.agile, iconColor: '#9747FF' },
    { name: 'Mobile App Development Trends to Watch in 2025', country: 'USA', img: images.mobileapp, iconColor: '#F9C107' },
    { name: 'Agile Development: The Key to Flexibility ', country: 'South Africa', img: images.agile, iconColor: '#9747FF' },
    { name: 'Mobile App Development Trends to Watch in 2025', country: 'USA', img: images.mobileapp, iconColor: '#F9C107' },

]

export default function KnowledgeCenter() {

    return (
        <div className={styles.testimony}>
            <Text color={colors.secondary1} type='h2'>Knowledge Centre</Text>
            <div className="slider-container inline-block w-[90%]">
                <Slider {...settings}  >
                    {
                        testimonies.map((testimony, o) => (
                            <KnowledgeCenterCard key={o} {...testimony} />
                        ))
                    }
                </Slider></div>
        </div>
    );
}

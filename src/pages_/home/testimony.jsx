// import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Text } from '@/components';
import { colors, images } from '@/assets';
import styles from './home.module.scss'
// import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { Grid } from '@mui/material';



const TestimonyCard = (
    { name, country, img }
) => <Card sx={{ py: '30px', bgcolor: colors.tetiary1, borderRadius: "20px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <CardHeader
            avatar={
                <Avatar  src={'https://mui.com/material-ui/react-avatar/?srsltid=AfmBOoopprc65kxxzO0-rYCLgTLkryNaqABbceju6jyYGEzT-QXI7g0I'} />
            }
            action={
                <IconButton aria-label="settings">
                    <Image src={images.quote} />
                </IconButton>
            }
            title={<Text color={colors.secondary1} type='h6'>{name}</Text>}
            subheader={<Text color={colors.secondary1} type='body2'>{country}</Text>}
        />
        <CardContent>
            <Text color={colors.secondary1} type='body2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</Text>
        </CardContent>


    </Card>

const testimonies = [
    { name: 'ChiChi', country: 'South Africa', img: images.face },
    { name: 'Queen Rita ', country: 'USA', img: images.face },
    { name: 'Gloria Uko', country: 'Nigeria', img: images.face }
]

export default function Testimony() {

    return (
        <div className={styles.testimony}>

            <Text color={colors.secondary1} type='h2'>What our customers say about us</Text>

            <Grid container justifyContent={'stretch'} direction={'row'} spacing={3} px={'100px'} >
                {
                    testimonies.map(testimony => (
                        <Grid item size={{ lg: 4, xs: 12 }}>
                            <TestimonyCard {...testimony} />
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
}

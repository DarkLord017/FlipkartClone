import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { Box, Button, Typography, styled, Divider } from '@mui/material';

const responsive = {
    destop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const renderer = ({ hours, minutes, seconds }) => {
    return <span>{hours}:{minutes}:{seconds} Left</span>
}

const ViewAllButton = styled(Button)`
    margin-right: auto ;
   background-color: #2874f0 ;
   border-radius: 2px ;
  font-size: 12px ;

`
const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
    `
const DealText = styled(Typography)`
font-size: 22px;
font-weight: bold;
`
const Image = styled('img')`
 width: auto;
 height: 150;
`
const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box style={{ marginTop: '10px', backgroundcolor: '#FFFFFF ', marginBottom: '20px' }}>
            <Box style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', color: '#7f7f7f', width: '100%' }}>
                <DealText style={{ padding: '15x 20px 0px 15px ', fontWeight: 600, lineHeight: '32px', marginRight: '10px' }}>{title}</DealText>
                {timer &&
                    <Timer style={{ display: 'flex' }} >
                        <img src={timerURL} alt="timer" style={{ width: '20px', height: '20px', marginLeft: '20px' }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />

                    </Timer>
                }
                <ViewAllButton variant="contained" >View All</ViewAllButton>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                containerClass='carousel-container'
                swippable={false}
                draggable={false}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                style={{ marginTop: '40px' }}>
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
                            <Box textAlign="center" style={{ padding: '25px 50px' }} >
                                <Image src={product.url} alt="product" style={{ width: '100%', height: '100%' }} />
                                <Typography style={{ fontSize: '14px', marginTop: '5px', fontWeight: 'bold', color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography style={{ fontSize: '14px', marginTop: '5px', color: 'green' }}>{product.discount}</Typography>
                                <Typography style={{ fontSize: '14px', marginTop: '5px', color: '#212121', opacity: '0.6' }}>{product.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box >
    )

}

export default Slide;

import Slide from './Slide';
import { Box, styled } from '@mui/material';

const RightComponent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }

}))

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }

}))


const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Box style={{ display: 'flex' }}>
            <LeftComponent >
                <Slide products={products}
                    title={title}
                    timer={timer}
                />
            </LeftComponent>
            <RightComponent style={{ width: '17%', backgroundcolor: '#FFFFFF', padding: '5px', marginTop: '10px', marginLeft: '10px' }}>
                <img src={adURL} alt="ad" style={{ maxWidth: '217px' }} />
            </RightComponent>
        </Box>

    )

}

export default MidSlide;

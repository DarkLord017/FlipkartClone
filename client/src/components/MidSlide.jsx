import Slide from './Slide';
import { Box } from '@mui/material';

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <Box>
            <Box>
                <Slide products={products}
                    title={title}
                    timer={timer}
                />
            </Box>
            <img src={adURL} alt="ad" style={{ maxWidth: '217px' }} />
        </Box>

    )

}

export default MidSlide;

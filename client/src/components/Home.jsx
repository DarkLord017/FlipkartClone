import Banner from './Banner';
import NavBar from './NavBar';
import Slide from './Slide';
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';

import { getProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from './MidSlide';

const Component = styled(Box)`
padding: 20px 10px;
background-color: #f2f2f2;
`

const Home = () => {

    let { products } = useSelector(state => state.getProducts)
    console.log(products)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's top pics" timer={false} />
                <Slide products={products} title="Top Deals On Accesories" timer={false} />
            </Component>
        </div>
    );


}

export default Home;    // Export the Home component for use in other components
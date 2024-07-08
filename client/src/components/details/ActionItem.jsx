import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { AddToCart } from '../../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ActionItem = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(AddToCart(product.id, quantity));
        navigate('/cart');
    }

    return (
        <Box style={{ margin: '10px 40px' }}>
            <img src={product.detailUrl} alt={product.title.longTitle} style={{ display: 'block' }} />
            <Button variant="contained" onClick={() => addItemToCart()} style={{ backgroundColor: '#FF9F00', fontSize: '16px', padding: '10px 8px', margin: '10px 4px', width: '50%' }}>Add to Cart !</Button>
            <Button variant="contained" style={{ backgroundColor: '#FB641B', fontSize: '16px', padding: '10px 8px', margin: '10px 4px', width: '40%' }}>Buy Now !</Button>
        </Box>
    )
}


export default ActionItem;
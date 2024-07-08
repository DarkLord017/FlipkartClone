import { Box, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <Link
            to="/cart"

        >
            <Badge
                badgeContent={cartItems?.length}
                color="secondary"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                overlap="rectangular" // Ensure the badge is positioned correctly
            >
                <img
                    src="https://img.icons8.com/ios/452/shopping-cart.png"
                    alt="cart"
                    style={{ width: '35px', height: '30px' }}
                />
            </Badge>
        </Link>
    );
};

export default Cart;

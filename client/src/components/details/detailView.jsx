import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActionItem from "./ActionItem";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';


const DetailView = () => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`



    const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    margin-top: 7px;
    margin-bottom: 20px;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }`;

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }

        , [dispatch, id, product, loading]);
    useEffect(() => {
        if (product)
            setDisplay(true);
    }, [product]);

    return (
        <Box>
            {
                loading ? <h2>Loading...</h2> : display &&
                    <Box style={{ display: 'flex' }}>
                        <Box>
                            <ActionItem product={product} />
                        </Box>
                        <Box>
                            <Typography>{product.title.longTitle}</Typography>
                            <Typography style={{ display: 'flex', marginTop: '10px' }}>
                                <Typography style={{ color: '#212121', fontWeight: '400', opacity: '0.6' }}>8 Ratings & 1 Review</Typography>
                                <img src={fassured} alt="fassured" style={{ height: '32px', width: '72px', paddingLeft: '10px' }} />
                            </Typography>
                            <Typography style={{ display: 'flex', marginTop: '10px' }}>
                                <Typography style={{ fontSize: '25px', fontWeight: 'bold' }}>₹{product.price.cost}</Typography>
                                <Typography style={{ fontSize: '16px', fontWeight: '400', opacity: '0.6', textDecoration: 'line-through', marginLeft: '10px', marginTop: '10px' }}>₹{product.price.mrp}</Typography>
                                <Typography style={{ color: '#388E3C', marginLeft: '10px', marginTop: '10px' }}>{product.price.discount} off</Typography>
                            </Typography>
                            <Typography style={{ marginTop: '20px', fontWeight: 'bold' }}>Available offers</Typography>
                            <SmallText>
                                <Typography>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                                <Typography>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                                <Typography>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                                <Typography>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                            </SmallText>
                            <Table>
                                <TableBody>
                                    <ColumnText>
                                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                                        <TableCell>No Warranty</TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                                        <TableCell>
                                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                                            <Typography>GST invoice available</Typography>
                                            <Typography>View more sellers starting from ₹329</Typography>
                                        </TableCell>
                                    </ColumnText>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <img src={adURL} style={{ width: 390 }} />
                                        </TableCell>
                                    </TableRow>
                                    <ColumnText>
                                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                    </ColumnText>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
            }
        </Box>
    )
}

export default DetailView;
import { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';

import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import Search from './Search';

import BecomeASeller from './BecomeASeller';
import More from './More';
import Cart from './Cart';
import Profile from './Profile';
import LoginDialog from './LoginDialog';


const StyledHeader = styled(AppBar)`
    background: @2874f0;
    height: 55px;
`;

const Component = styled(Box)`
   margin-left: 1%;
   line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 12px;
    font-style: italic;
    `;






const Header = () => {
    const { account, toggleAccount } = useContext(DataContext);

    const [open, setOpen] = useState(false);

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const toggleOpen = () => {
        setOpen(true);
    }


    return (
        <>
            <StyledHeader position="static" style={{ minHeight: '55px' }}>
                <Toolbar>
                    <div style={{ flexDirection: 'column', marginLeft: '12%' }}>
                        <Component>
                            <img src={logoURL} alt="Flipkart" style={{ width: 85 }} />
                        </Component>
                        <Box>
                            <SubHeading>Explore
                                <Box component="span" style={{ color: '#FFFF00' }}> Plus</Box>
                                <img src={subURL} alt="Explore Plus!" style={{ width: 10, marginLeft: 4 }} />
                            </SubHeading>
                        </Box>
                    </div>
                    <Search />

                    {account ?
                        <Profile account={account} toggleAccount={toggleAccount} />
                        :

                        <Box onClick={toggleOpen} style={{ backgroundColor: '#FFFFFF', marginTop: '30px', marginLeft: '20px', marginBottom: '35px', paddingLeft: '15px', paddingTop: '0px', paddingBottom: '0px', paddingRight: '15px' }}>
                            <h1 style={{ color: '#0000FF', fontSize: '16px', marginTop: '5px', marginBottom: '5px' }}>Login</h1>
                        </Box>
                    }



                    <BecomeASeller />
                    <More />
                    <Cart />
                </Toolbar>
            </StyledHeader>
            <LoginDialog open={open} setOpen={setOpen} />
        </>
    )
}

export default Header;
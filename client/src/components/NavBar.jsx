import { Box, styled, Typography } from '@mui/material';


import { navData } from '../constants/data';
// Import the navData array from the data.js file

const Component = styled(Box)`
    display: flex;
    
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-around;
    `;

const Container = styled(Box)`
    padding: 5px , 3px;
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
    `;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    `;

const NavBar = () => {
    return (
        <>
            <Component>{
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt={data.text} style={{ width: 54 }} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
            </Component>
        </>
    )

}

export default NavBar;    // Export the NavBar component for use in other components
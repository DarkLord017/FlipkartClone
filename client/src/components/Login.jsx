import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Login = () => {
    const { account } = useContext(DataContext);

    return (
        <>
            {account ?
                <Typography>{account}</Typography>
                :
                <Box style={{
                    backgroundColor: '#FFFFFF',
                    marginTop: '30px',
                    marginLeft: '20px',
                    marginBottom: '35px',
                    paddingLeft: '15px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    paddingRight: '15px'
                }}>
                    <h1 style={{
                        color: '#0000FF',
                        fontSize: '16px',
                        marginTop: '5px',
                        marginBottom: '5px'
                    }}>Login</h1>
                </Box>
            }
        </>
    );
}

export default Login;

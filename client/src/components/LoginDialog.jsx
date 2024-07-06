import React, { useState, useRef, useContext } from "react";
import { Box, Dialog, TextField, Typography, Button, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';
import { authenticateSignUp, authenticateLogIn } from "../service/api";

const LoginDialog = ({ open, setOpen }) => {
    const accountInitialValues = {
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations',
        },
        signUp: {
            view: 'signUp',
            heading: 'Looks like you are new here!',
            subHeading: 'Sign up with your mobile number to get started',
        }
    };

    const { toggleAccount } = useContext(DataContext);

    const [account, setAccount] = useState(accountInitialValues.login);
    const [signUp, setSignUp] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
    });

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const inputRefs = {
        firstname: useRef(null),
        lastname: useRef(null),
        username: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        password: useRef(null),
        confirmpassword: useRef(null),
    };

    const [error, setError] = useState(false);

    const handleSignUp = () => {
        setAccount(accountInitialValues.signUp);
        setTimeout(() => {
            inputRefs.firstname.current.focus();
        }, 0);  // Ensure focus happens after state update
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setSignUp(prevState => ({ ...prevState, [name]: value }));
    };

    const onLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLogin(prevState => ({ ...prevState, [name]: value }));
    };

    const handleClose = () => {
        setOpen(false);
        setAccount(accountInitialValues.login);
        setError(false);
    };

    const userSignUp = async () => {
        let response = await authenticateSignUp(signUp);
        if (!response) return console.log('Error in SignUp');
        toggleAccount(signUp.username);
        handleClose();
    };

    const userLogin = async () => {
        let response = await authenticateLogIn(login);
        if (response.status === 200) {
            toggleAccount(login.username);
            handleClose();
        } else {
            setError(true);
        }
    };

    const Component = styled(Box)`
        height: 65vh;
        width: 34vw;
        display: flex;
    `;

    const Image = styled(Box)`
        background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height: 100%;
        width: 40%;
        padding: 45px 25px;
    `;

    const Wrapper = styled(Box)`
        display: flex;
        flex-direction: column;
        padding: 25px 35px;
        flex: 1;
        & > div, & > button, & > p {
            margin-top: 20px;
        } 
    `;

    const LoginButton = styled(Button)`
        text-transform: none;
        background: #FB641B;
        color: #fff;
        height: 48px;
        border-radius: 2px;
    `;

    const RequestOTP = styled(Button)`
        text-transform: none;
        background: #fff;
        color: #2874f0;
        height: 48px;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    `;

    const Error = styled(Typography)`
        color: #ff6161;
        font-size: 10px;
        line-height: 0;
        margin-top: 10px;
        font-weight: 600;
    `;


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Image>
                    <Typography variant="h3">{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                </Image>
                {account.view === 'login' ?
                    <Wrapper>
                        <TextField
                            variant="standard"
                            onChange={onLoginInputChange}
                            name='username'
                            label="Enter Email/Phone No."
                            value={login.username}
                        />
                        <TextField
                            variant="standard"
                            onChange={onLoginInputChange}
                            name='password'
                            label="Enter Password"
                            type="password"
                            value={login.password}
                        />
                        {error && <Error>Please enter valid username or password </Error>}
                        <Typography>Forgot Password?</Typography>
                        <Typography>By continuing you agree to the Flipkart Terms & Conditions</Typography>
                        <LoginButton variant="contained" color="primary" onClick={userLogin}>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestOTP variant="contained" color="primary">Request OTP</RequestOTP>
                        <Typography>Don't have an account? <span style={{ color: '#2874f0', cursor: 'pointer' }} onClick={handleSignUp}>Sign Up</span></Typography>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='firstname'
                            label="Enter FirstName"
                            value={signUp.firstname}
                            inputRef={inputRefs.firstname}
                            autoFocus
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='lastname'
                            label="Enter LastName"
                            value={signUp.lastname}
                            inputRef={inputRefs.lastname}
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='username'
                            label="Enter Username"
                            value={signUp.username}
                            inputRef={inputRefs.username}
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='email'
                            label="Enter Email"
                            value={signUp.email}
                            inputRef={inputRefs.email}
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='phone'
                            label="Enter Phone No."
                            value={signUp.phone}
                            inputRef={inputRefs.phone}
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='password'
                            type="password"
                            label="Enter Password"
                            value={signUp.password}
                            inputRef={inputRefs.password}
                        />
                        <TextField
                            variant="standard"
                            onChange={onInputChange}
                            name='confirmpassword'
                            type="password"
                            label="Enter Confirm Password"
                            value={signUp.confirmpassword}
                            inputRef={inputRefs.confirmpassword}
                        />
                        <LoginButton variant="contained" color="primary" onClick={userSignUp}>Continue</LoginButton>
                    </Wrapper>
                }
            </Component>
        </Dialog>
    );
}

export default LoginDialog;

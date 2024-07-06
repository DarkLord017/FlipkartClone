import { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from "@mui/material"
import { Logout } from '@mui/icons-material';


const Profile = ({ account, toggleAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const Logout = () => {
        toggleAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2, paddingLeft: 5 }}>{account} </Typography></Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => { handleClose(); Logout(); }}>Logout</MenuItem>
            </Menu>
        </>
    )

}

export default Profile;
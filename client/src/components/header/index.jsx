import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './header.css'
import { AppContext } from '../../contexts/appContext';

export default function Header(){
    const { appConfiguration, toggleSidebar } = useContext(AppContext)
    return (
        <AppBar id="main-header" position="static">
            <Toolbar>
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                <Button component={Link} to="/" style={{ fontWeight: "bold", color: "white" }} >{appConfiguration.name}</Button>
                <Button component={Link} to="/app" variant="outlined" style={{ marginLeft: "auto", marginRight: "10px", color: "white" }} size="small">APP</Button>
                <IconButton size="small">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const pathName = useLocation().pathname;
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        African Marketplace
                    </Typography>
                </Toolbar>
            </AppBar>

            <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
            <Tab label="Login" component={Link} value="/login" to='/login' />
        <Tab label="Sign Up" component={Link} value="/signup" to='/signup' />
                
            </Tabs>
        </Fragment>
    )
}

export default Navbar

import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const token = sessionStorage.getItem('token');

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
            { token === '' ?
                <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Login" component={Link} value="/login" to='/login' />
                    <Tab label="Sign Up" component={Link} value="/signup" to='/signup' />
                </Tabs>
                : 
                <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Home" component={Link} value="/" to='/' />
                    <Tab label="Prices" component={Link} value="/prices" to='/prices' />
                    <Tab label="Listings" component={Link} value="/listings" to='/listings' />
                </Tabs>
            }
        </Fragment>
    )
}

export default Navbar

import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    // TODO change to dinamic token and userID
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6OSwiaWF0IjoxNTgzMjYxMjM4LCJleHAiOjE1ODMzNDc2Mzh9.3teldLkKlu-DW4fM4u5-lTQ_2WVtg4QbXMoA4PKmZcQ';
    const userId = 3;

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
            { !token ?
                <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Login" component={Link} value="/login" to='/login' />
                    <Tab label="Sign Up" component={Link} value="/signup" to='/signup' />
                </Tabs>
                : 
                <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Prices" component={Link} value="/prices" to='/prices' />
                    <Tab label="All listings" component={Link} value="/listings" to='/listings' />
                    <Tab label="User Listings" component={Link} value={`/users/${userId}`} to={`/users/${userId}`} />
                </Tabs>
            }
        </Fragment>
    )
}

export default Navbar

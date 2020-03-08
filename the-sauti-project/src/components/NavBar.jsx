import React, { Fragment, useEffect, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, makeStyles, Container, IconButton } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.secondary.main
    },
    tab: {
        backgroundColor: '#fff',
        marginBottom: '20px'
    },
    MuiIconButtonRoot: {
        width: '150px',
        backgroundColor: theme.palette.background.default
    }
}))

const Navbar = () => {
    const classes = useStyles();
    const locationPathName = useLocation().pathname;
    const protectedRoutes = ['/prices', '/listings', '/' ];
    const nonProtectedRoutes = [ '/login', '/signup' ];

    return (
        <Fragment>
            <AppBar className={classes.appbar} position="static">
                <Container>
                    <Toolbar>
                        <IconButton>
                            <img className={classes.MuiIconButtonRoot} src="../../sauti.png" alt="Small logo"/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
<<<<<<< HEAD
            <Tabs value={pathName} indicatorColor='primary' textColor='primary' centered>
            <Tab label="Login" component={Link} value="/login" to='/login' />
            <Tab label="Sign Up" component={Link} value="/signup" to='/signup' />
                
            </Tabs>

=======
            { sessionStorage.getItem('token') ?
                <Tabs className={classes.tab} value={protectedRoutes.includes(locationPathName) ? locationPathName : '/' } indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Home" component={Link} value="/" to='/' />
                    <Tab label="Prices" component={Link} value="/prices" to='/prices' />
                    <Tab label="Listings" component={Link} value="/listings" to='/listings' />
                </Tabs>
                : 
                <Tabs className={classes.tab} value={nonProtectedRoutes.includes(locationPathName) ? locationPathName : '/login' } indicatorColor='primary' textColor='primary' centered>
                    <Tab label="Login" component={Link} value="/login" to='/login' />
                    <Tab label="Sign Up" component={Link} value="/signup" to='/signup' />
                </Tabs>
            }
>>>>>>> 0c3631c458dcf3c0838c644193b2c939d6769cc8
        </Fragment>
    )
}

export default Navbar

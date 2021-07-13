import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Link } from '@material-ui/core';

import Logo from '../images/logo.svg';
import hero from '../images/image-hero-desktop.jpg';

const useStyles = makeStyles(theme => ({
    appBar : {
        paddingRight : theme.spacing(8),
        paddingLeft : theme.spacing(8),
    },
    header : {
        background : `url(${hero}) center center / cover`,
        height : 350
    },
    overlay : {
        height : '100%',
        background : 'rgba(0,0,0,0.3)',
    },
    ul : {
        display : "flex",
        flex : 1,
        justifyContent : 'flex-end',
        gap : theme.spacing(2),
    }, 
    link : {
        color : theme.palette.common.white,
        fontWeight : 700
    }
}))

export default (
    props
) => {
    const classes = useStyles();
    return(
        <header className={classes.header}>
            <div className={classes.overlay}>
                <Container maxWidth="lg">
                    <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
                        <Toolbar>
                            <img src={Logo} alt="crowdfund"/>
                            <ul className={classes.ul}>
                                <li>
                                    <Link href="#" underline="none" className={classes.link}>About</Link>
                                </li>
                                <li>
                                    <Link href="#" underline="none" className={classes.link} >Discover</Link>
                                </li>
                                <li>
                                    <Link href="#" underline="none" className={classes.link} >Get Started</Link>
                                </li>
                            </ul>
                        </Toolbar>
                    </AppBar>
                </Container>
            </div>
        </header>
    );
}
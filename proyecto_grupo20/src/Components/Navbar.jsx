import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import {Typography,makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import {LoginIcon} from '@material-ui/icons';
import { Button } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    tittle:{
        flexGrow: 1
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton color='inherit' className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" className={classes.tittle}>
                    Sistema de Ventas
                    </Typography>
                    <Button color='inherit'>
                        Login <IconButton> <LoginIcon /> </IconButton>
                    </Button>
                </Toolbar>   
            </AppBar>
            <div className={classes.offset}> </div>
        </div>
    )
}


export default Navbar;
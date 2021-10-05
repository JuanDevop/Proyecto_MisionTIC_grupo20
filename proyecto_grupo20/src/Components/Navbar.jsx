import AppBar from '@material-ui/core/AppBar';
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styled, useTheme } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Button } from "@material-ui/core"
import { Icon } from '@material-ui/core'
import { Box, Drawer, CssBaseline, MuiAppBar, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import maestroUsuarios from './maestroUsuarios'
import maestroProductos from './maestroProductos'

const Usuarios = maestroUsuarios
const Productos = maestroProductos
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    tittle: {
        flexGrow: 1
    }
}));
  

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
    }

    // const classes = useStyles();
    // const theme : useTheme();

    handleDrawerOpen = () => {
        this.setState(state => ({...state,...{open : true}}));
    };

    handleDrawerClose = () => {
        this.setState(state => ({...state,...{open : false}}));
    };

    render(){
        return (
            <div>
                <AppBar position="fixed" open={this.state.open}>
                    <Toolbar>
                        <IconButton color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(this.state.open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Sistema de Ventas
                        </Typography>
                        <Button color='inherit' style={{marginLeft: "auto"}}>
                            Login <Icon>account_circle</Icon>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}>
                    <DrawerHeader>
                        <IconButton onClick={this.handleDrawerClose}>
                         <ChevronRightIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
    
                        <ListItem button key="Usuarios">
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Usuarios" onClick={this.props.handleMenuUsersClick} />
                        </ListItem>
    
                        <ListItem button key="Productos">
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Productos" onClick={this.props.handleMenuProdClick} />
                        </ListItem>
                    </List>
                </Drawer>
    
    
                <div> </div>
    
            </div>
    
        )
    }

    
}
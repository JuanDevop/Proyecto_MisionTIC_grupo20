import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'
import maestroUsuarios from './Components/maestroUsuarios'
import maestroProductos from './Components/maestroProductos'
import Home from './Components/HomeScreen'
import { useState } from 'react';

const Usuarios = maestroUsuarios
const Productos = maestroProductos


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChildern: <h1>Home</h1>
    }
  }

  handleMenuClick = (option) => {
    switch (option) {
      case "Usuarios": this.setState(state => ({ ...state, ...{ currentChildern: <Usuarios></Usuarios> } })); break;
      case "Productos": this.setState(state => ({ ...state, ...{ currentChildern: <Productos></Productos> } })); break;
      default: this.setState(state => ({ ...state, ...{ currentChildern: <h1>Home</h1> } })); break;
    }
  };

  handleMenuUsersClick = () => {
    this.setState(state => ({ ...state, ...{ currentChildern: <Usuarios></Usuarios> } }));
  }
  handleMenuProdClick = () => {
    this.setState(state => ({ ...state, ...{ currentChildern: <Productos></Productos> } }));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navbar handleMenuUsersClick={this.handleMenuUsersClick} handleMenuProdClick={this.handleMenuProdClick} />
        <Home children={this.state.currentChildern}></Home>
      </ThemeProvider>

    );
  }
}
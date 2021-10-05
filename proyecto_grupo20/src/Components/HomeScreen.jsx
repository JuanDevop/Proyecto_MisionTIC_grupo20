import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from '../temaConfig'
import { useState } from 'react';
import Navbar from './Navbar'
import maestroUsuarios from './maestroUsuarios'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render (){ 
        return(<div>{this.props.children}</div>)
    }
}
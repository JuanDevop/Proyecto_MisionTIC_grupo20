import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader, FormGroup , ModalFooter} from 'reactstrap'
import registroVentas from "./Components/RegistroVenta"

const Ventas = registroVentas


function App(){
    return(

        <ThemeProvider theme={theme}>
            <Navbar />
            <Ventas />
        </ThemeProvider>
 
    );
}

export default App;
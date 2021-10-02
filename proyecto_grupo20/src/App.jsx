import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'
import maestroUsuarios from './Components/maestroUsuarios'
import Login from "./Components/Login";

const Usuarios = maestroUsuarios


function App(){
    return(

        <ThemeProvider theme={theme}>
            <Navbar />
            <Login />
        </ThemeProvider>
 
    );
}

export default App;
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'
import maestroUsuarios from './Components/maestroUsuarios'

const Usuarios = maestroUsuarios


function App(){
    return(

        <ThemeProvider theme={theme}>
            <Navbar />
            <Usuarios />
        </ThemeProvider>
 
    );
}

export default App;
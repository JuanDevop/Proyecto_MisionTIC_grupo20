import React from "react";
import Button from "@material-ui/core/Button"
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'


function App(){
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <Button variant="contained" color="primary">
            Hola Mundo
            </Button>
        </ThemeProvider>
    );
}

export default App;
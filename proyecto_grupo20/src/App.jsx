import React from "react";
import Button from "@material-ui/core/Button"
import { ThemeProvider } from "@material-ui/styles";
import theme from './temaConfig'
import Navbar from './Components/Navbar'


function App(){
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    );
}

export default App;
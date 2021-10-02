import { lightBlue } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[900]
        }
    }
})

export default theme;
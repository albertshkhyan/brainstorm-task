import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = responsiveFontSizes(
    createMuiTheme({
        myPalette: {
            accent: '#0060FF',
            black: '#14151A',
            green: '#60D184',
            yellow: '#F7AE15',
            red: '#E95A40',
        },
        palette: {
            primary: {
                main: "#2D3347",
            },
            secondary: {
                main: '#407EFF',
            },
        },
        typography: {
            fontFamily: ['"Segoe UI Emoji"', 'Roboto'].join(","),
            h3: {
                fontSize: "10px"
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    })
)
export default theme;
import { createMuiTheme } from '@material-ui/core/styles';


export const blueish = '#00b0a6'
export const orangeish = '#ffc224'
export const whiteish = '#fefefe'

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: whiteish,
      contrastText: blueish, 
    },
    secondary: {
      main: blueish,
      contrastText: whiteish
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 20,
    fontWeightRegular: 400,
    fontWeightLight: 200,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    h1: {
      fontFamily: "'Righteous', cursive",
      fontSize: 54,
      color: blueish
    },
    h2: {
      fontFamily: "'Righteous', cursive",
      fontSize: 48,
      color: '#00b0a6'
    },
    h3: {
      fontFamily: "'Righteous', cursive",
      fontSize: 32,
      color: blueish
    },
    h4: {
      fontFamily: "'Righteous', cursive",
      fontSize: 24,
      color: blueish
    },
    h5: {
      fontFamily: "'Righteous', cursive",
      fontSize: 20,
      color: blueish
    },
    h6: {
      fontFamily: "'Righteous', cursive",
      fontSize: 16,
      color: blueish
    }
  },
  shape: {
    borderRadius: 4
  }
})

export const theme = { ...muiTheme }
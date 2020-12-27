import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c7c7c7',
      main: '#383838',
      dark: '#232323',
      contrastText: '#ececec',
    },
    secondary: {
      light: '#7d9883',
      main: '#567258',
      dark: '#465c47',
      contrastText: '#ececec',
    },
    type: 'dark',
  },
});

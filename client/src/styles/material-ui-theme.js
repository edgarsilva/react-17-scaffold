import { createMuiTheme } from '@material-ui/core/styles';
// import { cyan } from '@material-ui/core/colors';
// import { yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#0196b3"
    },
    secondary: {
      main: "#ffaa00"
    }
  }
});

export default theme;
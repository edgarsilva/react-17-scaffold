// React, Redux and React Router imports
// import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// Material-UI components
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import Images and Assets
// import navigator from '../images/navigator.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  navigator: {
    textAlign: "center"
  },
  title: {
    width: "100%",
    textAlign: "left",
    margin: "0 0 1em 0",
    fontWeight: "bold"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectLabel: {
    whiteSpace: "nowrap"
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Tabs
          value={0}
          indicatorColor="secondary"
          textColor="inherit"
          onChange={(ev, nextValue) => console.log("change:", nextValue)}
          aria-label="disabled tabs example"
        >
          <Tab label="Upload" disabled />
          <Tab label="Artwork" active />
          <Tab label="Artist" disabled />
          <Tab label="Dimensions" disabled />
        </Tabs>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.title}>
            Artwork Details
          </Typography>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple" className={classes.selectLabel}>What type of work is this</InputLabel>
              <Select
                required
                native
                value={""}
                label="some label"
                inputProps={{
                  name: 'type_of_work',
                  placeholder: "Choose one",
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple" className={classes.selectLabel}>Medium or material</InputLabel>
              <Select
                required
                native
                value={""}
                label="some label"
                inputProps={{
                  name: 'type_of_work',
                  placeholder: "Choose one",
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple" className={classes.selectLabel}>Primary support</InputLabel>
              <Select
                required
                native
                value={""}
                label="some label"
                inputProps={{
                  name: 'type_of_work',
                  placeholder: "Choose one",
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            <Button
              type="button"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              className={classes.submit}
              to=""
              component={RouterLink}
            >
              Get Started
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
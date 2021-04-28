// React, Redux and React Router imports
// import { useSelector, useDispatch } from 'react-redux'

// Material-UI and Vendor components
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Import Images and Assets
// import navigator from '../images/navigator.png';

// Import App and Local Components
import Dropzone from './ImageDropzoneWithPreviews';

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
    textAlign: "left",
    margin: "0 0 1em 0"
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
          <Tab label="Upload" active />
          <Tab label="Artwork" disabled />
          <Tab label="Artist" disabled />
          <Tab label="Dimensions" disabled />
        </Tabs>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.title}>
            First, let’s have a look at your piece.
          </Typography>
          <form className={classes.form} noValidate>
            <Typography component="div" variant="h6">
              Front Image *
            </Typography>

            <Dropzone />

            <Typography component="div" variant="h6">
              Back Image *
            </Typography>

            <Dropzone />

            <Button
              type="button"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              className={classes.submit}
            >
              Next: Artwork
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
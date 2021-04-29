// React, Redux and React Router imports
// import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// Material-UI components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Import Images and Assets
import navigator from '../images/navigator.png';

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
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.title}>
            Hi Janne, let’s find you the perfect expert to fix your precious treasure.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Add a title for this job"
              name="title"
              placeholder="Enter title"
              autoFocus
            />
            <Box m={1} className={classes.navigator}>
              <img src={navigator} alt="decorative navigator with monocular" />
            </Box>
            <Button
              type="button"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              className={classes.submit}
              to="new-job/upload"
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
import { useSelector, useDispatch } from 'react-redux'

// Material-UI Components
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Actions
import { signOut } from "../store/auth-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loginLink: {
    textTransform: "uppercase"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  console.log("User:", user);
  function signOutUser(email, pwd) {
    dispatch(signOut());
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Avatar className={classes.avatar}>
              <WhatshotIcon />
            </Avatar>
            Restoration MD
          </Typography>
          { user && (
              <Button
                type="button"
                color="inherit"
                className={classes.submit}
                onClick={() => {
                  signOutUser();
                }}
              >
                Sign Out
              </Button>
          )}
          { !user && (
              <>
                <Link
                  to="/sign-in"
                  color="inherit"
                  component={RouterLink}
                  className={classes.loginLink}
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Login
                </Link>
                <Button color="inherit">Sign Up</Button>
              </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
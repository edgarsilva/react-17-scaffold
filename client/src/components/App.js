import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

// MAterial-UI and Local componenets
// import logo from '../images/logo.svg';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/material-ui-theme';
import Header from './Header';
import SignInPage from './SignInPage';
import NewJobPage from './NewJobPage';
import NewJobImagesPage from './NewJobImagesPage';
import NewJobArtworkPage from './NewJobArtworkPage';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { authActions } from "../store/auth-slice";

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    display: "flex",
    flexDirection: "column"
  }
}));

const Landing = () => {
  const user = useSelector(state => {
    console.log("Initial State:", state);
    return state.user;
  });

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <div>Landing</div>
  )
};

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const printState = useSelector(state => {
    console.log("PrintState:", state);
  });

  useEffect(() => {
    console.log("Use Effect has run!");
    dispatch(authActions.fetchUser("Test passing arguments."));
  }, [dispatch, user]);

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/sign-out" component={SignInPage} />
          <Route exact path="/new-job" component={NewJobPage} />
          <Route exact path="/new-job/upload" component={NewJobImagesPage} />
          <Route exact path="/new-job/artwork" component={NewJobArtworkPage} />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

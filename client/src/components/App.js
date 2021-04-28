import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

// MAterial-UI and Local componenets
// import logo from '../images/logo.svg';
import '../styles/App.css';
import theme from '../styles/material-ui-theme';
import Header from './Header';
import SignInPage from './SignInPage';
import NewJobPage from './NewJobPage';
import NewJobImagesPage from './NewJobImagesPage';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { fetchUser } from "../actions";

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    display: "flex",
    flexDirection: "column"
  }
}));

const Landing = () => {
  const user = useSelector(state => {
    return state.user;
  });

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <>
      <div>Landing</div>
    </>
  )
};

export default function App() {
  const user = useSelector(state => {
    return state.user;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Use Effect has run!");
    dispatch(fetchUser("Test passing arguments."));
  }, [dispatch, user]);

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/sign-out" component={SignInPage} />
          <Route exact path="/new-job" component={NewJobPage} />
          <Route exact path="/new-job/upload" component={NewJobImagesPage} />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

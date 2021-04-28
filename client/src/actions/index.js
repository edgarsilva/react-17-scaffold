import axios from 'axios';
import { FETCH_USER } from '../constants/types';

export const fetchUser = (arg1) => async (dispatch) => {
  try {
    const response = await axios.get('auth/fetch-user');

    dispatch({
      type: FETCH_USER,
      payload: {
        user: response.data.user,
        creds: null
      }
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER,
      payload: {
        user: null
      }
    });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/sign-in', { username: email, password: password || "****" });

    dispatch({
      type: FETCH_USER,
      payload: {
        user: response.data.user,
        creds: null
      }
    });
  } catch (error) {

    dispatch({
      type: FETCH_USER,
      payload: {
        user: null
      }
    });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await axios.delete('/auth/sign-out');

    dispatch({
      type: FETCH_USER,
      payload: {
        user: null,
        creds: null
      }
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER,
      payload: {
        user: null
      }
    });
  }
};

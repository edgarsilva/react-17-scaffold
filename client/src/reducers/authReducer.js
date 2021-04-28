import { FETCH_USER, UPDATE_AUTH } from '../constants/types';

const authReducer =  (state = {}, action) => {
  // console.log("ACTION => ", action)
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
    case UPDATE_AUTH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default authReducer;
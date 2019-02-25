import _ from "lodash";
//import { FETCH_BOOKS, OWNER_LOGIN } from "../actions";
import { LOGINT } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
};
//Reducer listening to different action types
export default function(state = initialState, action) {
  switch (action.type) {
    //target 
      case LOGINT:
      console.log("Reducer loginT");
      return {
        ...state, 
        isAuthenticated: "true",
        user: action.payload //action values
      };
    default:
      return state;
  }
}

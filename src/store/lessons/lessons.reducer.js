import {combineReducers} from "redux";
import types from "./lessons.type";

import lessonItems from "../../stub/all-lessons";

// add code to make reducer work in this file.
const selectedLessons = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_LESSONS_SUCCESS : {
      return state;
    }
    case types.UPDATE_SELECTED_LESSONS_REQUEST : {
      return state;
    }
    case types.UPDATE_SELECTED_LESSONS_FAILURE : {
      return state;
    }
    default:
      return state
  }
};

// all lessons could have come from the API
// for ease, just use fixture data instead:
const allLessons = (state = lessonItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const lessonsReducer = combineReducers({
  allLessons,
  selectedLessons
});

export default lessonsReducer;

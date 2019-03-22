import { combineReducers } from "redux";
import types from "./lessons.type";

import lessonItems from "../../stub/all-lessons";

const selectedLessons = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_LESSONS_SUCCESS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

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

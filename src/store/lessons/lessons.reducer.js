import { combineReducers } from "redux";
import types from "./lessons.type";

import lessonItems from "../../stub/all-lessons";

const allLessons = (state = lessonItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const selectedLessons = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_LESSONS_SUCCESS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

const loadingLessons = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_LESSONS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case types.UPDATE_SELECTED_LESSONS_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
};

const lessonsReducer = combineReducers({
  allLessons,
  selectedLessons,
  loadingLessons
});

export default lessonsReducer;

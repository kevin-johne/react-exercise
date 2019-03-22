import {
  UPDATE_SELECTED_LESSONS_REQUEST,
  UPDATE_SELECTED_LESSONS_SUCCESS
} from "./lessons.type";

export const updateSelectedLessonsRequest = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_REQUEST
  };
};

export const updateSelectedLessonsSuccess = data => {
  return {
    type: UPDATE_SELECTED_LESSONS_SUCCESS,
    data: data
  };
};

export const updateSelectedLessons = () => {};
// fake an async request to API here:

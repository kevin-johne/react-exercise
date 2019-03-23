import types from "./lessons.type";

export const updateSelectedLessons = ids => {
  return async dispatch => {
    const body = { lessonsIds: ids };
    const FAKE_HTTP_TIMER = 1000;

    dispatch(updateSelectedLessonsRequest());

    try {
      const response = await fetch("https://admin.circusstreet.com/fake", {
        method: "POST",
        body: body
      });
    } catch (error) {
      console.error(error);
    } finally {
      //this is part of the exercise, where we return fake data any case,
      // usually this would be in the try clause
      setTimeout(() => {
        dispatch(updateSelectedLessonsSuccess(body.lessonsIds));
      }, FAKE_HTTP_TIMER);
    }
  };
};

export const updateSelectedLessonsRequest = () => {
  return {
    type: types.UPDATE_SELECTED_LESSONS_REQUEST
  };
};

export const updateSelectedLessonsSuccess = ids => {
  return {
    type: types.UPDATE_SELECTED_LESSONS_SUCCESS,
    data: ids
  };
};

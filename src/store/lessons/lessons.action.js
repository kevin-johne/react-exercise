import types from "./lessons.type";

export const updateSelectedLessons = ids => {
  return async dispatch => {
    const body = { lessonsIds: ids };

    dispatch(updateSelectedLessonsRequest());

    try {
      const response = await fetch("https://admin.circusstreet.com/fake", {
        method: "POST",
        body: body
      });
      const json = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(updateSelectedLessonsSuccess(body.lessonsIds));
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

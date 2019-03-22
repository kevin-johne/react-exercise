import types from "./lessons.type";

export const updateSelectedLessons = async (dispatch) => {
  dispatch(updateSelectedLessonsRequest());

  try {
    const response = await fetch( {
      url: "https://admin.circusstreet.com/fake",
      method: "POST",
      body: {
        lessonsIds: [61, 62, 63]
      }
    });
    const json = await response.json();
    dispatch(updateSelectedLessonsSuccess(json));
  } catch (error) {
    console.warn(error);
  }
};

export const updateSelectedLessonsRequest = () => {
  return {
    type: types.UPDATE_SELECTED_LESSONS_REQUEST
  };
};

export const updateSelectedLessonsSuccess = data => {
  return {
    type: types.UPDATE_SELECTED_LESSONS_SUCCESS,
    data: data
  };
};
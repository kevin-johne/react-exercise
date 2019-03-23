export const getLessonsForCheckbox = state => {
  return mapLessonsToCheckbox(state.allLessons, state.selectedLessons) || [];
};

const mapLessonsToCheckbox = (lessons, selectedLessons) => {
  return lessons.map(lesson => {
    return {
      value: lesson.id,
      name: lesson.name,
      disabled: !(lesson.status === "enabled"),
      checked: selectedLessons.includes(lesson.id)
    };
  });
};

export const isLoadingLessons = state => {
  return state.loadingLessons.loading;
};

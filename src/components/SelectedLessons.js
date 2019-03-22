import React, { Component } from "react";
import {CheckboxList} from "./CheckboxList";
import { connect } from "react-redux";
import { updateSelectedLessons } from "../store/lessons/lessons.action";
import {getLessons, getSelectedLessons} from "../store/lessons/lessons.selector";

class SelectedLessons extends Component {
  render() {
    const {lessons} = this.props;

    return (
      <div>
        <h1>Lessons List:</h1>
        <CheckboxList items={this.mapLessonsToCheckbox(lessons)}/>
      </div>
    );
  }

  mapLessonsToCheckbox(lessons) {
    return lessons.map(lesson => { return {
      value: lesson.id,
      name: lesson.name,
      disabled: !(lesson.status === "enabled")
    }});
  }
}

const mapStateToProps = state => {
  return {
    lessons: getLessons(state),
    selectedLessons: getSelectedLessons(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: () => dispatch(updateSelectedLessons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedLessons);

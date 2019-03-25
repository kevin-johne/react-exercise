import React, { Component } from "react";
import { CheckboxList } from "./CheckboxList";
import { connect } from "react-redux";
import { updateSelectedLessons } from "../store/lessons/lessons.action";
import {
  getLessonsForCheckbox,
  isLoadingLessons
} from "../store/lessons/lessons.selector";

class SelectedLessons extends Component {
  constructor(props) {
    super(props);

    this.onLessonsCheckedChange = this.onLessonsCheckedChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      lessons: this.props.lessons,
      lessonsSelectionChanged: false
    };
  }

  render() {
    const { lessons } = this.state;
    const formDisabled = this.props.isLoadingLessons;

    return (
      <>
        <h1 className="h1">Lessons List:</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset disabled={formDisabled}>
            <CheckboxList
              items={lessons}
              onChange={this.onLessonsCheckedChange}
            />
            <button
              className="btn"
              disabled={!this.state.lessonsSelectionChanged}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const lessonIds = this.filterCheckedLessons();
    this.props.submit(lessonIds);
  }

  filterCheckedLessons() {
    return this.state.lessons.filter(lesson => {
      return lesson.checked;
    }) || [];
  }

  onLessonsCheckedChange(lessonId) {
    const updatedLessons = this.state.lessons.map(lesson => {
      return this.toggleChecked(lessonId, lesson);
    });
    this.setState({
      lessons: updatedLessons,
      lessonsSelectionChanged: true
    });
  }

  toggleChecked(lessonId, lesson) {
    if (lessonId === lesson.value) {
      return { ...lesson, checked: !lesson.checked };
    }
    return lesson;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoadingLessons && !this.props.isLoadingLessons) {
      this.setState({
        lessonsSelectionChanged: false
      });
    }
  }
}

const mapStateToProps = state => {
  return {
    lessons: getLessonsForCheckbox(state),
    isLoadingLessons: isLoadingLessons(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: ids => dispatch(updateSelectedLessons(ids))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedLessons);

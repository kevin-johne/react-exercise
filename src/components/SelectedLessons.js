import React, { Component } from "react";
import { CheckboxList } from "./CheckboxList";
import { connect } from "react-redux";
import { updateSelectedLessons } from "../store/lessons/lessons.action";
import { getLessonsForCheckbox } from "../store/lessons/lessons.selector";

class SelectedLessons extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.form = React.createRef();
  }

  render() {
    const { lessons } = this.props;

    return (
      <>
        <h1>Lessons List:</h1>
        <form onSubmit={this.onSubmit} ref={this.form}>
          {/*<fieldset disabled={"disabled"}>*/}
            <CheckboxList items={lessons} />
            <button>Submit</button>
          {/*</fieldset>*/}
        </form>
      </>
    );
  }

  onSubmit(event) {
    const checkedLessons = this.form.current.querySelectorAll("input:checked");
    const lessonIds = [];
    for (let iterator = 0; iterator < checkedLessons.length; iterator++) {
      const id = parseInt(checkedLessons[iterator].value);
      lessonIds.push(id);
    }
    this.props.submit(lessonIds);
    event.preventDefault();
  }
}

const mapStateToProps = state => {
  return {
    lessons: getLessonsForCheckbox(state)
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

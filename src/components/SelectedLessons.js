import React, { Component } from 'react';
import CheckboxList from './CheckboxList'
import { connect } from 'react-redux'
import moize from 'moize'
import { updateSelectedLessons } from '../store/lessons/lessons.action'

// Add code in this file to create a component for the main view:
// You may want to connect component to store props & dispatch 

class SelectedLessons extends Component {
    render() {
      return '';
    }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedLessons)
import {SelectedLessons} from "./SelectedLessons";
import lessons from "../../stub/checked-lessons";

describe("<SelectedLessons /> component", () => {
  let props;

  beforeEach(() => {
    props  = {
      lessons: lessons,
      isLoadingLessons: false
    };
  });

  it("should render", () => {
    const selectedLessons = shallow(<SelectedLessons {...props}/>);
    expect(selectedLessons).toBeTruthy();
  });

  it("should disable the submit button if there are no lessons selected", () => {
    const selectedLessons = shallow(<SelectedLessons {...props}/>);
    expect(selectedLessons.find('button').prop("disabled")).toBeTruthy();
  });

  it("should enable the submit button if there are any lessons selected", () => {
    const selectedLessons = shallow(<SelectedLessons {...props}/>);
    const checkbox = selectedLessons.find('CheckboxList').dive().find('input').first();
    expect(selectedLessons.find('button').prop("disabled")).toBeTruthy();
    checkbox.simulate('change', { target: { value: checkbox.prop('value')}});
    expect(selectedLessons.find('button').prop('disabled')).toBeFalsy();
  });

  it("should disable form if the data is being saved", () => {
    props.isLoadingLessons = true;
    const selectedLessons = shallow(<SelectedLessons {...props}/>);
    expect(selectedLessons.find('fieldset').prop("disabled")).toBeTruthy();
  });

});

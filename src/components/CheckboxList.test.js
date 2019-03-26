import {CheckboxList} from "./CheckboxList";
import lessons from "../stub/checked-lessons";

describe("<CheckboxList /> component", () => {
  let props;

  beforeEach(() => {
    props = {
      items: lessons,
      onChange: jest.fn()
    }
  });

  it("should display the correct name for the first item", () => {
    const checkboxList = shallow(<CheckboxList {...props} />);
    expect(checkboxList.find('label').first().text()).toEqual(props.items[0].name);
  });

  it("should display the right number of items", () => {
    const checkboxList = shallow(<CheckboxList {...props} />);
    expect(checkboxList.find('.CheckboxList__row')).toHaveLength(props.items.length);
  });
});
import React from "react";

import './CheckboxList.scss';

export const CheckboxList = props => {
  const items = props.items;

  const onChange = (event) => {
    const value = parseInt(event.target.value);
    props.onChange(value);
  };

  return (
    <div className="CheckboxList">
      {items.map(item => {
        return (
          <div className="CheckboxList__row" key={item.value}>
            <input
              className="CheckboxList__input"
              type="checkbox"
              id={item.value}
              value={item.value}
              checked={item.checked}
              disabled={item.disabled}
              onChange={onChange}
            />
            <label className="CheckboxList__label" htmlFor={item.value}>
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";

export const CheckboxList = props => {
  const items = props.items;
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
              disabled={item.disabled}
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

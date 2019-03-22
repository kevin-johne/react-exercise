import React from "react";

export const CheckboxList = props => {
  const items = props.items;
  return items.map(item => {
    return (
      <div key={item.value}>
        <input
          type="checkbox"
          id={item.value}
          value={item.value}
          disabled={item.disabled}
        />
        <label htmlFor={item.value}>{item.name}</label>
      </div>
    );
  });
};

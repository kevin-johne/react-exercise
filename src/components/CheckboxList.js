import React from 'react';

// create a component for a list of checkbox items here:
export const CheckboxList = (props) => {
  const items = props.items;
  return (
    items.map((item) => {
      return (
        <div>
          <input type="checkbox" id={item.value} value={item.value} disabled={item.disabled}/>
          <label htmlFor={item.value}>{item.name}</label>
        </div>
      );
  })
  )
};
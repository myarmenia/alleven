import React from "react";

function Array(props) {
  let arr1 = []
  props.arr.map((el) => {
    el.favColors.map((el2) => {
      if (typeof el2 == typeof "string") {
        arr1.push(el2);
      } else {
        Object.values(el2).map(val => arr1.push(val.toUpperCase()))
      }
    });
  });
  return (
    <div className="Array">
      <ul>
        {arr1.map((color, i) => (
          <li key={i}>
            <h3>{color}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Array;

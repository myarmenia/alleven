import React from "react";
import Array from "./Array";
const array = [
  {
    id: 1,
    name: "Simon",
    favColors: ["red", "green", "black"],
  },
  {
    id: 2,
    name: "Poghos",
    favColors: [
      "purple",
      "magenta",
      { first: "light", second: "blue", y:"black", x: "lime",},
    ],
  },
];

function Array1() {
  return (
    <div>
      <Array arr={array}/>
    </div>
  );
}

export default Array1;

import React from "react";
import Page4 from "./Page4";
function Text() {
  const arr = [
    {
      id: "1",
      title:'Условия сотруднечества',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
    },
    {
        id: "2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
      },
      {
        id: "3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
      },
      {
        id: "4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
      },
      {
        id: "5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
      },
      {
        id: "6",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in convallis odio. Aliquam erat volutpat.",
      },
  ];
  return <div><Page4 arr1 = {arr}/></div>;
}

export default Text;

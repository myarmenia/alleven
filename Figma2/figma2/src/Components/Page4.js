import React from "react";
import "./Page4.css";
function Page4(props) {
    if(props.arr1){
    let text = props.arr1.map(({text,id}) => {
        return (<div key={id}>{text}</div>)
    })
  return (
    <div className="Page-4">
      <div className="div-text">
      <div className="text-1">Условия сотруднечества </div>
      </div>
      <div className="flex-container">
        {text}
      </div>
     <hr/>
     <div className="Tables">
      <div>
        <div className="Tab-table">Tap Table</div>
        <div className="Conf"> Политика конфиденциальности</div>
      </div>
      <div>
        <div className="Phone">Телефон </div>
        <div className="Phone"> +374 96-10-10-17</div>
      </div>
      <div>
        <div className="Addres"> Адрес: </div>
        <div className="Addres"> Yerevan, Mashtoc Ave Sarmen 1 str. </div>
      </div>
     </div>
    </div>
  );
}
}
export default Page4;

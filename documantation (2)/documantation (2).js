let a10 = 1;
function returN(arg) {
  a10++;
  return arg++;
}

let obj = [
  {
    id: "",
    name: "Владислав  Сидоров1",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "denied",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров2",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "accept",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров3",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "denied",
    item2: "accept",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров4",
    phoneNumber: "+7 960 777 77 77",
    item: "denied",
    item1: "accept",
    item2: "accept",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров5",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "accept",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров6",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "denied",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров7",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "accept",
    direction: "",
  },
  {
    id: "",
    name: "Владислав  Сидоров8",
    phoneNumber: "+7 960 777 77 77",
    item: "accept",
    item1: "accept",
    item2: "denied",
    direction: "",
  },
];

// let tbody1 = document.querySelectorAll("tbody")
// let mainObj = obj;
function addClients() {
  let tbody1 = document.getElementById("tbody1");

  for (i = 0; i < obj.length; i++) {
    let tr = document.createElement("tr");
    tbody1.appendChild(tr);
    for (a = 0; a < Object.keys(obj[i]).length; a++) {
      let td = document.createElement("td");
      td.className = "td";
      if (Object.keys(obj[i])[a] == "name") {
        td.className = "td tdName";
        td.innerHTML = Object.values(obj[i])[a];
      } else if (Object.keys(obj[i])[a] == "direction") {
        let img = document.createElement("img");
        img.style.margin = "0 0 -1px";
        img.style.cursor = "pointer";
        img.src = "../pics/Vector 202.svg";
        td.style.textAlign = "center";
        td.appendChild(img);
      } else if (Object.values(obj[i])[a] == "accept") {
        let img = document.createElement("img");
        img.style.margin = "0 0 -4px";
        img.style.cursor = "pointer";
        img.src = "../pics/acceptIcon.svg";
        img.setAttribute("data-number", i);
        td.style.textAlign = "center";
        td.appendChild(img);
      } else if (Object.values(obj[i])[a] == "denied") {
        let img = document.createElement("img");
        img.style.margin = "0 0 -4px";
        img.style.cursor = "pointer";
        img.src = "../pics/deniedIcon.svg";
        img.setAttribute("data-number", i);
        td.style.textAlign = "center";
        td.appendChild(img);
      } else {
        td.innerHTML = Object.values(obj[i])[a];
      }
      tr.appendChild(td);
    }
  }
}
addClients();

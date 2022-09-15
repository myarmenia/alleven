function burgerMenu(icon) {
  const menu = document.querySelector(".Menu");
  icon.classList.toggle("change");
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

let SearchModal = document.getElementById("SearchModal");
let pox = 0;
function search() {
  if (pox === 0) {
    SearchModal.style.display = "flex";
    pox++;
  } else if (pox === 1) {
    SearchModal.style.display = "none";
    pox--;
  }
}

let periodInp = document.getElementById("period");
function period() {
  if (checkbox1.checked) {
    periodInp.style.display = "flex";
  } else {
    periodInp.style.display = "none";
  }
}

let imgItem = document.getElementsByClassName("imgItem");
function setBorder(arg) {
  for (i = 0; i < imgItem.length; i++) {
    imgItem[i].style.border = "none";
  }
  this.style.border = "2px solid #00ADA6";
  this.style.borderRadius = "5px";
}

for (i = 0; i < imgItem.length; i++) {
  imgItem[i].addEventListener("click", setBorder);
}

let arrForPhotos = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

let a1 = document.getElementsByClassName("a1");
let boxLi = document.getElementsByClassName("boxLi");
let p1 = document.getElementById("p1");
let allEvBoxCont = document.getElementsByClassName("allEvBoxCont ")[1];

let photos = document.getElementById("photos");
function createPhotos() {
  allEvBoxCont.style.overflowY = "hidden";
  p1.innerHTML = "Добавленные фото/видео";

  for (i = 0; i < boxLi.length; i++) {
    a1[i].setAttribute("class", "a1");
  }
  a1[0].setAttribute("class", "a1 active");
  photos.innerHTML = "";
  photos.setAttribute("class", "photos");
  for (i = 0; i < arrForPhotos.length; i++) {
    let div1 = document.createElement("div");
    div1.className = "emptyPhotosImg";

    let imgX = document.createElement("img");
    imgX.style = "margin:7px; cursor:pointer";
    imgX.src = "../pics/GroupX.svg";
    imgX.setAttribute("data-number", i);

    imgX.onclick = function () {
      arrForPhotos.splice(+this.attributes["data-number"].value, 1);
      console.log(arrForPhotos.length);
      createPhotos();
    };

    // div1.style.background = `url(${arrForPhotos[i]})`

    div1.appendChild(imgX);
    photos.appendChild(div1);
  }
}
createPhotos();


let arrForComments = [
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
  {
    name: "Имя пользователя",
    text: "Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании соответствующий условий активизации. ",
    likes: 20,
    time: "30 мин.",
  },
];
function createComments() {
  allEvBoxCont.style.overflowY = "hidden";
  for (i = 0; i < boxLi.length; i++) {
    a1[i].setAttribute("class", "a1");
  }
  a1[1].setAttribute("class", "a1 active");
  p1.innerHTML = "Оставленные комментарии";
  photos.innerHTML = "";
  photos.setAttribute("class", "comments");
  let comments = document.getElementsByClassName("comments")[0];
  for (i = 0; i < arrForComments.length; i++) {
    let divMain = document.createElement("div");
    divMain.style = "display:flex; flex-direction:column; gap: 10px;";

    let divMainDiv1 = document.createElement("div");
    divMainDiv1.style = "display:flex; flex-direction:row; gap: 10px;";

    let img = document.createElement("img");
    img.style.height = "fit-content";
    img.style.marginTop = "9px";
    img.src = "../pics/Ellipse 48.svg";
    divMainDiv1.appendChild(img);

    let div2 = document.createElement("div");
    div2.style = "display:flex; flex-direction: column; width: 90%;";
    let div2Cont1 = document.createElement("div");
    div2Cont1.style =
      "display:flex; flex-direction:row; justify-content:space-between";

    let p1 = document.createElement("p");
    p1.style = "font-weight: 600;font-size: 12px; margin:7px 0; padding:0";
    p1.innerHTML = arrForComments[i].name;

    let span1 = document.createElement("span");
    span1.className = "span2";
    span1.innerHTML =
      arrForComments[i].likes + '<img src="../pics/heart1.svg" />';

    let p2 = document.createElement("p");
    p2.style =
      "font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: 0.01em;";
    p2.innerHTML = arrForComments[i].text;

    div2Cont1.appendChild(p1);
    div2Cont1.appendChild(span1);
    div2.appendChild(div2Cont1);
    div2.appendChild(p2);

    divMainDiv1.appendChild(div2);

    let divMainDiv2 = document.createElement("div");
    divMainDiv2.style =
      "display:flex; flex-direction:row;gap: 20px; align-items: center;";

    let time = document.createElement("span");
    time.style = "font-weight: 400; font-size: 10px; line-height: 20px;";
    time.innerHTML = arrForComments[i].time;

    let deleteBtn = document.createElement("div");
    deleteBtn.setAttribute("data-number", i);
    deleteBtn.onclick = function () {
      console.log(+this.attributes["data-number"].value);
      arrForComments.splice(+this.attributes["data-number"].value, 1);
      console.log(arrForComments.length);
      createComments();
    };
    deleteBtn.innerHTML = "Удалить";
    deleteBtn.style =
      "font-weight: 600;font-size: 12px;color: #00ADA6; cursor:pointer;height: fit-content;";

    divMainDiv2.appendChild(time);
    divMainDiv2.appendChild(deleteBtn);

    divMain.appendChild(divMainDiv1);
    divMain.appendChild(divMainDiv2);
    comments.appendChild(divMain);
  }
}
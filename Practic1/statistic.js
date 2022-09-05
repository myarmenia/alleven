var yValues = [40, 60];
var xValues = [
  "Организатор " + yValues[0] + "%",
  "Посетитель " + yValues[1] + "%",
];
var barColors = ["#FEE798", "#00ADA6"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});
var xValues1 = ["Янв.", "Фев", "Март", "Апр.", "Май", "Июнь"];
new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});
var xValues2 = ["Прошедшие", "Проходящие", "Предстооящие", "Отмененые"];
var yValues2 = [55, 49, 44, 24];
var barColors2 = ["#FEE798", "#FED487", "#00ADA6", "#01877D"];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues2,
    datasets: [
      {
        backgroundColor: barColors2,
        data: yValues2,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});
var xValues3 = [
  "Рест./кафе",
  "Кино",
  "Конц.",
  "Театр",
  "Детям",
  "Фест.",
  "Спорт",
  "Квест",
  "Экск.",
  "Выст.",
  "Дегуст.",
  "Стендап",
  "Шоу",
  "Мюзикл",
  "Необычноe",
  "Игры",
  "Ночная жизнь",
  "Экстрим",
  "Другoe",
];
var yValues3 = [0, 100, 500, 1000, 2000, 3000, 4000, 5000, 10000];
var barColors3 = " linear-gradient(180deg, #00ADA6 0%, #01877D 100%);";

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues3,
    datasets: [
      {
        backgroundColor: barColors3,
        data: yValues3,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
    },
  },
});

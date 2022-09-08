function day() {
  var dayTime = new Date();
  var number = dayTime.getDate();
  var day = dayTime.getDay();
  var month = dayTime.getMonth()+1;
  var year = dayTime.getFullYear();

  if (day === 0) { day = 'Domingo'};
  if (day === 1) { day = 'Segunda-feira'};
  if (day === 2) { day = 'Terça-feira'};
  if (day === 3) { day = 'Quarta-feira'};
  if (day === 4) { day = 'Quinta-feira'};
  if (day === 5) { day = 'Sexta-feira'};
  if (day === 6) { day = 'Sábado'};

  if (month === 1) { month = 'Janeiro'};
  if (month === 2) { month = 'Fevereiro'};
  if (month === 3) { month = 'Março'};
  if (month === 4) { month = 'Abril'};
  if (month === 5) { month = 'Maio'};
  if (month === 6) { month = 'Junho'};
  if (month === 7) { month = 'Julho'};
  if (month === 8) { month = 'Agosto'};
  if (month === 9) { month = 'Setembro'};
  if (month === 10) { month = 'Outubro'};
  if (month === 11) { month = 'Novembro'};
  if (month === 12) { month = 'Dezembro'};


  var dT = day + ', ' + number + ' de ' + month + ' de ' + year;

  document.getElementById("dTimer").innerHTML=dT;
}

var time = setInterval(day);


function clock() {
  var date = new Date();
  var hou = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();


if (hou < 10) { hou = "0" + hou};
if (min < 10) { min = "0" + min};
if (sec < 10) { sec = "0" + sec};

var timer = hou + ":" + min + ":" + sec;

document.getElementById("timer").value = timer;
}

var time = setInterval(clock, 1000);



window.onload = function(){

//tag - указать в каком теге создать таблицу
// n - количество строк
// m- количетсво столбцов

function setTable(tag,n,m){
  let myTag, myTable,
  myTr,myTd;
  myTag =  document.querySelector(tag);
  myTable = document.createElement('table');
  myTag.appendChild(myTable)
  for (var i=0;i<n;i++){
    myTr=document.createElement('tr');
    myTable.appendChild(myTr);
    for (var j=0;j<m;j++){
      myTd=document.createElement('td');
      myTr.appendChild(myTd);
      myTd.innerText = `(${i+1},${j+1})`;
      myTd.style.border="1px solid black";
    }
  }
  myTable.style.border="1px solid black";
}
setTable('body',10,10);

// Камень - Ножницы - Бумага
// Релизовал с правилом игры до трех выборов, если в течении трех выборов была ничья игра продолжается
// до первого выиграша

function Game() {
  var step, comp, you, scoreComp, scoreYou;
  scoreComp = 0;
  scoreYou = 0;
  step = 0;
  while ((step < 3) || ((step >= 3) && (scoreComp === scoreYou))) {
    comp = Math.random();
    ((comp >= 0) && (comp < 0.33)) ? (comp = "к") :
    ((comp >= 0.33) && (comp < 0.66)) ? (comp = "н") : (comp = "б");
    you = prompt("к - камень\nн - ножницы\nб - бумага", "Ваш ход...");
    if (you === null) {
      console.log("\nВы нажали отмена!");
      return;
    } else {
      you = you.toLowerCase();
      if ((you != "к") && (you != "н") && (you != "б")) {
        console.log("\nВы ввели билиберду)");
      } else {
        if (((comp === "к") && (you === "н")) || ((comp === "н") && (you === "б")) || ((comp === "б") && (you === "к"))) {
          scoreComp++;
          step++;
          console.log(`\nХод: комп - ${comp}, вы - ${you}\nСчет ${scoreComp} : ${scoreYou}`);
        } else if (((comp === "н") && (you === "к")) || ((comp === "б") && (you === "н")) || ((comp === "к") && (you === "б"))) {
          scoreYou++;
          step++;
          console.log(`\nХод: комп - ${comp}, вы - ${you}\nСчет ${scoreComp} : ${scoreYou}`);
        } else {
          console.log(`\nХод: комп - ${comp}, вы - ${you}\nСчет ${scoreComp} : ${scoreYou}`);
          step++;
        }
      }
    }
  }
  (scoreComp > scoreYou) ? (console.log(`\nПоражение!\nСчет ${scoreComp} : ${scoreYou}`)) :
  (console.log(`\nПобеда!\nСчет ${scoreComp} : ${scoreYou}`));
}
Game();

}



let yehia = document.getElementById("yehia_tarek");
let ahmad = document.getElementById("ahmad_magdy");
let se7s = document.getElementById("muhammad_hussein");
let nageh = document.getElementById("mahmoud_nageh");
let heba = document.getElementById("heba_nageeb");
///////
let team = document.getElementById("team");
///////////
function show(element, name, interval) {
  setTimeout(() => {
    element.innerHTML = name;
    element.style.opacity = 1;
  }, interval);
}
setTimeout(() => {
  team.style.opacity = 1;
  show(yehia, "1- yehia tarek", 500);
  show(ahmad, "2- ahmad magdy", 1000);
  show(se7s, "3- mohamed hussein", 1500);
  show(nageh, "4- mahmoud nageh", 2000);
  show(heba, "5- heba nageeb", 2500);
}, 2000); /// بعد ثانيتين عشان يكون الانيميشن بتاع الكي فريم خلص وده يدخل بعده

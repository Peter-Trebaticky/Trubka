$('.fadeelement')
  .hide()
  .fadeIn(1200);

/*mobile button*/

const telButton = document.querySelector("button.telbutton");
const telElement = document.getElementById("tel");

let hideTimeout;

telButton.addEventListener("mouseenter", function () {
  downTel();
  clearTimeout(hideTimeout);
});

telButton.addEventListener("mouseleave", function () {
  hideTimeout = setTimeout(moveTelOffScreen, 2000);
});

telElement.addEventListener("mouseenter", function () {
  clearTimeout(hideTimeout);
});

telElement.addEventListener("mouseleave", function () {
  hideTimeout = setTimeout(moveTelOffScreen, 2000);
});

function downTel() {
  telElement.style.top = "0";
}

function moveTelOffScreen() {
  telElement.style.top = "-100%";
}

/*services panel*/

function openNav() {
  document.getElementById("mySidepanelPrim").style.height = "235px";
}
function closeNav() {
  document.getElementById("mySidepanelPrim").style.height = "0";
}
let closeTimeout;

document.querySelector("button.openbtn").addEventListener("mouseenter", function () {
  openNav();
  clearTimeout(closeTimeout); 
});
document.querySelector("button.openbtn").addEventListener("mouseleave", function () {
  closeTimeout = setTimeout(closeNav, 2000);
});
document.querySelector("div.sidepanel").addEventListener("mouseenter", function () {
  clearTimeout(closeTimeout); 
});
document.querySelector("div.sidepanel").addEventListener("mouseleave", function () {
  closeTimeout = setTimeout(closeNav, 2000); 
});
/*RESPONSIV PANEL*/


function openNavSec() {
  document.getElementById("mySidepanelSec").style.width = "250px";
}


function closeNavSec() {
  document.getElementById("mySidepanelSec").style.width = "0";
}


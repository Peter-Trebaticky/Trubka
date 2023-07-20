$('.fadeelement')
  .hide()
  .fadeIn(1200);

/*mobile button*/

function downTel() {
  document.getElementById("tel").style.top = "0";
}

/*function upTel() {
  document.getElementById("tel").style.top = "-42px";
};*/

$("button.telbutton").mouseover(function () {
  $(downTel())
});


/*main panel*/

function openNav() {
  document.getElementById("mySidepanelPrim").style.height = "235px";
}


function closeNav() {
  document.getElementById("mySidepanelPrim").style.height = "0";
};
  
$("button.openbtn").mouseover(function() {
  $(openNav())
});

$("div.sidepanel").mouseleave(function () {
  $(closeNav())
});

/*RESPONSIV PANEL*/


function openNavSec() {
  document.getElementById("mySidepanelSec").style.width = "250px";
}


function closeNavSec() {
  document.getElementById("mySidepanelSec").style.width = "0";
}


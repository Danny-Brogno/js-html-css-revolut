// FIRST TIPE

function showMenu() {
  var invisible = $(this);
  var menu = invisible.find(".dropdown");

  $(".dropdown").hide();
  menu.toggle();
}

function byeByeMenu() {
  var visible = $(this);
  var menu = visible.find(".dropdown");

  $(".dropdown").hide();
}

function init () {
  $(".drop-links").mouseenter(showMenu);
  $(".dropdown").mouseleave(byeByeMenu);
}

$(document).ready(init);

// --------------------------------------------------------

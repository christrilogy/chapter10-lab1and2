
function hamburger() {
  var menu = document.getElemntById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none" ;
  }else {
    menu.style.display = "block";
  }
}

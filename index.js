function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementsByTagName("main")[0].classList.toggle("navOn");
  document.body.classList.toggle("no-scroll");
  document.getElementsByTagName("header")[0].classList.toggle("sticky-header");
}

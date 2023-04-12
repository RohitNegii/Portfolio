function show() {
  const ul = document.getElementById("ul");
  ul.style.transition = "all 0.7s linear";
  //   ul.style.display = "flex";
  ul.style.transform = "scaleX(1)";

  document.getElementsByClassName("burgur")[0].style.display = "none";
  document.getElementsByClassName("cross")[0].style.display = "flex";
}
function hide() {
  const ul = document.getElementById("ul");
  //   ul.style.display = "none";
  ul.style.transition = "all 0.7s linear";
  ul.style.transform = "scaleX(0)";

  document.getElementsByClassName("cross")[0].style.display = "none";
  document.getElementsByClassName("burgur")[0].style.display = "flex";
}

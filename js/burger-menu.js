document.getElementById("burger").onclick = function () { myFunction() };

function myFunction() {
  // document.getElementById("burger").innerHTML = "Menu!";
  const navigationsBody = document.querySelector(".navigate-wrapper");
  const pageBody = document.querySelector("body");
  navigationsBody.classList.toggle("hide");
  pageBody.classList.toggle("hide-scrollbar");
}

// function for account drop down.

var btn1 = document.querySelector(".menu2");

var list2 = document.querySelector(".acc_menu");

list2.style.display = "none";

btn1.addEventListener("click", function () {
  if (list2.style.display == "none") {
    list2.style.display = "block";
  } else {
    list2.style.display = "none";
  }
});

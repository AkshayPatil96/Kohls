// Function for Drop down.

var btn = document.querySelector(".menu");
var list = document.querySelector(".sub_menu1");

list.style.display = "none";

btn.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

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

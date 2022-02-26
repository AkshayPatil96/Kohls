// Function for Category Drop down.

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

// mobile view seach dropdown



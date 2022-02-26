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

// moble search dropdown function

var btn5 = document.querySelector(".srch");

var list5 = document.querySelector("#mob_srch");

list5.style.display = "none";

btn5.addEventListener("click", function () {
    if (list5.style.display == "none") {
        list5.style.display = "block";
    } else {
        list5.style.display = "none";
    }
});

//  Ham Burger Menu

var btn6 = document.querySelector(".open");

var list6 = document.querySelector(".mob_menu");

var close = document.querySelector(".close");
close.addEventListener("click", function () {
    list6.style.display = "none";
});

// var body = document.querySelector("body").addEventListener("click", function(){
//   list6.style.display = "none";
// })

list6.style.display = "none";

btn6.addEventListener("click", function () {
    if (list6.style.display == "none") {
        list6.style.display = "block";
    } else {
        list6.style.display = "none";
    }
});

// ham sub menu

var btn7 = document.querySelector(".sub_menu");

var list7 = document.querySelector(".cata_list");

list7.style.display = "none";

btn7.addEventListener("click", function () {
    if (list7.style.display == "none") {
        list7.style.display = "block";
    } else {
        list7.style.display = "none";
    }
});



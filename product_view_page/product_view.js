
var itemArray = JSON.parse(localStorage.getItem("itemData"));
var count = 1;
display(itemArray);

function display(data) {
    data.map(function (elem, index) {
        document.getElementById("productName").innerText = elem.name;
        document.getElementById("productImage").src = elem.img;
        document.getElementById("salePrice").innerText = "$"+elem.saleprice* count;   
        document.getElementById("orignalPrice").innerText = "$"+elem.originalprice* count;
        document.getElementById("quantityData").innerText = count;
        if(elem.detail != undefined)
        {
            document.getElementById("description").innerText = elem.detail; 
        }
    });
}

function increase() {
    count++;
    display(itemArray);
}
function decrease() {
    if (count > 1) {
        count--;
        display(itemArray);
    }
}

var cartArr = JSON.parse(localStorage.getItem("shopCart")) || [];
function add() {
    var name = document.getElementById("productName").innerText;
    var image = document.getElementById("productImage").src;
    var sale_price = document.getElementById("salePrice").innerText;
    var original_price = document.getElementById("orignalPrice").innerText;
    var size = document.getElementById("selectedSize").value;
    var quantity = document.getElementById("quantityData").innerText;

    var cartObj = {
        name: name,
        image: image,
        saleP: sale_price,
        origP: original_price,
        size: size,
        quant: quantity,
    };

    cartArr.push(cartObj);
    localStorage.setItem("shopCart", JSON.stringify(cartArr));
}

console.log(itemArray)
function back(){
    if(itemArray[0].gender = "men"){
        location.href = "/Mens/mens.html"
    }
    else
    {
        location.href = "/Womens Section/women.html"
    }
}
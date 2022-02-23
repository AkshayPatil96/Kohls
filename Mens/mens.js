var data = [
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$25.00",
    strikedOffPrice: "$95.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
];

data.map(function (ele, i, arr) {
  var div = document.createElement("div");
  div.setAttribute("class", "itm");

  var img = document.createElement("img");
  img.setAttribute("src", ele.imgUrl);
  
  var price = document.createElement("h3");
  price.setAttribute("class", "o_p");
  price.innerText = ele.price;
  
  var off = document.createElement("p");
  off.innerText = ele.strikedOffPrice;
  off.setAttribute("class", "r_p");
  
  var name = document.createElement("h5");
  name.setAttribute("class", "name");
  name.innerText = ele.name;

  div.append(img,price,off,name)
  document.querySelector(".items").append(div);
});

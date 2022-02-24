var data = [
    {
        img  : "https://media.kohlsimg.com/is/image/kohls/3583992_ALT?wid=240&hei=240&op_sharpen=1",
        saleprice : "$41.25",
        originalprice : "$55.00",
        name : "Men's Nike Sportswear Club Fleece Pullover Hoodie",
        gender : "men",
        size : "Large",
    }];

    var count = 1;
    display(data)
    function display(data){
        data.map(function(elem,index){
        document.getElementById("productName").innerText = elem.name;
        document.getElementById("productImage").src = elem.img;
        var sp = Number(elem.saleprice.replace("$",""));
        document.getElementById("salePrice").innerText = "$"+sp*count;
        var op = Number(elem.originalprice.replace("$",""));
        document.getElementById("orignalPrice").innerText = "$"+op*count;
        document.getElementById("discountPrice").innerText = "$"+(sp*count*80/100);
        document.getElementById("quantityData").innerText = count;
        document.getElementById("s").innerText = elem.size;
    })
    }
    
    function increase(){
        count++;
        display(data)
    }
    function decrease(){
        if(count > 1){
            count--
            display(data)
        }  
    }

    var cartArr = JSON.parse(localStorage.getItem("shopCart")) || [];
    function add(){
        var name = document.getElementById("productName").innerText;
        var image = document.getElementById("productImage").src;
        var sale_price = document.getElementById("salePrice").innerText;
        var original_price = document.getElementById("orignalPrice").innerText;
        var discount_price = document.getElementById("discountPrice").innerText;
        var size = document.getElementById("s").innerText;
        var quantity = document.getElementById("quantityData").innerText;
        
        var cartObj = {
            name: name,
            image: image,
            saleP: sale_price,
            origP: original_price,
            discP: discount_price,
            size: size,
            quant: quantity
        }

        cartArr.push(cartObj);
        console.log("🚀 ~ file: product_view.html ~ line 242 ~ add ~ cartArr", cartArr)
        localStorage.setItem("shopCart", JSON.stringify(cartArr));
    }
var data=JSON.parse(localStorage.getItem("shopCart"))
//||[
//     {
//         img:"https://media.kohlsimg.com/is/image/kohls/3614715_White?wid=180&hei=180&op_sharpen=1",
//         size:"Medium",
//         color:"Red",
//         Name:"Men's Champion® Graphic Tee",
//         price:"14.00",

//     },{
        
//             img:"https://media.kohlsimg.com/is/image/kohls/3614715_White?wid=180&hei=180&op_sharpen=1",
//             size:"Medium",
//             color:"Red",
//             Name:"Men's Champion® Graphic Tee",
//             price:"14.00",
    
        
//     },{
        
//         img:"https://media.kohlsimg.com/is/image/kohls/3614715_White?wid=180&hei=180&op_sharpen=1",
//         size:"Medium",
//         color:"Red",
//         Name:"Men's Champion® Graphic Tee",
//         price:"14.00",

    
// }
// ]

// {
//     img: "https://media.kohlsimg.com/is/image/kohls/3583992_ALT?wid=240&hei=240&op_sharpen=1",
//     saleprice: 41.25,
//     originalprice: 55.0,
//     name: "Men's Nike Sportswear Club Fleece Pullover Hoodie",
//     gender: "men",
//     size: "L",
//     category: "h",
//     detail: "Give your casual look a little extra zip with this men's Nike hoodie. Soft super fleece lining. Zip front. Long sleeves.",
// },
// JSON.parse(localStorage.getItem("shopCart"))      Soumya's product view item


// console.log(data[0].color,data[0].size)

appendData(data)

function appendData(arr,index){
    var mainDiv=document.getElementById("leftside")
    mainDiv.innerHTML=null;


    arr.forEach((elem)=>{
       var main=document.createElement("div")

// main.setAttribute("class","flex")
// main.setAttribute("class","main")
main.classList.add("flex","main")
var imgDiv=document.createElement("div")
imgDiv.setAttribute("class","img")
var img=document.createElement("img")
img.src=elem.img
img.setAttribute("width","100px")
img.setAttribute("height","100px")

var p=document.createElement("p")
p.setAttribute("class","end")
p.textContent="sale price"

var price=document.createElement("p")
price.textContent="$"+elem.saleprice;
price.setAttribute("class","end")
/////////////

imgDiv.append(img,p,price)


var content=document.createElement("div")

content.setAttribute("class","content")

var name=document.createElement("p")
name.setAttribute("class","head")
name.textContent=elem.name

var size=document.createElement("p")

size.textContent="Size :"
var b1=document.createElement("b")
b1.textContent=elem.size
size.append(b1)

// var color=document.createElement("p")
// color.textContent="color :"
// var b2=document.createElement("b")
// b2.textContent=elem.color
// color.append(b2)
//////////////////

content.append(name,size)
////////////////////////

main.append(imgDiv,content)

var saveDiv=document.createElement("div")

// saveDiv.setAttribute("class","flex")
console.log(saveDiv.getAttribute("class"))
// saveDiv.setAttribute("class","second")
saveDiv.classList.add("flex","second")

var h4=document.createElement("h4")
h4.textContent="Save for later"

var p1=document.createElement("p")

p1.textContent="Delete"

p1.addEventListener("click",()=>{
    arr.splice(index,1)
    localStorage.setItem("shopCart",JSON.stringify(arr))
    appendData(arr)
    totalPrice(arr)
})
var p2=document.createElement("p")

p2.textContent="-"

if(elem.quantity>1){
    p2.addEventListener("click",()=>{
         elem.quantity--;
         localStorage.setItem("shopCart",JSON.stringify(arr))
         appendData(arr)
         totalPrice(arr)
    })
    
}
var p3=document.createElement("p")

p3.textContent=elem.quantity||1

var p4=document.createElement("p")

p4.textContent="+"

p4.addEventListener("click",()=>{
    elem.quantity=+(p3.textContent)+1;
    localStorage.setItem("shopCart",JSON.stringify(arr))
    appendData(arr)
    totalPrice(arr)

})
///////////////

saveDiv.append(h4,p1,p2,p3,p4)

mainDiv.append(main,saveDiv)

    })
}

totalPrice(data)

function totalPrice(arr){
    var itemCOunt=document.getElementById("count")

    itemCOunt.textContent="("+data.length+")"

total(arr)

    function total(arr){
        var total=0;
        arr.forEach((elem)=>{
           if(elem.quantity) total+=elem.price*elem.quantity
           else  total+= +elem.price
        })
        var price=document.getElementById("price")
        price.textContent="$   "+ total+".00"

        var totalPrice=document.getElementById("totalPrice")

        totalPrice.textContent="$ "+(total+ +document.getElementById("extra").textContent)
    }

   




}

var checkOut=JSON.parse(localStorage.getItem("checkOut")) || [];
//  var user=JSON.parse(localStorage.getItem("signupData"))||[];
checkOut.map(function(data)
{   

           //details of buyer//
          var Name=document.createElement("p")
        //    name.innerText= data.name
           Name.innerText="Aditya"
           var email=document.createElement("p")
           email.innerText="aditya@gmail.com";
        //    email.innerText=user.email;
           document.querySelector("#name").append(Name,email)
        
           //    content of product div
           var maindiv=document.createElement("div")
           maindiv.id="innerdiv"
             
     

       
            
            
            var Text=document.createElement("div")
            Text.id="Text"
            Text.append("Hide Your Summary")

            var img = document.createElement("img");
            img.setAttribute("src", data.image_url);
            
            var imagediv=document.createElement("div")
            imagediv.id="img"
            imagediv.append(img)
             
            
             
            var size=document.createElement("p")
            size.innerText="size:M"
            
            var color=document.createElement("p")
            color.innerText="Color:Grey"
            
            var name = document.createElement("p");
            name.innerText = data.name;
            
            var div=document.createElement("div")
            div.append(name)
            
            var div2=document.createElement("div")
            div2.append(size,color)


            var content=document.createElement("div")
             content.id="content"
             content.append(div,div2)
              maindiv.append(imagediv,content)
          

            document.querySelector("#container").append(Text,maindiv);
           
            //total div//
            var text=document.createElement("p");
            text.innerText="What You're Paying For";

             var items=document.createElement("p");
             items.innerText="Items()"+" "+"1";

            var price = document.createElement("p");
            price.innerText = "Price -"+" "+data.price;

            var strikedoffprice = document.createElement("s");
            strikedoffprice.innerText = "Total Price -"+" "+data.strikedoffprice;
                //strikedoffprice.style.textDecoration = "line-through";
            var text2=document.createElement("p");
            text2.innerText="You Are're Saving"+" "+data.price;
            text2.id="text2";

            var div=document.createElement("div");
            div.append(text,items,price, strikedoffprice,text2);
            document.querySelector("#total").append(div);
});
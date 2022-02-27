  // bill address choose
document.querySelector("#paybtn1").addEventListener("click", function(){
  document.querySelector("#paybtn1").style.color="white";
  document.querySelector("#paybtn1").style.backgroundColor="black";
  document.querySelector("#paybtn2").style.backgroundColor="white";
  document.querySelector("#paybtn2").style.color="black";
})
document.querySelector("#paybtn2").addEventListener("click", function(){
  
  document.querySelector("#paybtn2").style.backgroundColor="black";
  document.querySelector("#paybtn2").style.color="white";
  document.querySelector("#paybtn1").style.color="black";
  document.querySelector("#paybtn1").style.backgroundColor="white";
})



// card details input
 document.querySelector("#form").addEventListener("submit", myFormSubmit);

 var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
 function myFormSubmit(event) {
   event.preventDefault();
   var signupObj = {
     cardHolderName: document.querySelector("#chname").value,
     cardNumber: document.querySelector("#cnum").value,
     exp: document.querySelector("#exp").value,
     security: document.querySelector("#secu").value,


     firstName: document.querySelector("#fname").value,
          lastName: document.querySelector("#lname").value,
          streetAdress: document.querySelector("#stadd").value,
          apartment: document.querySelector("#apart").value,
          zip: document.querySelector("#zip").value,
          city: document.querySelector("#c").value,
          state: document.querySelector("#s").value,
          mobile: document.querySelector("#phone").value,

   };
   
   signupArr.push(signupObj);
   console.log(signupArr);
   localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

  // if(document.querySelector("input[type='submit']")
  //    .addEventListener("click", function () {

  //     document.querySelector("inline").style.display="inline";
   
  //    }));
    // if(document.querySelector("#bt2").addEventListener("click",function(){
    //   document.querySelector("#topbxb").value="";
    //   alert("clear")
    // }));

    if(document.querySelector("#btb1").addEventListener("click",function(){
      window.location.href = "/payment page/paycomplete.html"
    })); 
    if(document.querySelector("#bt2").addEventListener("click",function(){
      document.querySelector("#form").value="";
      alert("cancel")
    }));   
 }

// billing

//  document.querySelector("#form2").addEventListener("submit", myFormSubmitcomp);

//  var signupArr2 = JSON.parse(localStorage.getItem("signUpDetails2")) || [];
//  function myFormSubmitcomp() {
//    Event.preventDefault();
//    var billingAdd = {
//      firstName: document.querySelector("#fname").value,
//      lastName: document.querySelector("#lname").value,
//      streetAdress: document.querySelector("#stadd").value,
//      apartment: document.querySelector("#apart").value,
//      zip: document.querySelector("#zip").value,
//      city: document.querySelector("#c").value,
//      state: document.querySelector("#s").value,
//      mobile: document.querySelector("#phone").value,

//    };
   
//    signupArr2.push(billingAdd);
//    console.log(billingAdd);
//    localStorage.setItem("signUpDetails2", JSON.stringify(signupArr2));
  
  
  





//   document.querySelector("#btb1")
//      .addEventListener("click", function () {
//       // window.location.href = "home.html";
//       window.location.href = "paycomplete.html";
//       // alert("Enter Billing Address")
//      });
     
//     // if(document.querySelector("#btb2").addEventListener("click",function(){
//     //   document.querySelector("#form2").value="";
//     // }));
      
       
//  }







////////billing address////

  // var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
  // console.log(regdUsers);

  // document.querySelector("#form").addEventListener("submit", formSubmit);

  // var form = document.querySelector("#form");

  // console.log(form.user.value);
  // form.id.value
  // function formSubmit(event) {
  //   event.preventDefault();

  //   var user = form.user.value;
  //   var pass = form.pass.value;
  //   var cardName=form.full.value;

  //   var cardNum=form.city.value;
  //   console.log(user, pass);

  //   var flag= false
  //   for (var i = 0; i < regdUsers.length; i++) {
  //     if (regdUsers[i].user == user && regdUsers[i].pass == pass) {
  //       flag=true;
  //     } else {
  //       flag=false;
  //     }

  //   }
  //   if (flag==true){
  //     alert("login Successfull")
  //     window.location.href = "./women.html";
  //   }
  //   if(flag==false){
  //     alert("Login fail")
  //   }
  // }




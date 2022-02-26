var sign = JSON.parse(localStorage.getItem("signupData"));
document.querySelector("#form").addEventListener("submit",data)

    function data(e)
    {
        e.preventDefault();
        var email = document.querySelector("#email").value;
        var pass = document.querySelector("#pass").value;

        var database ={
            email: email,
            pass: pass
        };
         
        for(var i=0;i<sign.length;i++)
        {
            if(sign[i].email == email && sign[i].pass == pass)
            {
                location.href="/Homepage/index.html";
            }
            else
            {
               alert("Wrong Email or Pass");
            }
        }
    }

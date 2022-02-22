  var sign=JSON.parse(localStroge.getItem("signupData"));
document.querySelector("#form").addEventListener("submit",data)

    function data()
    {
        var email=document.querySelector("#email").value
        var pass=document.querySelector("#pass").value

        var database={
            Email:email,
            Pass:pass,
        };
         
        for(var i=0;i<sign.length;i++)
        {
            if(sign[i].email==Email&&sign[i].password==Pass)
            {
                windows.alert("Succesful");
            }
            else
            {
               windows.alert("Wrong Email or Pass");
            }
        }
        
    }

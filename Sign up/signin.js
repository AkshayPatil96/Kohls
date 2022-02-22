  
document.querySelector("#form").addEventListener("submit",data)

    function data()
    {
        var email=document.querySelector("#email").value
        var pass=document.querySelector("#pass").value

        var database={
            Email:email,
            Pass:pass,
        };
         
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].email==Email&&arr[i].passward==Pass)
            {
                windows.alert("Succesful");
            }
            else
            {
               windows.alert("Wrong Email or Pass");
            }
        }
        
    }
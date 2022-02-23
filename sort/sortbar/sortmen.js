




function sPrice()
   {
    var sorting=document.querySelector("#sprice").value;
    if(sorting=="h2l")
    {
      cartObject.sort(function(a,b)
        {
            return b.price-a.price;
        })
        displaydata(mensdata)
       
    }
    else
    {
      cartObject.sort(function(a,b)
        {
            return a.price-b.price
        })
        displaydata(mensdata)

    }
    console.log(document.querySelector("#sprice").value)
  }

  function ssize()
  {
      var sorting=document.querySelector("ssize").value;
    
        for(var i=0;i<mensdata.length;i++)
        {
          if(mensdata.size=="Large"&& sorting=="l")
          {
            displaydata(mensdata)
          }
          else if(mensdata.size=="Medium"&& sorting=="m")
          {
            displaydata(mensdata)
          }
          else
          {
              displaydata(mensdata)
          }
          
        }
      
  }
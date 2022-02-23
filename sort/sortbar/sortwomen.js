function sPrice()
   {
    var sorting=document.querySelector("#sprice").value;
    if(sorting=="h2l")
    {
      cartObject.sort(function(a,b)
        {
            return b.price-a.price;
        })
        displaydata(womensdata)
       
    }
    else
    {
      cartObject.sort(function(a,b)
        {
            return a.price-b.price
        })
        displaydata(womensdata)

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
            displaydata(womensdata)
          }
          else if(mensdata.size=="Medium"&& sorting=="m")
          {
            displaydata(womensdata)
          }
          else
          {
              displaydata(womensdata)
          }
          
        }
      
  }
  function srating()
  {
      var sorting=document.querySelector("#srating").value;
   
        for(var i=0;i<womwnsdata.length;i++)
        {
            if(womensdata.rating==1&&soting==1)
            {
                displaydata(womensdata)
            }
            else if(womensdata.rating==2&&soting==2)
            {
                displaydata(womensdata)
            }
            else if(womensdata.rating==3&&soting==3)
            {
                display(womensdata)
            }
            else if(womensdata.rating==4&&soting==4)
            {
              display(womensdata)
            }
            else
            {
              display(womensdata)
            }
            
        }
      

  }
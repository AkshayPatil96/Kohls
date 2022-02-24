



var array = [1,2,3,4,3,2,1]

for(var i=0;i<array.length;i++)
{   
    var count = 0;
    for(var j=i;j<array.length;j++)
    {
        if(array[i]==array[j]){
            count++
        }
    }
    if(count<0){
        console.log(array[i])
    }
}
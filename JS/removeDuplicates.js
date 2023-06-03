let arr= ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
let newarr=[];
let i=0,j;
let flag=0;
while(i<arr.length)
{   
    j=0;
    while(j<newarr.length)
    {
        if(arr[[i]]==newarr[j++])
            {
                flag=1;
                break;
            }
    }
    if(flag==0)
    {
        newarr[j]=arr[i]
    }
    else{
        flag=0;
    }
    i++;
}
console.log(newarr)
console.log(arr)
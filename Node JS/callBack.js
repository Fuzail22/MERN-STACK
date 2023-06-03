function first(){
    console.log("first");
    setTimeout(function(){
        secondCb();
    },5000);
    
    third();
}
function second(){
    console.log("second");
}
function third(){
    console.log("third");
}
function secondCb(){
    console.log("secondCb");
}
first();
//second();
//third();
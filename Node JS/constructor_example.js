function Car(brandName,variant,manufacturing)
{
    this.brandName=brandName;
    this.variant=variant;
    this.manufacturing=manufacturing;
}

let altroz=new Car("Tata","Petrol",2021);
let swiftDezire=new Car("Maruti","Deisel",2019);
//console.log(altroz);
//console.log(swiftDezire);

function printObject(obj){
    for(prop in obj)
    {
        console.log(obj[prop]);
    }
}

printObject(altroz);
printObject(swiftDezire);
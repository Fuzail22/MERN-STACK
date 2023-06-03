let product = {
    name: "Iphone",
    price: 222000,
    date: "08-08-2022",
  };
  console.log(product);
  
  product.seller = "unixtech";
  console.log(product);
  
  delete product.seller;
  console.log(product);
  
  product["discount"] = "20%";
  console.log(product);
  
  let test = "id";
  
  product[test] = 198827;
  console.log(product);

  for(let key in product)
    console.log(key+": "+product[key])
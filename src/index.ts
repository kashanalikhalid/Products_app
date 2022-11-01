import {isUndefined} from "util";

let fs = require("fs");

interface Product {
  id: string;
  name: string;
  unit_price: number;
  quantity: number;
  created_date: Date // can be number (unix time) if you want to
}

interface returnProduct{
  found:boolean,
  index:number
}

let input:Product={
  id:'5',
  name:"Bat",
  unit_price:200,
  quantity:2,
  created_date:new Date(Date.now())
}

// fs.appendFile('data.json', "",function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


let data:[Product] = JSON.parse(fs.readFileSync("data.json", "utf8"));


let writeData=(product:Product):void=>{
  let {found,index}=findProduct(product.id);
  if(found)
  {
    console.log("Duplicate data cannot be inserted")
  }
  else{
    data.push(product)
    writeFile("Product Added Successfully")
  }
}

const listProducts=():void=>{
  data.forEach(({name,unit_price,quantity}:Product)=>{
    if(quantity>=1)
    {
      console.log(` Name: ${name} Unit Price:${unit_price} Total Price:${quantity*unit_price}`)
    }
  })
}

const updateProduct=(id:string,quantity:number,price:number)=>{

  let {found,index}=findProduct(id);

  if(found)
  {
    data[index].quantity=quantity;
    data[index].unit_price=price;
    writeFile("Product Updated Successfully")
  }
  else{
    console.log("Product Not found!")
  }
}

let deleteProduct=(id:String)=>{
  let {found,index}=findProduct(id)
  if(found)
  {
    data.splice(index,1)
    writeFile("Product Deleted Successfully")
  }
  else{
    console.log("Product not found")

  }
}

const writeFile=(message:string)=>{
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err)
      console.log(err);
    else {
      data = JSON.parse(fs.readFileSync("data.json", "utf8"));
      console.log(message);
    }
  });
}


const findProduct=(id:String):returnProduct=>{
  let product:Product;
  let index=-1;
  let found:boolean=false;
  product=data.find((val)=>val.id===id)
  if(product) {
    index=data.indexOf(product);found=true;
  }
  return {found,index}
}

// updateProduct("5",60,50);
// deleteProduct("5")
// writeData(input);
// listProducts()


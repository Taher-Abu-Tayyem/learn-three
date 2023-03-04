import {React,useEffect, useState} from "react";
import ProductsData from "./ProductsData";
import Product from "./Product";
import "./Productslist.css";
const ProductsList = () => {
const[products,setProducts]=useState([])
useEffect(()=>{
 fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=>setProducts(data))
         },[]);

 const ProductsData =products.map((product)=>{
      return   product.price>100 ? (
      <Product key={product.id} product={product}/>): null;
    
  });
  return <div className="products-list">
   {products.length === 0 ? <h1>Loading</h1>
   :<div className="row"> 
     {ProductsData} 
  </div> }
  </div>;
};

export default ProductsList;

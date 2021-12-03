import React, { useState } from "react";
import Loading from "../Loading";
import ProductItem from "../ProductItem";
import { ProductModal } from "../ProductModal";

export default function ProductList({data}) {
  // console.log("product_List",data)
  // const [showProduct, setShowProduct] = useState({})
  return (
    <div className="row">
      {
        data.map((item, index)=> (
          // console.log("item",item),
        <ProductItem 
          item={item}  
          // setShowProduct={setShowProduct} 
          key={item.id}/>
        ))
      }
      {/* <ProductModal {...showProduct}/> */}
    </div>
  );
}

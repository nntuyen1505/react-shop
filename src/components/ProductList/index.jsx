import React from "react";
import ProductItem from "../ProductItem";

export default function ProductList({data,loading}) {
  // console.log(data)
  return (
    <div className="row">
      {
        data.map((item, index)=> <ProductItem {...item} key={item.id}/>)
      }
      {/* {
        data.data1.map((e,i)=>console.log(e))
      } */}
    </div>
  );
}

/* eslint-disable react/prop-types */
// import { useState } from "react";
import Products from "./Products";



function ProductList(props) {
    // console.log(props.newProduct);
    // if(props.newProductList.length === 0)
    // {
    //     return <h3>No Products Available</h3>
    // }
    return props.newProductList.length === 0 ? <h3>No Products Available</h3> :
    (
        <>
            <ul className="list-group shadow">
                {props.newProductList.map((product) => {
                    // console.log(product);
                    return (
                        <Products
                            key={product?.pId} // Add key prop
                            id={product?.pId}
                            name={product?.pName}
                            description={product?.pDesc}
                            price={product?.pPrice}
                            image={product?.pImage}
                            isAvailable={product?.pAvailable}
                            productStock={product?.pStock}
                        />
                    );
                })}
            </ul>
        </>
    );
}
export default ProductList;
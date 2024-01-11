/* eslint-disable react/prop-types */
// import { useState } from "react";
import Products from "./Products";



function ProductList(props) {
    // console.log(props.newProduct);
    
    return (
        <>
            <div className='row'>
                <div className='col-lg-8 mx-auto'>
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
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default ProductList;
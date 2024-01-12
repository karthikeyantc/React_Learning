/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {
    // let productCount = 0;
    let [productCount, updateCount] = useState(0);
    let style = {
        padding: "8px 14px",
        fontSize: 16
    }
    function incrementCount() {
        // productCount++;
        // console.log(productCount);
        updateCount(++productCount);
    }
    function decrementCount() {
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount);
    }
    function getProductCount() {
        return productCount<=0 ? 0 : productCount;
    }
    let badgeClass = 'badge badge-margin-left-240 ';
    badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ 'marginRight': 30 }}>${props.price}</h6>
            <Button eventHandler={decrementCount} disable={productCount===0 }>-</Button>
            <span style={style}>{getProductCount()}</span>
            <Button eventHandler={incrementCount} disable={ productCount >= props.productStock}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )
}



export default ProductDetails;
/* eslint-disable react/prop-types */
import Button from "./Button";
let productCount = 0;
let style = {
    padding: "8px 14px",
    fontSize: 16
}
function ProductDetails(props) {

    let badgeClass = 'badge badge-margin-left-240 ';
    badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>${props.price}</h6>
            <Button>-</Button>
            <span style={style}>{productCount}</span>
            <Button>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )
}



export default ProductDetails;
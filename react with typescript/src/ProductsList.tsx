import { useState } from "react"
import Modal from "./PortalComponents/Modal"
// import PortalComponent from "./PortalComponents/PortalComponent"

import { Product } from "./ProductTypes"

type ProductListProps = {
    products: Product[]
    eventhandler: () => void
    children?: React.ReactNode
}

function ProductList(props: ProductListProps)
{
    const[showModal,updateShowModal]=useState<boolean>(false);
    function displayModal()
    {
        updateShowModal(true);
    }
    function hideModal()
    {
        updateShowModal(false);
    }
    return(
        <>
        <h1>Product List</h1>
        <div className="product-list">
            {props.products.map((product) => (
                <div className="product-card" key={product.id}>
                    {/* <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p> */}
                    <button onClick={displayModal}>Click Me</button>
                    {/* {props.children} */}
                </div>
            ))}
        </div>
        {/* <PortalComponent /> */}
        <Modal showModal={showModal} hideModal={hideModal} />
        </>
    )
}
export default ProductList
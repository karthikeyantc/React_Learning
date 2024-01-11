/* eslint-disable react/prop-types */
import {useState} from "react";

function ProductForm(props)
{
    //multiple state approach
    let[pName,updateName] = useState('')
    let[pPrice,updatePrice] = useState(0)
    let[pDescription,updateDescription] = useState('')
    let[pIsAvailable,updateIsAvailable] = useState(false)
    let[pImage,updateImage] = useState('')

    //Single State approach
    // let[userInput, updateUserInput] = useState({
    //     pName:'',
    //     pPrice:0,
    //     pDescription:'',
    //     pIsAvailable:false,
    //     pImage:''
    // });

    function nameInputHandler(event)
    {   
        updateName(event.target.value)
        //This is a way to update the state of an object that is grouped together, We have to use the previous state to update the state of an object because if we don't use the previous state then the state will be overwritten by the new state and we will lose the previous state.
        // updateUserInput((prevState)=>{
        //     return{
        //         // '...' This kind of syntax is called spread operator
        //         ...prevState,
        //         pName:event.target.value
        //     }
        // })
    }
    function priceInputHandler(event)
    {
        updatePrice(event.target.value)
        // updateUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         pPrice:event.target.value
        //     }
        // })
    }
    function descriptionInputHandler(event)
    {
        updateDescription(event.target.value)
        // updateUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         pDescription:event.target.value
        //     }
        // })
    }
    function isAvailableInputHandler(event)
    {
        updateIsAvailable(event.target.checked)
        //This is also a way to update the state of an object that is grouped together but this will not some cases as react will group changes together and that sometimes will not result in latest available state. There is a chance that it may be skipped sometimes.
        // updateUserInput({
        //     ...userInput,
        //     pIsAvailable:event.target.checked}) 
    }
    function imageInputHandler(event)
    {
        updateImage(event.target.value)
        // updateUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         pImage:event.target.value
        //     }
        // })
    }

    function createProductEventHandler(event)
    {
        event.preventDefault();
        let product = {
            pId : 1,
            pName:pName,
            pPrice:pPrice,
            pDesc:pDescription,
            pAvailable:pIsAvailable,
            pImage:pImage
        }
        updateName('');
        updatePrice(0);
        updateDescription('');
        updateIsAvailable(false);
        updateImage('');

        // console.log(product);
        props.createProduct(product);
    }
    return (
        <>
            <form className="row g-3" onSubmit={createProductEventHandler}>
                <div className="col-md-6">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Product Name" value={pName} onChange={nameInputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="price">Product Price</label>
                    <input type="number" min={0.01} step={0.01} className="form-control" value={pPrice} id="price" placeholder="Price" onChange={priceInputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Product Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Description" value={pDescription} onChange={descriptionInputHandler} />
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pIsAvailable} onChange={isAvailableInputHandler} />
                    <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
                </div>
                <div className="form-group">
                    <label htmlFor="select-image">Product Image</label>
                    <input type="file" className="form-control" id="select-image" placeholder="Add image" value={pImage} onChange={imageInputHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}
export default ProductForm;
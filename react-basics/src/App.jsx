import { useState } from 'react'
import './App.css'
import CreateProduct from './Components/CreateProduct/CreateProduct'
import ProductList from './Components/ProductList/ProductList'

const products = [
  {
      pId: 1,
      pName: 'Wrist watch',
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pPrice: 25.00,
      pImage: 'https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg',
      pAvailable: true,
  },
  {
      pId: 2,
      pName: 'Smart watch',
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pPrice: 35.00,
      pImage: 'https://img.freepik.com/free-photo/gray-scale-shot-black-watch_181624-422.jpg?w=1060&t=st=1704893817~exp=1704894417~hmac=a71f7d7511601eb07ef88efb1e1f281194fa18f62401f5467d845c9bc1ffb656',
      pAvailable: false,
  },
  {
      pId: 3,
      pName: 'Luxury watch',
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pPrice: 45.00,
      pImage: 'https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?w=740&t=st=1704893865~exp=1704894465~hmac=a68918a36523c7c450398a38c16893ac7623f97723d07089193173ce77bcd984',
      pAvailable: true,
  },
  {
      pId: 4,
      pName: 'Sports watch',
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pPrice: 30.00,
      pImage: 'https://images-na.ssl-images-amazon.com/images/I/71EVl1NyHqL.jpg',
      pAvailable: true,
  },
  {
      pId: 5,
      pName: 'Rolex watch',
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pPrice: 55.00,
      pImage: 'https://img.freepik.com/premium-photo/men-s-luxury-watch-isolated-white-background_136960-1111.jpg?w=360',
      pAvailable: false,
  }
];
function App() {

  let [newProductList, updateProductList] = useState(products);

  function createProduct(product) {
    // console.log(product)
    product.pId = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }
  return (
    <>
    <CreateProduct createProduct={createProduct}/>
    <ProductList newProductList={newProductList} />
    </>
  )
}

export default App

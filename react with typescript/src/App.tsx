// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Product } from './ProductTypes.ts'
// import ProductList from './ProductsList.tsx'
import RefsDemo from './Refs/RefsDemo.tsx';

function App() {
  // const [count, setCount] = useState(0)
  
  //create a productlist that is an array of Product objects
  const productList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'This is product 1',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'This is product 2',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'This is product 3',
      image: 'https://picsum.photos/200/300',
    }
  ];

  console.log(productList)

  // function handleClick() {
  //   // setCount((count) => count + 1)
  //   console.log('The button was clicked!')
  // }

  return (
    <>
      {/* <ProductList products={productList} eventhandler={handleClick}>
        <h3>Children Node</h3>
      </ProductList> */}
      <RefsDemo />
    </>
  )
}

export default App

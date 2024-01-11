
import './App.css'
import Products from './Components/Products'

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
]

function App() {
  

  return (
    <>
      <div className='row'>
        <div className='col-lg-8 mx-auto'>
          <ul className="list-group shadow">
            <Products 
              id={products[0].pId}
              name={products[0].pName}
              description={products[0].pDesc}
              isAvailable={products[0].pAvailable}
              price={products[0].pPrice}
              image={products[0].pImage}
            />
            <Products 
              id={products[1].pId}
              name={products[1].pName}
              description={products[1].pDesc}
              isAvailable={products[1].pAvailable}
              price={products[1].pPrice}
              image={products[1].pImage}
            />
            <Products 
              id={products[2].pId}
              name={products[2].pName}
              description={products[2].pDesc}
              isAvailable={products[2].pAvailable}
              price={products[2].pPrice}
              image={products[2].pImage}
            />
            <Products 
              id={products[3].pId}
              name={products[3].pName}
              description={products[3].pDesc}
              isAvailable={products[3].pAvailable}
              price={products[3].pPrice}
              image={products[3].pImage}
            />
            <Products 
              id={products[4].pId}
              name={products[4].pName}
              description={products[4].pDesc}
              isAvailable={products[4].pAvailable}
              price={products[4].pPrice}
              image={products[4].pImage}
            />
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default App


import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('');
  useEffect(() => {
    console.log('resourceType changed');
  },[resourceType]);

  return (
    <>
      <div className="App">
        <button onClick={()=> {setResourceType('HOME')}}>HOME</button>
        <button onClick={()=>{setResourceType('ABOUT')}}>ABOUT</button>
        <button onClick={()=>{setResourceType('CONTACT')}}>CONTACT</button>
        <h3>{resourceType}</h3>
      </div>
    </>
  )
}

export default App

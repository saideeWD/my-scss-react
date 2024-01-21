import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
export const CategoryContax = createContext();
function App() {

  const [count,setCount] = useState("Laptop");
  return (
    <div className="App">
      <CategoryContax.Provider value={[count,setCount]}>

     <p>count valu :{count}</p>
      <Header></Header>
      <Home setCount={setCount}></Home>
      <Shipment></Shipment>
      </CategoryContax.Provider>
    </div>
  );
}

export default App;

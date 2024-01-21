import React, { useContext } from 'react';
import { CategoryContax } from '../../App';


const Shipment = () => {
    const [category , setCount] = useContext(CategoryContax)
    return (
        <div>
            <h1>This is ShipMent</h1>
            <button onClick={()=>setCount(category+1)}>Love </button>
        </div>
    );
};

export default Shipment;
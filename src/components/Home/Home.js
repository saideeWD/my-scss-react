import React, { useContext } from 'react';
import Categores from './../Categores/Categores';
import { CategoryContax } from '../../App';

const Home = (props) => {
    const [category,setCount] = useContext(CategoryContax)
    return (
        <div>
            <h1>this is home : {category}</h1>
            <Categores count={category}></Categores>
            
            <button onClick={()=>setCount('Laptop')}>Laptop</button>
            <button onClick={()=>setCount('phone')}>Phone</button>
            <button onClick={()=>setCount('Motherboard')}>cemara</button>
        </div>
    );
};

export default Home;
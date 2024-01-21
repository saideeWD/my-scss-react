import React, {useContext, useEffect, useState } from 'react';
import CatagoryDateill from '../CatagoryDateill/CatagoryDateill';
import { CategoryContax } from '../../App';
const allProducts =[{name:"Lenavo", cetagory:"Laptop"},
{name:"Apple", cetagory:"phone"},
{name:"asus", cetagory:"Motherboard"}]

const Categores = (props) => {
   const [cetagory] = useContext(CategoryContax);
   const [product ,setProduct]=useState([]);
   useEffect(()=>{
    const matchProducts = allProducts.filter(pd=>pd.cetagory === cetagory && cetagory.toLowerCase());
    setProduct(matchProducts)


   },[cetagory])
    return (
        <div>
         
            <h4>Select our product : {cetagory}</h4>
           {
            product.map(pd=><CatagoryDateill product={pd}></CatagoryDateill> )
           }
        </div>
    );
};

export default Categores;
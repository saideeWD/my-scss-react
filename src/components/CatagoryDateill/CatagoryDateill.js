import React, { useContext } from 'react';
import { CategoryContax } from '../../App';

const CatagoryDateill = (props) => {
    // const {count} = props;
const {name} = props.product;
    return (
        <div>
            <h5>Category detail : {name}</h5>
        </div>
    );
};

export default CatagoryDateill;
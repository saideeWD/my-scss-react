import React, { useContext } from 'react';
import { CategoryContax } from '../../App';

const Header = () => {
    const category = useContext(CategoryContax)

    return (
        <div>
            <h1>This is : {category}</h1>
        </div>
    );
};

export default Header;
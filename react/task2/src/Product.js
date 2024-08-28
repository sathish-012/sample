
import React, { useEffect } from 'react';

const Product = () => {
    useEffect(() => {
        fetch('https://api.restful-api.dev/objects')
            .then(response => response.json())
            .then(data => {
                console.log(data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
};

export default Product;

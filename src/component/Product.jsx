import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Product = () => {
   
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const thisProduct = product.find((product) => product.id === parseint(id))
        setName(thisProduct.name)
        setPrice(thisProduct.price)
        setDescription(thisProduct.description)
    });
    return (
        <div className="container">
            <h2>Name</h2>
            <br/>
            <h3>Price</h3>
            <br/>
            <p>Description</p>
        </div>
    )
}



export default Product;
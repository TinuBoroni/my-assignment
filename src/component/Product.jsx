import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

const Product = () => {

    
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescribtion] = useState("")

    const { id } = useParams();

    useEffect(() => {
        const thisProduct = products.find((product))
        setName(thisProduct.name)
        setPrice(thisproduct.price)
        setDescribtion(thisproduct.description)
    })
    return (
        <div className = "container">
            <h2>{name}</h2>
            <br />
            <h3>{price}</h3>
            <br />
            <p>{description}</p>
        </div>
    )

}

export default Product;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
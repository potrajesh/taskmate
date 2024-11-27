import React, { useEffect, useState } from 'react'
import { useFetch } from '../hook/useFetch';

export default function ProductList() {

    
    const count = 0;
    const [url,setUrl] = useState("http://localhost:3000/posts");
    const {products} = useFetch(url);
    const productList = Array.isArray(products) ? products : [];
    return (
        <section>
            <h1>Product List</h1>
            {
        productList.map((p)=>(
                <p>key={p.name}</p>
            ))
            }
        </section>
    )
}

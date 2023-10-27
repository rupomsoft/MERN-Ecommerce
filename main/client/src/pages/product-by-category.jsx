import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ListByBrandRequest, ListByCategoryRequest} from "../apiRequest/ApiRequest.js";
import ProductsSkeleton from "../component/loader/ProductsSkeleton.jsx";
import Master from "../component/Master.jsx";
import ProductList from "../component/ProductList.jsx";
const ProductByCategory = () => {

    let {category}=useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        (async () => {
            let result= await ListByCategoryRequest(category);
            setData(result);
        })()
    },[0])

    if(data.length===0){
        return (<Master>
            <ProductsSkeleton/>
        </Master>)
    }
    else{
        return (
            <Master>
                <ProductList data={data}/>
            </Master>
        );
    }
};

export default ProductByCategory;
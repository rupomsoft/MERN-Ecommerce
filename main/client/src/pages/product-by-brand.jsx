import React, {useEffect, useState} from 'react';
import ProductList from "../component/ProductList.jsx";
import {useParams} from "react-router-dom";
import {ListByBrandRequest} from "../apiRequest/ApiRequest.js";
import ProductsSkeleton from "../component/loader/ProductsSkeleton.jsx";
import Master from "../component/Master.jsx";
const ProductByBrand = () => {

    let {brand}=useParams()

    const [data,setData]=useState([])

    useEffect(()=>{
        (async () => {
            let result= await ListByBrandRequest(brand);
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
export default ProductByBrand;
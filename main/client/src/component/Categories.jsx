import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {CategoryListRequest} from "../apiRequest/ApiRequest.js";
import CategoriesSkeleton from "./loader/CategoriesSkeleton.jsx";


const Categories = () => {


    const [data,setData]=useState([])

    useEffect(()=>{

        (async () => {
            let result= await CategoryListRequest();
            setData(result);
        })()

    },[0])


    if(data.length===0){
        return  <CategoriesSkeleton/>
    }
    else{
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
                        <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br/>Shopping Categories</span>
                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">
                                        <Link to={"/product-by-category/"+item['_id']} className="card h-100 rounded-3 bg-light">
                                            <div className="card-body">
                                                <img className="w-75" src={item['categoryImg']}/>
                                                <p className="bodySmal mt-3">{item['categoryName']}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Categories;
import React, {useEffect, useState} from 'react';
import {RemoveWishListRequest, WishListRequest} from "../apiRequest/ApiRequest.js";
import ProductsSkeleton from "./loader/ProductsSkeleton.jsx";
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import SubmitButton from "./SubmitButton.jsx";

const WishList = () => {

    const [data_new,setData_new]=useState([])
    const [refresh,setRefresh]=useState(0)

    useEffect(()=>{
        (async () => {
            let WishList= await WishListRequest();
            setData_new(WishList);
        })()
    },[refresh])

    
    const Remove = async (productID) => {
        setData_new([]);
        let data= await RemoveWishListRequest(productID);
        if(data['status']==="success"){
            toast.success(data['message'])
        }else {
            toast.error(data['message'])
        }
        setRefresh(1);
    }



    return (
        <div>
            {
                data_new.length===0?(<ProductsSkeleton/>):(
                    <div className="container">
                        <div className="row">
                            {
                                data_new.map((item,i)=>{

                                    let price=<p className="bodyMedium  text-dark my-1">Price: ${item['product']['price']} </p>
                                    if(item['product']['discount']===true){
                                        price=<p className="bodyMedium  text-dark my-1">Price: <strike>${item['product']['price']}</strike> ${item['product']['discountPrice']}</p>
                                    }

                                    return(
                                        <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                            <div className="card shadow-sm h-100 rounded-3 bg-white">
                                                <Link to={"/details/"+item['productID']}><img className="w-100 rounded-top-2" src={item['product']['image']}/></Link>
                                                <div className="card-body">
                                                    <Link to={"/details/"+item['productID']}>
                                                    <p className="bodySmal text-secondary my-1">{item['product']['title']}</p>
                                                    {price}
                                                    </Link>
                                                    <SubmitButton submit={false} text="Remove" onClick={()=>{Remove(item['productID'])}} className="btn btn-danger btn-sm"/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            <Toaster position={"bottom-center"} />
        </div>
    );
};

export default WishList;
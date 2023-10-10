import React, {useEffect, useState} from 'react';
import {FeaturesListRequest} from "../apiRequest/ApiRequest.js";
import FeaturesSkeleton from "./loader/FeaturesSkeleton.jsx";

const Features = () => {

    const [data,setData]=useState([])

    useEffect(()=>{

        (async () => {
            let result= await FeaturesListRequest();
            setData(result);
        })()

    },[0])



    if(data.length===0){
        return <FeaturesSkeleton/>
    }
    else{
        return (
            <div className="container section">
                <div className="row">
                    {
                        data.map((item,i)=>{
                            return(
                                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="w-100" src={item['img']}/>
                                                </div>
                                                <div className="col-9">
                                                    <h3 className="bodyXLarge">{item['name']}</h3>
                                                    <span className="bodySmal">{item['description']}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Features;
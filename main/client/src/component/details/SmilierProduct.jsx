import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ListBySmilierRequest} from "../../apiRequest/ApiRequest.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const SmilierProduct = (props) => {

    const [data,setData]=useState([])

    useEffect(()=>{

        (async () => {
            let result= await ListBySmilierRequest(props.categoryID);
            setData(result);
        })()

    },[0])

    
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">You May Like</h1>
                    <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br/>Shopping Categories</span>

                    {
                        data.length>0?(
                            data.map((item,i)=>{

                                let price=<p className="bodyMedium  text-dark my-1">Price: ${item['price']} </p>
                                if(item['discount']===true){
                                    price=<p className="bodyMedium  text-dark my-1">Price: <strike>${item['price']}</strike> ${item['discountPrice']}</p>
                                }

                                return(
                                    <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                        <Link to="/" className="card shadow-sm h-100 rounded-3 bg-white">
                                            <img className="w-100 rounded-top-2" src="https://photo.teamrabbil.com/images/2023/10/03/Apple2.png"/>
                                            <div className="card-body">
                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                {price}
                                                <StarRatings
                                                    rating={parseFloat(item['star'])}
                                                    starRatedColor="red"
                                                    starDimension="15px"
                                                    starSpacing="2px"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        ):(<span className="text-center">No Data Found</span>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SmilierProduct;
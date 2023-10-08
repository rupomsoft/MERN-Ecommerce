import React, {useEffect, useState} from 'react';
import {SliderListRequest} from "../apiRequest/ApiRequest.js";
const Slider = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        (async () => {
            let result= await SliderListRequest();
            setData(result);
        })()
    },[0])

    return (
        <div id="carouselExampleDark" className="carousel hero-bg carousel-dark slide">
            <div className="carousel-indicators">
                {
                    data.length>0?(
                        data.map((item,i)=>{
                            return(
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide "+ i}></button>
                            )
                        })
                    ):(<span className="text-center">No Data Found</span>)
                }
            </div>
            <div className="carousel-inner py-5">

                {
                    data.length>0?(
                        data.map((item,i)=>{

                            let active="carousel-item";
                            if(i===0){
                                active="carousel-item active"
                            }
                            return(
                                <div className={active} data-bs-interval="10000">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                <h1 className="headline-1">{item['title']}</h1>
                                                <p>{item['des']}</p>
                                                <button className="btn text-white btn-success px-5">Buy Now</button>
                                            </div>
                                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                                <img src="https://photo.teamrabbil.com/images/2023/10/03/Apple.png" className="w-100" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ):(<span className="text-center">No Data Found</span>)
                }
            </div>
            <button className="carousel-control-prev btn rounded-5" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;
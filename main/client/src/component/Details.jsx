import React, {useEffect, useState} from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {DetailsListRequest} from "../apiRequest/ApiRequest.js";
import {useParams} from "react-router-dom";
import parse from 'html-react-parser';
const Details = () => {

    let {id}=useParams()
    const [quantity, setQuantity] = useState(1);


    const [data,setData]=useState([]);
    const [color,setColor]=useState([]);
    const [size,setSize]=useState([]);

    const [images,setImages]=useState([])



    useEffect(()=>{

        (async () => {
            let result= await DetailsListRequest(id);
            setData(result);

            setImages([
                {original:result[0]['details']['img1'],thumbnail:result[0]['details']['img1']},
                {original:result[0]['details']['img2'],thumbnail:result[0]['details']['img2']},
                {original:result[0]['details']['img3'],thumbnail:result[0]['details']['img3']},
                {original:result[0]['details']['img4'],thumbnail:result[0]['details']['img4']},
                {original:result[0]['details']['img5'],thumbnail:result[0]['details']['img5']},
                {original:result[0]['details']['img6'],thumbnail:result[0]['details']['img6']},
                {original:result[0]['details']['img7'],thumbnail:result[0]['details']['img7']},
                {original:result[0]['details']['img8'],thumbnail:result[0]['details']['img8']},
            ])

            const colorArray = result[0]['details']['color'].split(",");
            setColor(colorArray);

            const sizeArray = result[0]['details']['size'].split(",");
            setSize(sizeArray);


        })()

    },[0])



    const incrementQuantity = () => {
        setQuantity(quantity => quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1);
        }
    };

    const AddCart = (e) => {
      e.preventDefault();
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <ImageGallery autoPlay={true} items={images} />
                    </div>

                    <div className="col-md-5">
                        <h2>Product Name</h2>
                        <p className="text-muted bodySmal my-1">Category: {data[0]?(data[0]['category']['categoryName']):("")}</p>
                        <p className="text-muted bodySmal mb-2 mt-1">Brand: {data[0]?(data[0]['brand']['brandName']):("")}</p>
                        <p className="bodySmal mb-2 mt-1">{data[0]?(data[0]['shortDes']):("")}</p>

                        <h4>{(()=>{
                            if(data[0]){
                                if(data[0]['discount']===true){
                                    return <span><strike class="text-secondary">${data[0]['price']}</strike> {data[0]['discountPrice']}</span>
                                }
                                else{
                                    return <span>${data[0]['price']}</span>
                                }
                            }

                        })()}</h4>

                        <div className="row">
                            <div className="col-4 p-2">
                                <label className="bodySmal">Size</label>
                                <select  className="form-control my-2 form-select">
                                    {
                                        size.map((item,i)=>{
                                            return <option key={i} value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-4  p-2">
                                <label className="bodySmal">Color</label>
                                <select className="form-control my-2 form-select">
                                    {
                                        color.map((item,i)=>{
                                            return <option key={i} value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-4  p-2">
                                <label className="bodySmal">Quantity</label>
                                <div className="input-group my-2">
                                    <button onClick={decrementQuantity} className="btn btn-outline-secondary" disabled={quantity <= 1}>-</button>
                                    <input type="text" value={quantity} className="form-control bg-light text-center" readOnly/>
                                    <button onClick={incrementQuantity} className="btn btn-outline-secondary">+</button>
                                </div>
                            </div>
                            <div className="col-4  p-2">
                                <button type="submit" className="btn w-100 btn-success">Add to Cart</button>
                            </div>
                            <div className="col-4  p-2">
                                <button type="submit" className="btn w-100 btn-success">Add to Wish</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">Specifications</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                            {
                                data[0]?(
                                    parse(data[0]['details']['des'])
                                ):("")
                            }

                        </div>
                        <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">...</div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
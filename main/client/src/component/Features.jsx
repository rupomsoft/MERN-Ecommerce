import React from 'react';
import f1 from "../assets/images/f1.svg"
import f2 from "../assets/images/f2.svg"
import f3 from "../assets/images/f3.svg"
import f4 from "../assets/images/f4.svg"
const Features = () => {
    return (
        <div className="container section">
            <div className="row">
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img className="w-100" src={f1}/>
                                </div>
                                <div className="col-9">
                                        <h3 className="bodyXLarge">Free Delivery</h3>
                                        <span className="bodySmal">For All Orders Over $99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img className="w-100" src={f2}/>
                                </div>
                                <div className="col-9">
                                    <h3 className="bodyXLarge">90 Days Return</h3>
                                    <span className="bodySmal">If goods have problem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img className="w-100" src={f3}/>
                                </div>
                                <div className="col-9">
                                    <h3 className="bodyXLarge">Secure Payment</h3>
                                    <span className="bodySmal">100% Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img className="w-100" src={f4}/>
                                </div>
                                <div className="col-9">
                                    <h3 className="bodyXLarge">24/7 Support</h3>
                                    <span className="bodySmal">Dedicated Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
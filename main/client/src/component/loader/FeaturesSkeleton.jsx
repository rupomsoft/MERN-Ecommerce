import React from 'react';
import Skeleton from 'react-loading-skeleton'
import ImagePlaceholder from "../../assets/images/image.json"
import Lottie from "lottie-react";
import 'react-loading-skeleton/dist/skeleton.css'
const FeaturesSkeleton = () => {
    return (

        <div className="container section">
            <div className="row">
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <Lottie  className="w-100" animationData={ImagePlaceholder} loop={true} />
                                </div>
                                <div className="col-8">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <Lottie  className="w-100" animationData={ImagePlaceholder} loop={true} />
                                </div>
                                <div className="col-8">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <Lottie  className="w-100" animationData={ImagePlaceholder} loop={true} />
                                </div>
                                <div className="col-8">
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSkeleton;
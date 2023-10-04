import React from 'react';

const Slider = () => {
    return (
        <div id="carouselExampleDark" className="carousel hero-bg carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner py-5">

                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <h1 className="headline-1">First slide label</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <button className="btn text-white btn-success px-5">Buy Now</button>
                            </div>
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <img src="https://photo.teamrabbil.com/images/2023/10/03/Apple.png" className="w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item " data-bs-interval="10000">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <h1 className="headline-1">First slide label</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <button className="btn text-white btn-success px-5">Buy Now</button>
                            </div>
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <img src="https://photo.teamrabbil.com/images/2023/10/03/Apple.png" className="w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item " data-bs-interval="10000">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <h1 className="headline-1">First slide label</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <button className="btn text-white btn-success px-5">Buy Now</button>
                            </div>
                            <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                                <img src="https://photo.teamrabbil.com/images/2023/10/03/Apple.png" className="w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

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
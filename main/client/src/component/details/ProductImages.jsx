import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ProductImages = (props) => {
    return (
        <div>
            <ImageGallery autoPlay={true} items={props.images} />
        </div>
    );
};

export default ProductImages;
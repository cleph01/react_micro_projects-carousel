import React from "react";

const CarouselItem = ({ item }) => {
    return (
        <div className="carousel_item">
            <div></div>
            <img src={item.icon.default} alt="" className="carousel_img" />
            <div className="carousel_item_text">{item.description}</div>
        </div>
    );
};

export default CarouselItem;

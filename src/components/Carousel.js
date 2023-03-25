import { useState } from "react";
import CarouselItem from "./CarouselItem";

const items = [
    {
        title: "Baseball",
        description:
            "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding.",
        icon: require("../media/example1.svg"),
    },
    {
        title: "Walking",
        description:
            "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals.",
        icon: require("../media/example2.svg"),
    },
    {
        title: "Weights",
        description:
            "Weight training is a common type of strength training for developing the strength, size of skeletal muscles and maintenance of strength.",
        icon: require("../media/example3.svg"),
    },
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div
                className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {items.map((item, idx) => (
                    <CarouselItem key={idx} item={item} />
                ))}
            </div>
            <div className="carousel_buttons">
                <button
                    className="button_arrow"
                    onClick={() => updateIndex(activeIndex - 1)}
                >
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <div className="indicators">
                    {items.map((item, idx) => (
                        <button
                            key={idx}
                            className="indicator_buttons"
                            onClick={() => updateIndex(idx)}
                        >
                            <span
                                className={`material-symbols-outlined ${
                                    activeIndex === idx
                                        ? "indicator_symbol_active"
                                        : "indicator_symbol"
                                }`}
                            >
                                radio_button_checked
                            </span>
                        </button>
                    ))}
                </div>
                <button
                    className="button_arrow"
                    onClick={() => updateIndex(activeIndex + 1)}
                >
                    <span class="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;

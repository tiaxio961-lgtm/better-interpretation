
import { useState } from "react";
import "./Slideshow.css";

const slides = [
    {
        title: "Accuracy",
        description: "Deliver the complete message without changing its meaning.",
        image: process.env.PUBLIC_URL + "/images/accuracy.png"
    },
    {
        title: "Clarity",
        description: "Help people understand each other clearly.",
        image: process.env.PUBLIC_URL + "/images/clarity.png"
    },
    {
        title: "Professionalism",
        description: "Stay respectful, calm, and neutral while interpreting.",
        image: process.env.PUBLIC_URL + "/images/professionalism.png"
    }
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="slideshow">
            <h2>INTERPRETING SKILLS</h2>

            <div className="slide-content">
                <button onClick={prevSlide} aria-label="Previous slide">
                    &#10094;
                </button>

                <div className="slide">
                    <img src={slides[current].image} alt={slides[current].title} />
                    <h3>{slides[current].title}</h3>
                    <p>{slides[current].description}</p>
                </div>

                <button onClick={nextSlide} aria-label="Next slide">
                    &#10095;
                </button>
            </div>

            <p className="slide-counter">
                {current + 1} / {slides.length}
            </p>
        </section>
    );
};

export default Slideshow;

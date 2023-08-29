import React, { useState, useEffect } from 'react';
import image1 from '../assets/img/home/venosaur-carousel.png';
import image2 from '../assets/img/home/charizard-carousel.png';
import image3 from '../assets/img/home/blastoise-carousel.png';
import '../assets/styles/pokemonCarousel.scss';

const images = [
    { url: image1, name: 'Venosaur' },
    { url: image2, name: 'Charizard' },
    { url: image3, name: 'Blastoise' },
];

const PokemonCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplayInterval, setAutoplayInterval] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
        stopAutoplay();
        startAutoplay();
    };

    const startAutoplay = () => {
        setAutoplayInterval(setInterval(nextSlide, 4500));
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    useEffect(() => {
        startAutoplay();
        return () => {
            stopAutoplay();
        };
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-container__box-images">
                <div key={activeIndex} className="carousel-container__slide">
                    <img
                        src={images[activeIndex].url}
                        alt={images[activeIndex].name}
                        className="carousel-container__image"
                    />
                </div>
            </div>
            <div className="carousel-container__bullets">
                {images.map((image, index) => (
                    <span
                        key={index}
                        className={`carousel-container__bullet ${
                            index === activeIndex ? 'carousel-container__bullet--active' : ''
                        }`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCarousel;

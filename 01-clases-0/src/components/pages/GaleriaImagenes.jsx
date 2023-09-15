import React, { useState, useEffect } from 'react';

function Galeria() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: "./src/assets/gallery_image1.jpg", caption: "Salón Précieux - Imagen 1" },
        { src: "./src/assets/gallery_image2.jpg", caption: "Salón Précieux - Imagen 2" },
        { src: "./src/assets/gallery_image3.jpg", caption: "Salón Précieux - Imagen 3" },
        { src: "./src/assets/gallery_image4.jpg", caption: "Salón Précieux - Imagen 4" },
        { src: "./src/assets/gallery_image5.jpg", caption: "Salón Précieux - Imagen 5" },
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Cambio automático cada 5 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="gallery">
            <div className="gallery__container">
                <button className="gallery__prev" onClick={prevSlide}>&#10094;</button>
                <div className="gallery__slide">
                    <img src={images[currentIndex].src} alt={images[currentIndex].caption} className="gallery__image" />
                    <div className="gallery__overlay">
                        <p className="gallery__caption">{images[currentIndex].caption}</p>
                    </div>
                </div>
                <button className="gallery__next" onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
}

export default Galeria;

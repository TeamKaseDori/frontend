import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap'; 
import classes from './kasedoriAnimation.module.css'; 

export const KasedoriAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = [
        '/pictures/a1.png',
        '/pictures/a2.png',
        '/pictures/a3.png',
        '/pictures/a4.png',
        '/pictures/a5.png',
        '/pictures/a6.png',
        '/pictures/a7.png',
        '/pictures/a8.png',
        '/pictures/a9.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
            if (prevIndex === pictures.length * 2 - 2) {
            return 0;
            }
            return prevIndex + 1;
        });
        }, 40); 

        return () => clearInterval(interval); 
    }, [pictures.length]);

    const displayIndex = currentIndex < pictures.length
        ? currentIndex
        : pictures.length * 2 - 2 - currentIndex;

    return (
        <div className={classes.carouselContainer}>
        <Image 
            src={pictures[displayIndex]} 
            alt={`Slide ${displayIndex + 1}`} 
            className={classes.carouselImage}
            fluid
        />
        </div>
    );
};


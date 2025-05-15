import { useState, useEffect } from 'react';

const useDeviceSize = () => {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    const [isMobile, setIsMobile] = useState(size.width < 768);
    // const breakPoints = {
    //     'sm': 640,
    //     'md': 768,
    //     'lg': 1024,
    //     'xl': 1280
    // }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize(); // Set initial size
        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { ...size, isMobile };
};

export { useDeviceSize };
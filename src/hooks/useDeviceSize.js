import { useState, useEffect } from 'react';

const useDeviceSize = () => {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
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

    return size;
};

export { useDeviceSize };